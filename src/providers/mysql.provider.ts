import { DataSource, DataSourceOptions } from 'typeorm';
import { mysqlConfig } from '../config/mysql.config';

export const mysqlProviders = [
  {
    provide: 'MYSQL',
    useFactory: async () => {
      const dataSource = new DataSource({
        DataSourceOptions = {
          type: 'mysql',
          host: process.env.MYSQL_HOST,
          port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
          username: process.env.MYSQL_USERNAME,
          password: process.env.MYSQL_PASSWORD,
          database: process.env.MYSQL_DATABASE,
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true, // Never use this in production
        };
      });
      return dataSource.initialize();
    },
  },
];