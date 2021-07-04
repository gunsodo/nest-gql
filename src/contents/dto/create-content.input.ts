import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, Max, Min } from 'class-validator';

@InputType()
export class CreateContentInput {
  @Field()
  name: string

  @Field()
  @Min(0)
  @Max(10)
  rating: number 

  @Field()
  membership: string
}
