# Awesome Project Build with TypeORM

This repo was made as a backend service to convert a json into a local menu system. This node app uses a Postgres database, TypeOrm, and Jest Testing.

Steps to run this project:

1. Have a local postgres instance running
2. Insert a .json into the /data folder with proper naming of
   `uploadData.json`
3. Install deps with `npm i` command
4. Add database settings variables inside `data-source.ts` file with a .env to match your local server

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=username
   DB_PASSWORD=password
   DB_DATABASE=databasename
   ```

5. Run `npm start` command to get table outputs
6. Run `npm test` command to run unit tests
