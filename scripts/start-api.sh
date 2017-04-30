#!/usr/bin/env bash
source secrets/dev-env.sh && bundle exec rails s -p 8080 -b 0.0.0.0
