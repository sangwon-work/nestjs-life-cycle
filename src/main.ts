import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {TransformInterceptor} from "./core/interceptor/response/transform.interceptor";
import {AllExceptionsFilter} from "./core/exception/filters/all.exceptions-filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
