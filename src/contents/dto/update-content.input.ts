import { CreateContentInput } from './create-content.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class UpdateContentInput extends PartialType(CreateContentInput) {
  @Field()
  id: string 

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  @Min(0)
  @Max(10)
  rating?: number

  @Field({ nullable: true })
  membership?: string
}
