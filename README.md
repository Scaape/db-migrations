## Generate migration script

- Run below sample code to generate a migration file

```sh
npx sequelize-cli migration:generate --name time_away_policies
```

- Rename the file accordinly and add .ts, copy contents from previous migration file.

## Migration

- Build using `yarn build`, copy .env and config folder to dist directory
- Check migration status using

```sh
npx sequelize-cli db:migrate:status
```

- To perform migration run

```sh
npx sequelize-cli db:migrate
```
