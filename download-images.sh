#!/bin/bash

# Function to download an image
download_image() {
    local folder=$1
    local filename=$2
    local size=$3
    curl "https://picsum.photos/$size" -L -o "public/artworks/$folder/$filename"
}

# Create directories if they don't exist
mkdir -p public/artworks/piece1
mkdir -p public/artworks/piece2
mkdir -p public/artworks/piece3
mkdir -p public/artworks/piece4
mkdir -p public/artworks/piece5
mkdir -p public/artworks/piece6

# Download images for piece1
download_image "piece1" "cover.jpg" "800/600"
download_image "piece1" "gallery1.jpg" "800/600"
download_image "piece1" "gallery2.jpg" "800/600"
download_image "piece1" "gallery3.jpg" "800/600"

# Download images for piece2
download_image "piece2" "cover.jpg" "800/600"
download_image "piece2" "gallery1.jpg" "800/600"
download_image "piece2" "gallery2.jpg" "800/600"
download_image "piece2" "gallery3.jpg" "800/600"

# Download images for piece3
download_image "piece3" "cover.jpg" "800/600"
download_image "piece3" "gallery1.jpg" "800/600"
download_image "piece3" "gallery2.jpg" "800/600"
download_image "piece3" "gallery3.jpg" "800/600"

# Download images for piece4
download_image "piece4" "cover.jpg" "800/600"
download_image "piece4" "gallery1.jpg" "800/600"
download_image "piece4" "gallery2.jpg" "800/600"
download_image "piece4" "gallery3.jpg" "800/600"

# Download images for piece5
download_image "piece5" "cover.jpg" "800/600"
download_image "piece5" "gallery1.jpg" "800/600"
download_image "piece5" "gallery2.jpg" "800/600"
download_image "piece5" "gallery3.jpg" "800/600"

# Download images for piece6
download_image "piece6" "cover.jpg" "800/600"
download_image "piece6" "gallery1.jpg" "800/600"
download_image "piece6" "gallery2.jpg" "800/600"
download_image "piece6" "gallery3.jpg" "800/600"

echo "Images downloaded successfully!" 