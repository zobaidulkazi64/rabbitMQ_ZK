export const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DATABASE_HOST || "localhost",
    port: process.env.DATABASE_PORT || 3306,
    user: process.env.DATABASE_USER || "root",
  },
};
