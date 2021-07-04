import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Content {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string 

  @Field()
  @Column()
  rating: number 

  @Field({ description: 'Card type' })
  @Column()
  membership: string
}
