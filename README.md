# React App Starter

A boilerplate for creating web applications using [React](https://reactjs.org/) and [Material UI](https://material-ui.com/).

## Installation

Navigate to the project's root directory and run:

```bash
npm install
```

Create any of these `.env` files:

| ENV File         | Description                             |
| ---------------- | --------------------------------------- |
| .env             | Default                                 |
| .env.local       | Loaded for all environments except test |
| .env.development | Loaded on `npm start`                   |
| .env.production  | Loaded on `npm run build`               |
| .env.test        | Loaded on `npm test`                    |

Add these environment variables and replace their corresponding values:

```sh
REACT_APP_API_BASE=http://localhost:8000/api/v1
REACT_APP_SESSION_KEY=react-starter-session
```

Expected response body structure from `login` request

```javascript
{
    "user": {
        ...,
        "role": []
    },
    "token": ""
}
```

* `user` object must have a `role` property which contains an array of roles. Roles must be mapped on `src\common\utils\roles.js`.
* `token` value will be automatically attached on the `Authorization` header of every HTTP requests.

## Available Scripts

### `npm start`

Runs the app in the development mode.

### `npm format`

Format all the code based on the prettier and linting configuration.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Other Libraries Used

* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - Application routing
* [react-table](https://github.com/tannerlinsley/react-table) - Tables
* [react-hook-form](https://github.com/react-hook-form/react-hook-form) - Form handling
* [yup](https://github.com/jquense/yup) - Schema validation
* [axios](https://github.com/axios/axios) - HTTP client
* [material-ui-pickers](https://github.com/mui-org/material-ui-pickers) - Date & time pickers
* [notistack](https://github.com/iamhosseindhv/notistack) - Customizable snackbars

#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
