import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { USERS_TABLE } from '../mock_data';

@Injectable()
export class AuthService {
  private readonly users = USERS_TABLE;

  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = this.users.find((user) => user.email === email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return { email: user.email, id: user.id };
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
