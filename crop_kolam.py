from PIL import Image
import os

mockup_path = r"C:\Users\VAISHU\.gemini\antigravity\brain\94cf7b9c-d809-44df-afe8-5cc74b99c835\ui_mockup_2_1782828604547.png"
output_path = r"d:\veila\bharathanatyam\frontend\public\assets\exact_kolam.png"

# Open the mockup image
try:
    img = Image.open(mockup_path)
    width, height = img.size
    
    # Crop a section of the left margin that contains the kolam pattern
    # Assuming the kolam is on the far left edge, about 15% of the width
    left = 0
    top = int(height * 0.2) # Skip the top browser chrome
    right = int(width * 0.15)
    bottom = int(height * 0.6) # Grab a chunk
    
    kolam = img.crop((left, top, right, bottom))
    kolam.save(output_path)
    print("Kolam cropped successfully!")
except Exception as e:
    print(f"Error: {e}")
