export default () => ({
  envirement: process.env.NODE_ENV || 'devewlopment',
  database: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) || 5432,
  },
});
