import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { ChatService, SENDER_TYPE } from './chat.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CHAT_GPT_MESSAGES, getRandomNumber } from '../mock_data';
import { SessionService } from '../session/session.service';

@UseGuards(JwtAuthGuard)
@Controller('session/:sessionId/chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly sessionService: SessionService,
  ) {}

  @Post()
  create(
    @Req() req: any,
    @Param('sessionId', ParseIntPipe) sessionId: number,
    @Body() body: { message: string },
  ) {
    const { id: userId } = req.user;
    const sessions = this.sessionService.findAll(userId);
    const session = sessions.find((session) => session.id === sessionId);
    if (!session) {
      throw new BadRequestException('You have no access to this chat');
    }

    const user = this.chatService.create({
      sessionId,
      sender_type: SENDER_TYPE.USER,
      ...body,
    });
    this.chatService.create({
      sessionId,
      sender_type: SENDER_TYPE.AI,
      message:
        CHAT_GPT_MESSAGES[getRandomNumber(1, CHAT_GPT_MESSAGES.length - 1)],
    });
    return user;
  }

  @Get()
  findAll(
    @Req() req: any,
    @Param('sessionId', ParseIntPipe) sessionId: number,
  ) {
    const { id: userId } = req.user;
    const sessions = this.sessionService.findAll(userId);
    const session = sessions.find((session) => session.id === sessionId);
    if (!session) {
      throw new BadRequestException('You have no access to this chat');
    }

    return this.chatService.findAll(sessionId);
  }
}
