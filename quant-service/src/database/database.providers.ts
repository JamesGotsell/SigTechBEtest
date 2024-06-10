import { Sequelize } from 'sequelize-typescript';
import { Quant } from 'src/quant/entities/quant.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([Quant]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
