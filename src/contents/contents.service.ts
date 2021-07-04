import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContentInput } from './dto/create-content.input';
import { UpdateContentInput } from './dto/update-content.input';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentsService {

  constructor(@InjectRepository(Content) private contentRepository: Repository<Content>) {}

  async create(createContentInput: CreateContentInput): Promise<Content> {
    let newContent = this.contentRepository.create(createContentInput);
    return this.contentRepository.save(newContent);
  }

  async findAll(): Promise<Content[]> {
    return this.contentRepository.find();
  }

  async findOne(id: string): Promise<Content> {
    return this.contentRepository.findOne(id)
  }

  async findByMembership(membership: string): Promise<Content[]> {
    return this.contentRepository.find({ membership: membership });
  }

  async update(id: string, updateContentInput: UpdateContentInput): Promise<Content> {
    let updateContent = await this.contentRepository.findOne(id);
    if (updateContentInput.name !== undefined) {
      updateContent.name = updateContentInput.name
    }
    if (updateContentInput.rating !== undefined) {
      updateContent.rating = updateContentInput.rating
    }
    if (updateContentInput.membership !== undefined) {
      updateContent.membership = updateContentInput.membership
    }
    return this.contentRepository.save(updateContent);
  }

  async remove(id: string): Promise<Content> {
    let delContent = this.contentRepository.findOne(id);
    this.contentRepository.delete({ id: id });
    return delContent;
  }
}
