import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModule } from "./user/user.module"; // модуль для роботи з користувачами
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: process.env.DB_HOST || "localhost",
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_NAME || "nestjs_db",
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule, // Підключаємо модуль користувачів
  ],
})
export class AppModule {}
