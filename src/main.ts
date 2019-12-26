import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get<string, ConfigService>('ConfigService').get<string>('config.port');
  await app.listen(port);
}
bootstrap();
