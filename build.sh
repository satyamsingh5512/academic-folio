#!/bin/bash

# Download and install Hugo
HUGO_VERSION=0.83.1
curl -L -o hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz
tar -xzf hugo.tar.gz
chmod +x hugo

# Build the site
./hugo --gc --minify
