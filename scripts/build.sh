#!/bin/bash

set -e

# Builds client and server projects

./client/scripts/build.sh
./server/scripts/build.sh