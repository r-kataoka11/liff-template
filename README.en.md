# Rocket Start LIFF App Template
This is a web application template that specifically used for LIFF Applications. This template includes modern front-end technologies such as Redux Toolkit, React Router v6 and Vite! 

## Features
- Thanks to Vite for blazing fast application build time.
- Uses React Router v6.
- Local preview environment is launched over HTTPS (because the LIFF Endpoint URL requires HTTPS).
- Redux Toolkit is used for complex state management and API connection with less code.
- A variety of sample code are included. They might comes handy when you starts from zero.
- No UI library was included so that it can be used regardless of the characteristics of the project (can be introduced as desired).

## Technologies and Libraries Used
- React
- Vite
- Redux Toolkit
- React Router v6
- Storybook
- Prettier

## Contents included in this template
- LIFF initialization and login/logout functionality.
- Automatic LIFF initialization & login process functionality.
- Sample code for RTK Query.
- Sample code for React Router (App.tsx).
- Component sample and Storybook sample.
- Sample of Component Classification.
- Setting up Prettier to work with VSCode.


## Getting Started

1. fork this project to create a new repository.
2. create a provider and LIFF app in the [LINE Developers console](https://developers.line.biz/ja/).
3. copy `.env.sample` to create `.env`. 
4. Enter the LIFF ID of the LIFF app you created into the `.env` VITE_LIFF_ID field.
5. install the packages with `yarn`.
6. boot application with `yarn dev`.

*If you use RTK Query, add the API base URL to `VITE_API_BASE_URL` in `.env`.

### Command list

`yarn dev` : Starts the application preview.

`yarn storybook`: Starts the Storybook preview.

`yarn build` : Build an application code.

`yarn build-storybook`: Builds a Storybook code.

### For VSCode users
Please install the following extensions.

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## About components
Storybook component examples have been added for the Storybook sample.

This template does not introduce any UI library because the nature of the project may require the use of UI library or your own design system. Therefore, you can delete the entire components directory. If you are interested in how to cut the components of this sample, please see [here](/src/components/README.md).

## About Redux
Redux (Redux Toolkit) is used in this template, which may be liked or disliked by skilled users.

The reasons we included Redux in this template are as follows:
- It allows us to manage complex state management by cebtralize all state of the application.
- Easy to investigate the state using Redux DevTools.
- State management can be done outside the React lifecycle and this allows React Hooks to simplify the parts that suffer from side effects.
- By using reselect, only the necessary data can be recalculated and retrieved when they were updated.
- Due to the nature of Redux, a common rule is created in the team development.
  - It is difficult to cause problems in a situation where skilled and novice developers are mixed (useEffect infinite loop, etc.)
  - Less likely to be troubled by skilled users' React Hooks tricks like Howl's Moving Castle

This template uses the Re-ducks pattern for its file structure for Redux.

See [here](/src/ducks/README.md) for more details about the LIFF initialization and login samples and the RTK Query sample code.
