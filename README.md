# HeroBuilder

[Test my game out here](https://smd9788.github.io/herobuilder-client/#/)

Preview:
![preview](/images/screenshot3.17.19.png)

If you want to work on this app for yourself follow these steps to clone:

## Preparation
1. Fork and clone this repository.
2. Create a new branch for your work and change into it.
3. Install dependencies with `npm install`.
4. Run server locally with `npm start`.

## About
This app is a foundation for a React based browser arcade. The app allows users to create their own characters with a unique nickname and character class. Users can view their own characters, edit them, and delete them.


## Testing commands

| Command                | Effect                                                                                                      |
|------------------------|-------------------------------------------------------------------------------------------------------------|
| `npm run server`       | Starts a development server with `nodemon` that automatically refreshes when you change something.                                                                                         |
| `npm test`             | Runs automated tests.                                                                                       |
| `npm run debug-server` | Starts the server in debug mode, which will print lots of extra info about what's happening inside the app. |

## API

Scripts are included in [`curl-scripts`](curl-scripts) to test built-in actions.
Add your own scripts to test your custom API.

### Authentication API Requests

| Verb   | URI Pattern         | Controller#Action |
|--------|---------------------|-------------------|
| POST   | `/sign-up`          | `users#signup`    |
| POST   | `/sign-in`          | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
curl-scripts/auth/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
curl-scripts/auth/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/ \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "a new password"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/auth/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/ \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/auth/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```
### Character API Requests

| Verb   | URI Pattern         | Controller#Action     |
|--------|---------------------|-----------------------|
| GET    | `/characters`       | `characters#find`     |
| GET    | `/characters/:id`   | `characters#findById` |
| POST   | `/characters/`      | `characters#create`   |
| PATCH  | `/characters/:id`   | `characters#findById` |
| DELETE  | `/characters/:id`   | `characters#delete` |

#### GET /characters

Request:

```sh
curl --include --request GET http://localhost:4741/characters \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN="24c89dcf45d11bc73d0e730bd34892ac" curl-scripts/characters/index.sh curl-scripts/characters/index.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "characters": [{
    "_id":"5cfc37adc316e50a50f41490",
    "updatedAt":"2019-06-08T22:33:17.111Z",
    "createdAt":"2019-06-08T22:33:17.111Z",
    "nickname":"LeeroyJenkins",
    "level":1,
    "charClass":"Warrior",
    "owner":"5cf691e01f1f6f0cd07c5218",
    "__v":0
    }]
}
```

#### GET /characters/:id

Request:

```sh
curl --include --request GET http://localhost:4741/characters/:id \
  --header "Authorization: Token token=$TOKEN" \
```

```sh
ID="5cfc37adc316e50a50f41490" TOKEN="24c89dcf45d11bc73d0e730bd34892ac" curl-scripts/characters/show.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "characters": [{
    "_id":"5cfc37adc316e50a50f41490",
    "updatedAt":"2019-06-08T22:33:17.111Z",
    "createdAt":"2019-06-08T22:33:17.111Z",
    "nickname":"LeeroyJenkins",
    "level":1,
    "charClass":"Warrior",
    "owner":"5cf691e01f1f6f0cd07c5218",
    "__v":0
    }]
}
```

#### POST /characters

Request:

```sh
curl --include --request POST http://localhost:4741/characters \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "character": {
      "nickname": "'"${NICKNAME}"'",
      "level": "'"${LEVEL}"'",
      "charClass": "'"${CHARCLASS}"'"
    }
  }'
```

```sh
TOKEN="24c89dcf45d11bc73d0e730bd34892ac" NICKNAME="LeeroyJenkins" LEVEL=1 CHARCLASS="Warrior" curl-scripts/characters/create.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "characters": [{
    "_id":"5cfc37adc316e50a50f41490",
    "updatedAt":"2019-06-08T22:33:17.111Z",
    "createdAt":"2019-06-08T22:33:17.111Z",
    "nickname":"LeeroyJenkins",
    "level":1,
    "charClass":"Warrior",
    "owner":"5cf691e01f1f6f0cd07c5218",
    "__v":0
    }]
}
```

#### PATCH /characters/:id

Request:

```sh
curl --include --request POST http://localhost:4741/characters \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "character": {
      "nickname": "'"${NICKNAME}"'",
      "level": "'"${LEVEL}"'",
      "charClass": "'"${CHARCLASS}"'"
    }
  }'
```

```sh
TOKEN="24c89dcf45d11bc73d0e730bd34892ac" NICKNAME="LeeroyJenkinsTHE2nd" LEVEL=5 CHARCLASS="Priest" curl-scripts/characters/create.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "characters": [{
    "_id":"5cfc37adc316e50a50f41490",
    "updatedAt":"2019-06-08T22:33:17.111Z",
    "createdAt":"2019-06-08T22:33:17.111Z",
    "nickname":"LeeroyJenkins",
    "level":1,
    "charClass":"Warrior",
    "owner":"5cf691e01f1f6f0cd07c5218",
    "__v":0
    }]
}
```

#### DELETE /characters/:id

Request:

```sh
curl --include --request DELETE http://localhost:4741/characters/:id \
  --header "Authorization: Token token=$TOKEN"
```

```sh
ID="5cfc37adc316e50a50f41490" TOKEN="24c89dcf45d11bc73d0e730bd34892ac" curl-scripts/characters/delete.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

### Current state of app:
This app is a foundation for a React based browser arcade. The first "game" in the arcade is HeroBuilder, a RPG style game that allows users to create heros with their own unique nickname and class. Users can view their own heros, edit them, and delete them.

In the current version I aimed to create RESTful routes for user authentication
and user's characters.

#### GitHub Repositories:
  - [Back end](https://github.com/smd9788/herobuilder-api)
  - [Front end](https://github.com/smd9788/herobuilder-client)

#### Deployed Sites:
  - [Back end](https://reactrcade-api.herokuapp.com/)
  - [Front end](https://smd9788.github.io/herobuilder-client/)

### Technology used on API:
  - JavaScript
  - Node.js/Express.js
  - MongoDB w/ mLab
  - Mongoose
  - cURL

### User Stories:
  - As a user, I want to sign in and out.
  - As a signed in user, I want to change passwords and sign out.
  - As a signed in user, I want to create a hero.
  - As a signed in user, I want to view my created heros.
  - As a signed in user, I want to edit the heros I created.
  - As a signed in user, I want to delete the heros I created with a second confirmation so I don't delete by mistake.

### Process:
1. Create foundation for arcade and a sample game, HeroBuilder. Create and test user CRUD actions
2. Create CRUD components for user Characters
