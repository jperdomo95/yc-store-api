export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'database'),
      user: env('DATABASE_USERNAME', 'db_user'),
      password: env('DATABASE_PASSWORD', 'db_password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: env.bool('DATABASE_DEBUG', false),
  },
});
