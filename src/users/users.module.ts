import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ContentsModule } from 'src/contents/contents.module';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ContentsModule],
  providers: [UsersResolver, UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
