#!/bin/bash

# Exit on error
set -e

# Print each command
set -x

# Build the React app
npm run build

# Move into the build directory
cd dist

# Initialize a temporary Git repo
git init
git remote add origin https://github.com/<your-username>/<your-repo>.git
git checkout -b gh-pages

# Add and commit all files
git add .
git commit -m "Deploy React portfolio"

# Force push to gh-pages branch
git push -f origin gh-pages

# Go back to project root
cd ..
