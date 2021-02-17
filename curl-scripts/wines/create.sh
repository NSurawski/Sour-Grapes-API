#!/bin/bash

API="http://localhost:4741"
URL_PATH="/wines"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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
