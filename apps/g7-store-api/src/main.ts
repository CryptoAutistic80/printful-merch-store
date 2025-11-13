import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json } from 'body-parser';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    json({
      verify: (req: any, _res, buf) => {
        req.rawBody = buf;
      },
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.setGlobalPrefix('api');
  app.enableCors({ origin: process.env.APP_BASE_URL ?? 'http://localhost:4200' });
  const port = process.env.PORT ?? 3333;
  await app.listen(port);
  Logger.log(`🚀 API ready at http://localhost:${port}/api`);
}

bootstrap();
