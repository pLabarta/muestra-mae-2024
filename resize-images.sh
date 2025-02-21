#!/bin/bash

# Function to resize and compress an image
process_image() {
    local input=$1
    local temp="${input%.jpg}_temp.jpg"
    
    # Check if input file exists
    if [ ! -f "$input" ]; then
        echo "✗ File not found: $input"
        return 1
    fi
    
    echo "Processing $input..."
    
    # Resize to max width 1200px while preserving aspect ratio
    ffmpeg -i "$input" \
        -vf "scale=1200:-1:force_original_aspect_ratio=decrease" \
        -q:v 2 \
        "$temp" \
        -loglevel error

    # Check if temp file was created and has size
    if [ -f "$temp" ] && [ -s "$temp" ]; then
        mv "$temp" "$input"
        echo "✓ Successfully processed: $input"
    else
        rm -f "$temp"
        echo "✗ Failed to process: $input (keeping original)"
    fi
}

# Check if directory argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

directory="$1"

# Ensure directory path ends with /
directory="${directory%/}/"

# Check if directory exists
if [ ! -d "$directory" ]; then
    echo "Error: Directory '$directory' does not exist"
    exit 1
fi

# Change to the directory
cd "$directory"

# Process all jpg files in the directory
echo "Starting image processing..."
find . -type f -name "*.jpg" | while read file; do
    # Remove ./ from the beginning of the path
    file="${file#./}"
    process_image "$file"
done

echo "Done! All images have been processed." 