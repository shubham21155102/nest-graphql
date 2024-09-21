import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateGraphqlFetchInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  age: number;
}
