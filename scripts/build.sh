#!/bin/bash

set -e

# Builds client and server projects

./scripts/_lifecycle.sh build

docker build -t guessing-game .