# Gerenic CRUD Architecture with NODEJS

This project will used for pratice developening skills with generics pattern and reusability of codes.

## Running the Application

1. Install the Angular CLI: `npm install --global yarn`

2 . Install Docker and execute the command:

	 docker run --name postgresql --env=POSTGRESQL_DATABASE=postgres --env=POSTGRES_USERNAME=postgres --env=POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

3. Open the `project` folder and run `yarn install`

4. Run Migrations - > `yarn migration:run`

5. Run `yarn dev` in the `project` folder to start the server and launch the app


