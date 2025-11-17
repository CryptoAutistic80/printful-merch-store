import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { loadEnvConfig } from '@g7/config';
import { PaymentsModule } from './payments/module';

const env = loadEnvConfig();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => env],
    }),
    PaymentsModule,
  ],
})
export class AppModule {}
