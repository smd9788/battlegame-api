#!/bin/bash

API="http://localhost:4741"
URL_PATH="/characters"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "character": {
      "nickname": "'"${NICKNAME}"'",
      "level": "'"${LEVEL}"'",
      "charClass": "'"${CHARCLASS}"'"
    }
  }'

echo
