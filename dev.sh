#!/bin/zsh
open public/index.html

npx @tailwindcss/cli -i ./public/input.css -o ./public/styles.css --watch
