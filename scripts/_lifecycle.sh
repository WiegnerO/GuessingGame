#!/bin/bash

set -e

# Check if lifecycle script argument is provided
if [[ -z "$1" ]]; then
  echo "Usage: $0 <lifecycle>"
  echo "Example: $0 build"
  exit 1
fi

# Lifecycle script name (e.g., build, test, deploy)
lifecycle_script="$1"

# Array of sub-project directories
projects=("client" "server")

for project in "${projects[@]}"; do
  echo "Running $lifecycle_script script for $project project..."

  # Check if the specified lifecycle script exists
  if [[ -f "./$project/scripts/$lifecycle_script.sh" ]]; then
    pushd ./"$project" > /dev/null
    ./scripts/"$lifecycle_script.sh" || { echo "$project $lifecycle_script failed"; exit 1; }
    popd > /dev/null
  else
    echo "Warning: $lifecycle_script script for $project not found!"
  fi

  echo "$project $lifecycle_script completed successfully."
done
