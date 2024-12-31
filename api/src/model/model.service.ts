import { Injectable } from '@nestjs/common';
import { MODEL_TABLE } from '../mock_data';

@Injectable()
export class ModelService {
  private readonly models = MODEL_TABLE;

  findAll() {
    return this.models;
  }

  findOne(id: number) {
    return this.models.find((model) => model.id === id);
  }
}
