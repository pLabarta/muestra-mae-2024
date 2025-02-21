#!/bin/bash

# Check if directory is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

directory="$1"

# Check if directory exists
if [ ! -d "$directory" ]; then
    echo "Error: Directory '$directory' does not exist"
    exit 1
fi

# Change to the specified directory
cd "$directory"

# Counter for gallery images
count=1

# First rename cover if it exists
if [ -f "cover.jpg" ]; then
    echo "Keeping cover.jpg as is"
else
    # If no cover exists, use the first jpg as cover
    first_jpg=$(ls -1 *.jpg | head -n 1)
    if [ -n "$first_jpg" ]; then
        mv "$first_jpg" "cover.jpg"
        echo "Created cover.jpg from $first_jpg"
    fi
fi

# Rename remaining jpg files to galleryN.jpg
for file in *.jpg; do
    # Skip cover.jpg and already renamed gallery files
    if [[ "$file" != "cover.jpg" && "$file" != "gallery"* ]]; then
        mv "$file" "gallery${count}.jpg"
        echo "Renamed $file to gallery${count}.jpg"
        ((count++))
    fi
done

echo "Done! Renamed $((count-1)) files to gallery format" 