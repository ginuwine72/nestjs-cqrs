import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () : {
  name: string,
} => ({
  name: process.env.APP_NAME || '',
}));