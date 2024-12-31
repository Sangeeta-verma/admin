import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ModelService } from './model.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get()
  findAll() {
    return this.modelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modelService.findOne(+id);
  }
}
