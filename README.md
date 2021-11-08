# password-generator
A basic CLI password generator

## Installing

- Clone this repository

```
git clone https://github.com/ddanielsantos/password-generator.git
```

- Install the dependencies

```
yarn install or npm install
```

- Run Typescript compiler

```
yarn build or npm run build
```

- Run the application

```
yarn start or npm run start
```

## About

This project uses the [prompt-sync](https://github.com/heapwolf/prompt-sync) library to interact with the user, and uses the [Durstenfeld's Shuffling Method](https://medium.com/@anthonyfuentes/do-the-shuffle-the-durstenfeld-shuffle-7920c2ce0c45) to generate de final result.