import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String, { nullable: true })
  @Column()
  firstName?: string

  @Field(() => String, { nullable: true })
  @Column()
  lastName?: string

  @Field(() => String, { nullable: true })
  @Column()
  email: string

  @Field(() => String, { description: 'Card type' })
  @Column()
  membership: string
}
