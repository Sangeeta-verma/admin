import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { SessionModule } from './session/session.module';
import { ModelModule } from './model/model.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/ask-me', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }),
  AuthModule, ModelModule, SessionModule, ChatModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
