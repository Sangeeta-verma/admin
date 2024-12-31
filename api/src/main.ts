import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const CORS_ORIGIN = process.env.CORS_ORIGINS || 'http://localhost:5173';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  const corsOrigins = (CORS_ORIGIN || '')
    .split(',')
    .map((origin) => origin.trim());
  app.enableCors({
    origin: corsOrigins, // Allow requests from specific origins to avoid CORS errors
    methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE'], // Define which HTTP methods are allowed for CORS requests
  });
  await app.listen(process.env.PORT ?? 5000, () => {
    console.log('listening on: ', process.env.PORT ?? 5000);
  });
}
bootstrap();
