#!/bin/bash

# Script Usage
usage="COUCH_URL=user:pass@db backup.sh <backup|restore>"

# Check if COUCHURL environment variable is set
if [[ -z "$COUCH_URL" ]]; then
  echo "Error: COUCH_URL environment variable is not set."
  echo "$usage"
  exit 1
fi

# Check if couchbackup command is available
if ! command -v couchbackup &> /dev/null; then
  echo "Error: couchbackup command not found. Please install via npm: npm install -g couchbackup"
  exit 1
fi

# Define list of databases to backup/restore
databases="appointments doctors labwork ortho patients prescriptions settings treatments"

# Handle backup operation
if [[ "$1" == "backup" ]]; then
  for db in $databases; do
    echo "Backing up database: $db"
    couchbackup --parallelism 1 --quiet --db "$db" > "$db.txt" || exit 1
  done
  echo "Backup complete!"

# Handle restore operation
elif [[ "$1" == "restore" ]]; then
  for db in $databases; do
    echo "clearing and Restoring database: $db"
    curl -X DELETE $COUCH_URL/$db
    curl -X PUT $COUCH_URL/$db
    cat "$db.txt" | couchrestore --parallelism 1 --quiet --db "$db" || exit 1
  done
  echo "Restore complete!"

# Invalid operation provided
else
  echo "Error: Invalid operation. Please specify 'backup' or 'restore'."
  echo "$usage"
  exit 1
fi