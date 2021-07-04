import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    let newUser = this.userRepository.create(createUserInput);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    let updateUser = await this.userRepository.findOne(id);
    if (updateUserInput.firstName !== undefined) {
      updateUser.firstName = updateUserInput.firstName
    }
    if (updateUserInput.lastName !== undefined) {
      updateUser.lastName = updateUserInput.lastName
    }
    if (updateUserInput.email !== undefined) {
      updateUser.email = updateUserInput.email
    }
    if (updateUserInput.membership !== undefined) {
      updateUser.membership = updateUserInput.membership
    }
    return this.userRepository.save(updateUser);
  }

  async remove(id: string): Promise<User> {
    let delUser = this.userRepository.findOne(id);
    this.userRepository.delete({ id: id });
    return delUser;
  }
}
