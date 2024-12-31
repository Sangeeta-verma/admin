import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  UseGuards,
  ParseIntPipe,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { SessionService, SessionType } from './session.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() createSessionDto: SessionType, @Req() req: any) {
    const { id: userId } = req.user;
    return this.sessionService.create({ userId, ...createSessionDto });
  }

  @Get()
  findAll(@Req() req: any) {
    const { id: userId } = req.user;
    return this.sessionService.findAll(userId);
  }

  @Get(':sessionId')
  findOne(
    @Param('sessionId', ParseIntPipe) sessionId: number,
    @Req() req: any,
  ) {
    const { id: userId } = req.user;
    const sessions = this.sessionService.findAll(userId);
    const session = sessions.find((session) => session.id === sessionId);
    if (!session) {
      throw new BadRequestException('You have no access to this chat');
    }

    return this.sessionService.findOne(+sessionId);
  }
}
