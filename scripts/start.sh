#!/bin/bash

set -e

./scripts/build.sh

docker run -it --init -p 8080:8080 guessing-game
