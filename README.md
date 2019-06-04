# reac*rcade
# HeroBuilder

Test my game out here: [reac*Rcade](https://smd9788.github.io/herobuilder-client/#/)

Preview:
![preview](/images/screenshot3.17.19.png)

If you want to work on this app for yourself follow these steps to clone:
## Preparation

1. Fork and clone this repository.
2. Create a new branch for your work and change into it.
3. Install dependencies with `npm install`

## About

This app is a foundation for a React based browser arcade. The first "game" in the arcade is HeroBuilder, a RPG style game that allows users to create heros with their own unique nickname and class. Users can view their own heros, edit them, and delete them.

### Current state of app:
In the current version I aimed to CRUD all user resources and allow users to create heros. Game logic is a W.I.P.

GitHub Repositories:

Back end: https://github.com/smd9788/herobuilder-api

Front end: https://github.com/smd9788/herobuilder-client

Deployed Sites:

Back end: https://reactrcade-api.herokuapp.com/

Front end: https://smd9788.github.io/herobuilder-client/

### Technology used on api:
  - MongoDB with Mongoose
  - Node.js
  - Express.js

### User Stories:
1. As a user, I want to sign in and out.
2. As a signed in user, I want to change passwords and sign out.
3. As a signed in user, I want to create a hero.
4. As a signed in user, I want to view my created heros.
5. As a signed in user, I want to edit the heros I created.
6. As a signed in user, I want to delete the heros I created with a second confirmation so I don't delete by mistake.

### WireFrames/ERD:
![wireframe](/images/wireframe.jpg)
![erd](/images/erd.jpg)

### Process:
1. Create foundation for arcade and a sample game, HeroBuilder. Create and test user CRUD actions
2. Create CRUD components for user Characters
#### NEXT STEPS
1. Create XP table in api to translate XP into level
2. Create seed date for bosses, that user can 1v1 in game
3. Create some components with methods that simulate an attack on boss
4. Create some components with methods that simulate an attack from boss on user
5. handle result of battle. store xp and stats in api
6. add unique abilities to each class
7. TRANSFORM game into a simple component of the overall arcade where user can click a screenshot-esque thing to link over to the game
