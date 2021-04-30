---
title: 'Image Compression'
description: 'Image Compression'
---

# Image Compression

## Compression Tools
- [ImageOptim](https://imageoptim.com/) - Removes bloated metadata. Saves disk space & bandwidth by compressing images without losing quality. 

## Best Practices
### Use "srcset" to reduce image size
```html
  <img 
    src="image.jpg"
    srcset="image_small.jpg 100w,
            image_medium.jpg 400w" />
```
### Image format
- Web optimized for photo: JPEG or WEBP
- Icons and Logos: SVG
