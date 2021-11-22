# Ostrom code challenge

This project was developed to manage adding, editing and deleting students.

# Technologies & dependencies used this project

### `React`

### `Typescript`

### `Jest`

### `Enzyme`

### `Formik`

### `Yup`

we have used React with Typescript to improve the code quality and prevent spelling errors.

also we have used Jest and Enzyme TDD Libraries to make the process of updating the project more easier.

we decided to use yup and formik to handle the addStudent form and manage user errors to make sure that all the data is as expected.

# Project Coding Details

you'll find the main file call `app.tsx` in the src folder, this contains the students table and manage the app state.
we have `interface.ts` file that contains Student interface.
we also created a `AddEditModal.tsx` component, it has form Modal and has the `formik` and `yup` code.
all the tests are in the `app.test.tsx` file there's 11 tests that checks rendering the main ui components and check for the form input functionality.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
