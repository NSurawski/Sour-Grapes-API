#!/bin/bash

API="http://localhost:7165"
URL_PATH="/wines"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "wine": {
    "type": "'"${TYPE}"'",
    "grape": "'"${GRAPE}"'",
    "region": "'"${REGION}"'",
    "review": "'"${REVIEW}"'",
    "notes": "'"${NOTES}"'"
    }
  }'

echo
