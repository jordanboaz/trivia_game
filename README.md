# Trivia Game <img src="/src/assets/joker.png" width="40">

Quiz app for true and false questions. Main functionalities: 

1. Iteractive true or false questions
2. Random questions fetched from the API
3. Random images fetched from unsplash
4. Results screen showing how many you got right

### Screenshots

| <img src="/screenshots/home.png" width="200">
| <img src="/screenshots/correct.png" width="200">
| <img src="/screenshots/question.png" width="200">

| <img src="/screenshots/incorrect.png" width="200">
| <img src="/screenshots/question2.png" width="200">
| <img src="/screenshots/result.png" width="200">


## Running the project

- Clone the project:
```
$ git clone https://github.com/jordanboaz/trivia_game.git
```

- Install dependencies:
```
$ yarn install
```

- If ios, install cocoa pods dependencies:
```
$ cd ios && pod install
```

- Execute
```
$ yarn ios
```
OR
```
$ yarn android
```

## APIs

- The API [opentdb](https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean) was used to fetch random questions.
- The [unsplash API](https://unsplash.com/developers) was used to fetch random beuatiful images.

## Tech and libraries

### Expo

- [Expo](https://expo.io/) was used to facilitate the deliver of the app. Expo is an optional library frequently used on the react native enviroment to deliver fast app without a large setup.

### React native

- O [React Native](https://reactnative.dev/) foi utilizado em sua versão 0.63.0. This is the version that runs on expo SDK 39.

### TypeScript

- The app is build using [Typescript](https://www.typescriptlang.org/), it grants bring static typing for javascript, granting us the ability to use the intelisense for our code editor, facilitates the refactoring of code, saves us debuging time and brings more assertiveness when accessing properties of our variables.
- Interfaces were created with payload responsed from the API, so the whole application is aware of it's data structure.

### Main libs:

- [axios](https://github.com/axios/axios) for api access.
- [reduxjs toolkit](https://redux-toolkit.js.org/) for simple state management of the application.
- [react-native-svg](https://github.com/react-native-svg/react-native-svg) to import SVGs into the app.
- [react navigation v5](https://reactnavigation.org/) to allow us to navigate between screens.
- [styled-components](https://styled-components.com/) to simplify separation between code and stylesheets.

### Code quality

To ensure the code follow the some pattern and is correctly typed, some libs were used:

- [eslint](https://eslint.org/) to enforce code pattern.
- [prettier](https://prettier.io/) for code formatting.

### Patterns

#### Componentization of reusable code

UI components, like buttons, lists were created to avoid code duplication. The components were create to be completely reusable and they do not contain any business logic.

#### Separation of concerns

- A service layer was created and acts as bridge between layers.
- The redux connects the outworld, the API and our visual layers.


