# React Starter

A boilerplate [React](https://reactjs.org/) project equiped with [Material UI](https://material-ui.com/). Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
REACT_APP_NAME=React Starter
REACT_APP_API_BASE=http://localhost:8000/api/v1
REACT_APP_SESSION_KEY=react-starter-session
```

Expected response body structure from `login` request

```javascript
{
    "user": {
        "name": "John Doe",
        "email": "john.doe@email.com",
        "roles": [
            {
                "id": 1,
                "name": "Admin",
            }
        ]
    },
    "token": ""
}
```

* The `user` object must have a `roles` property which contains an array of roles. Roles must be mapped on `src\common\utils\roles.js`.
* The `token` property's value will be automatically attached to the `Authorization` header of every HTTP request.

## Available Scripts

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `npm run lint`

Identify issues on all `js` and `jsx` files in the `src` directory.

### `npm run format`

Format the code style of all relevant files in the `src` directory.
