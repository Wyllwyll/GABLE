import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/');
  app.enableCors({
    origin: [
      'https://gable-front.vercel.app/'
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Gable')
    .setDescription('API Gable Project Configurateur pc')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8000);
}
bootstrap();
