import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { AddressInfo } from 'net';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(Logger));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const port = parseInt(app.get(ConfigService).getOrThrow('PORT'));
  const server = await app.listen(port);

  const addressInfo = server.address() as AddressInfo;
  const host = addressInfo.address === '::' ? 'localhost' : addressInfo.address;

  console.log(`Server is running at http://${host}:${addressInfo.port}`);
  console.log('CI TEST 3');
}
bootstrap().catch((err) => {
  console.error('Error during app bootstrap:', err);
  process.exit(1);
});
