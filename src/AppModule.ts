import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/Customer/CustomerModule';
import { QuestionModule } from './modules/Question/QuestionModule';
import { AnswerModule } from './modules/Answer/AnswerModule';
import { MongooseCoreModule } from '@nestjs/mongoose/dist/mongoose-core.module';

@Module({
  controllers: [],
  imports: [
    MongooseCoreModule.forRoot('mongodb://mongo:27017', {
      useNewUrlParser: true,
      connectTimeoutMS: 3000,
      retryAttempts: 1,
      user: 'nik',
      pass: '1234',
      authMechanism: 'DEFAULT',
    }),
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
