import { Injectable } from '@nestjs/common';
import { SESSION_TABLE } from '../mock_data';

export type SessionType = {
  userId: number;
  modelId: number;
  title: string;
};

@Injectable()
export class SessionService {
  private readonly sessions = SESSION_TABLE;

  create(createSessionDto: SessionType) {
    const sessionId = this.sessions.length + 1;
    this.sessions.push({
      id: sessionId,
      ...createSessionDto,
    });
    return sessionId;
  }

  findAll(userId: number) {
    return this.sessions.filter((session) => session.userId === userId);
  }

  findOne(id: number) {
    return this.sessions.find((session) => session.id === id);
  }
}
