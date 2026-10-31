from PIL import Image

src = "public/images/about/cta-consultant-team-cropped.png"
im = Image.open(src).convert("RGBA")
w, h = im.size
pixels = im.load()

# Let's inspect and clean any remaining green or chair pixels
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue

        # Check for greenish chair mesh
        if g > r and g > b and (g > 50):
            pixels[x, y] = (0, 0, 0, 0)
            continue

        # Clean left side outside the male model's body
        # His left arm is around x=80 to x=350. Far left (x < 70) is empty/chair
        if x < 65 and y < h - 70:
            pixels[x, y] = (0, 0, 0, 0)
            continue

        # Clean right side outside the female model's body
        # Her right arm ends around x=980. Anything x > 970 and y < h - 70 with dark greenish/grayish chair
        if x > 960 and y < h - 70:
            # If it's the chair mesh (low saturation, dark, or green tint)
            if abs(r - g) < 25 and abs(g - b) < 25 and r < 80:
                pixels[x, y] = (0, 0, 0, 0)
                continue

# Crop to remove any empty transparent border
bbox = im.getbbox()
if bbox:
    im = im.crop(bbox)

im.save("public/images/about/cta-consultant-team.png", "PNG")
print("Cleaned and saved cta-consultant-team.png, size:", im.size)
