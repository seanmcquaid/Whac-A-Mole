# Whac-A-Mole

I will be recreating the classic arcade game from my childhood, Whac-A-Mole!

## Architecture

### Front End

1. React + TypeScript
2. Styled Components
3. Prop Types
4. Axios
5. Redux
6. Redux Thunk
7. React Testing Library
8. Jest
9. Cypress

### Back End

1. Java / SpringBoot

## Front End Pages

### Home Page

#### Requirements

1. Can click start button and start the game
2. When you hit start, the timer starts
3. Every time you hit a mole, another will appear
4. The game ends when the user hits 15 moles
5. If the user is in the top 10 times after completing their round, then they get prompted to enter their user name

### Leaderboard Page

#### Requirements

1. Displays the top 10 times

## Back End Routes

### GET - /leaderboard

Should return top 10 times

### POST - /addTime

Allows users

### GET - /checkTime

Checks if time is in the top 10 times
