#!/usr/bin/env python3
"""Re-process client logos: trim, remove white/light background → transparent PNG.
Usage: python3 scripts/clean-logos.py
"""
from pathlib import Path
from PIL import Image

SRC_DIR = Path(__file__).parent.parent / "public/images/clients"
TOLERANCE = 28

def color_distance(c1, c2):
    return sum((a - b) ** 2 for a, b in zip(c1, c2)) ** 0.5

def detect_bg_color(img):
    w, h = img.size
    corners = [img.getpixel((0, 0)), img.getpixel((w - 1, 0)),
               img.getpixel((0, h - 1)), img.getpixel((w - 1, h - 1))]
    base = corners[0][:3]
    if all(color_distance(c[:3], base) < 10 for c in corners):
        return base
    return None

def remove_bg(img):
    img = img.convert("RGBA")
    bg = detect_bg_color(img) or (255, 255, 255)
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            d = color_distance((r, g, b), bg)
            if d <= TOLERANCE:
                pixels[x, y] = (r, g, b, 0)
            elif d < TOLERANCE * 1.6:
                factor = (d - TOLERANCE) / (TOLERANCE * 0.6)
                pixels[x, y] = (r, g, b, int(255 * max(0, min(1, factor))))
    return img

def trim(img):
    if img.mode != "RGBA":
        return img
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img

def main():
    for f in sorted(SRC_DIR.glob("*")):
        if f.suffix.lower() not in (".jpg", ".jpeg", ".png", ".webp"):
            continue
        img = Image.open(f)
        cleaned = trim(remove_bg(img))
        out = f.with_suffix(".png")
        cleaned.save(out, "PNG", optimize=True)
        if f.suffix.lower() != ".png":
            f.unlink()
        print(f"OK {out.name}")

if __name__ == "__main__":
    main()
