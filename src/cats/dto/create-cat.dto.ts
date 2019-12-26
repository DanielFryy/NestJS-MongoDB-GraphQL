import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class Cat {
  @Field(type => ID)
  id: string;

  @Field()
  readonly name: string;

  @Field(type => Int)
  readonly age: number;

  @Field()
  readonly breed: string;
}
