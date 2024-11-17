#!/bin/bash

set -e

# Builds client and server projects

./scripts/_project_cmd.sh build

docker build -t guessing-game .