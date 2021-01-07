# Code Challenge

## Purpose

The goal of this exercise is to evaluate the coding principles of Stephen R Rodrigo.

## Data

Data has been added src/components/data.js

## Requirements

---

For development you will need to make sure that you have a few things installed. Here are our preferred things to use but you can use any alternatives that you are familiar/comfortable with:

- <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
- <a href="https://github.com/eslint/eslint" target="_blank">ESLint</a> extension
- <a href="https://github.com/prettier/prettier" target="_blank">Prettier</a> extension
- <a href="https://yarnpkg.com/en/" target="_blank">Yarn</a> for installing packages 🚚

## 🛠 Installation

Please start off by cloning this repo to your local folder and installing dependencies:

    $ git clone https://github.com/rukshan-rodrigo/momenton-code-challenge
    $ cd App
    $ yarn && yarn start

## 🧪 Testing

    $ yarn test

## No storybook for this task

## Ideal Folder Structure (Didn't had much time to create like this)

This is what each folder correlates to:

```sh
src
├── components/  # Shared components and their tests
├── assets/      # Contains most of the assets used in creating the components
    ├── images/     # Any images being used in the components
    ├── styles/     # Commonly used styles, variables, mixins etc.
└── vendor/      # Cached dependencies
```

## Quality Control

### Linting

<a href="https://github.com/eslint/eslint" target="_blank">ESLint</a> is used for linting and prettifying the files in the project. The base configuration for linting has been setup from the AirBnB config.

It is highly recommended you do **not** make any changes to the linting configuration. If you feel like a rule needs changing, please contact a Senior Developer who is conducting house-keeping for the project.

### Testing

We are using the following for conducting tests on the components we build:

- <a href="https://github.com/facebook/jest" target="_blank">Jest</a> as the test runner, assertion library, and mocking library
- <a href="https://github.com/testing-library/react-testing-library" target="_blank">React Testing Library</a> to provide additional testing utilities to interact with elements
- <a href="https://github.com/testing-library/jest-dom" target="_blank">Jest DOM</a> to extend Jest with useful custom DOM element matchers
- <a href="https://github.com/nickcolley/jest-axe" target="_blank">Jest aXe</a> for automated accessibility testing
