#!/usr/bin/env bash
cf bind-service ratelimiting gateway-demo -c '{ "routes": [ { "path": "/ratelimiting/**", "filters": ["RateLimit=1,10s"] } ] }'
