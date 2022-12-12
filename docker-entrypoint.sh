#!/bin/sh
# docker-entrypoint.sh

echo "Waiting for Postgres to start..."
./wait-for-postgres.sh db

echo "Migrating database..."
pnpm migrate

echo "Starting server..."
node server.js