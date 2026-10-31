from PIL import Image, ImageFilter
import math

src = r"C:\Users\ASUS\.gemini\antigravity\brain\753813ae-5a82-4c57-b181-71cf4026e4fc\cta_team_green_1793452472875.jpg"
dest = r"public\images\about\cta-consultant-team.png"

im = Image.open(src).convert("RGBA")
width, height = im.size

# Sample green background
# Background is roughly around rgb(25, 187, 24)
pixels = im.load()

# Step 1: Compute alpha mask
mask = Image.new("L", (width, height), 255)
mask_pixels = mask.load()

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        
        # Check if pixel is green background
        # Green channel is significantly higher than red and blue
        is_green = (g > 100) and (g > r * 1.25) and (g > b * 1.25)
        
        # Also clean any small potted plants on far edges (x < 60 or x > width - 60) if they are outside the desk
        is_edge_plant = (y > height * 0.7) and (x < 60 or x > width - 60) and (g > r and g > b)

        if is_green or is_edge_plant:
            mask_pixels[x, y] = 0
        else:
            # Check edge transition (despill)
            if g > (r + b) / 2 and g > 80:
                # reduce green tint on edge pixels (spill suppression)
                max_rb = max(r, b)
                if g > max_rb:
                    pixels[x, y] = (r, int((r + b) / 2), b, 255)

# Smooth mask edge slightly (1px)
mask = mask.filter(ImageFilter.GaussianBlur(radius=0.7))

# Apply mask as alpha
im.putalpha(mask)

# Save result as PNG
im.save(dest, "PNG")
print("Successfully extracted transparent CTA team cutout to:", dest)
