# Battle Game

This is a 2d action game, which simulates a one versus one battle against a NPC boss.
Players will gain XP as they complete stages and level up accordingly. Players will
gain more health and damage as they level up.

Repositories:
Back end:
Front end:

Deployed Sites:
Back end:
Front end:

### Technology used:
  - JavaScript
  - Express.js
  - React.js
  - Bootstrap for React
  - Node modules:
    - ???

### User Stories:
1. As a user, I want to sign in and out.
2. As a signed in user, I want to change passwords.
3. As a signed in user, I want to play the game.
4. As a signed in user, I want to see my statistics (level, xp, damage, hp, etc.).
5. As a signed in user, I want to preview the level up stats

### WireFrames/ERD:
<blockquote class="imgur-embed-pub" lang="en" data-id="a/vCzeKl5"><a href="//imgur.com/vCzeKl5">Battlesim-wireframe_erd</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

### Process Plan:

#### 1. Create database.
  ##### Tables:
    - user
    - characters (user created, saves xp)
    - levels/xp (simple table with levels and xp values, each as integers)
    - game instance (time, win/loss, damage done, etc.)

#### 2. Client:
    - Make home page UI. Basic, just logo with button to trigger signup/in
    - make auth forms
    - create fixed position canvas for game display
    - make basic buttons to "act" as game characters NO art yet. button clicks
      trigger attack and goes thru game cycle.
    - make UI for result of battle, display stats, button to play again


## Future goals and features:
  - Add one or two new abilities to user character
  - Add some randomness to the game. i.e. players attack can miss
