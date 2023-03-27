export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'tiendi'),
      user: env('DATABASE_USERNAME', 'caribito'),
      password: env('DATABASE_PASSWORD', 'caribito'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    debug: env.bool('DATABASE_DEBUG', false),
  },
});
