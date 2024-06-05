import { registerAs } from '@nestjs/config';

export default registerAs('sqliteConfig', () : {
  type: string,
  host: string,
  port: string | number,
  username: string,
  password: string,
} => ({
  type: 'sqlite',
  host: process.env.SQLITE_HOST || 'localhost',
  port: process.env.SQLITE_PORT || 3307,
  username: process.env.SQLITE_USER || 'root',
  password: process.env.SQLITE_PASSWORD || '',
}));