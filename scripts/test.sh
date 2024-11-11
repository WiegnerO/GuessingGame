#!/bin/bash

set -e

# runs tests on client and server

./client/scripts/test.sh
./server/scripts/test.sh