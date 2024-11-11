#!/bin/bash

set -e

# lints the client and server

./client/scripts/lint.sh
./server/scripts/lint.sh