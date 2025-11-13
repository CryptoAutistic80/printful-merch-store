import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrintfulService } from './service';

@Module({
  imports: [ConfigModule],
  providers: [PrintfulService],
  exports: [PrintfulService],
})
export class PrintfulModule {}
