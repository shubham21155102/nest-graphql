import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateGraphqlFetchInput } from './create-test-gql.input';

@InputType()
export class UpdateGraphqlFetchInput extends PartialType(
  CreateGraphqlFetchInput,
) {
  @Field(() => Int)
  id: number;
}
