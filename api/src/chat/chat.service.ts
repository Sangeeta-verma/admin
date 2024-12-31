import { Injectable } from '@nestjs/common';
import { CHAT_TABLE } from '../mock_data';

export enum SENDER_TYPE {
  USER = 'user',
  AI = 'ai',
}
export type chatType = {
  sessionId: number;
  sender_type: SENDER_TYPE;
  message: string;
  created_at: string;
};

@Injectable()
export class ChatService {
  private readonly chats = CHAT_TABLE;

  create(createChatDto: Omit<chatType, 'created_at'>) {
    return this.chats.push({
      id: this.chats.length + 1,
      created_at: new Date().toISOString(),
      ...createChatDto,
    });
  }

  findAll(sessionId: number) {
    return this.chats.filter((chat) => chat.sessionId === sessionId);
  }
}
