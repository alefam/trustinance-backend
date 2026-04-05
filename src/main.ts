import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Origin',
    credentials: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(Number(process.env.PORT) || 3000, '0.0.0.0');
}
bootstrap();