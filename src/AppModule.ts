import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/Customer/CustomerModule';
import { QuestionModule } from './modules/Question/QuestionModule';
import { AnswerModule } from './modules/Answer/AnswerModule';

@Module({
  controllers: [],
  imports: [
    /*ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [...Models],
      autoLoadModels: true
    }),*/
    CustomerModule,
    QuestionModule,
    AnswerModule,
  ],
})
export class AppModule {}
