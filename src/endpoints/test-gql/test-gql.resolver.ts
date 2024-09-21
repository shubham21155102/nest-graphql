import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from './entities/test-gql.entity';
import { CreateGraphqlFetchInput } from './dto/create-test-gql.input';
import { GraphqlFetchService } from './test-gql.service';
import { UpdateGraphqlFetchInput } from './dto/update-test-gql.input';

@Resolver(() => User)
export class GraphqlFetchResolver {
  constructor(private readonly graphqlFetchService: GraphqlFetchService) {}

  @Mutation(() => User)
  createUser(
    @Args('createGraphqlFetchInput')
    createGraphqlFetchInput: CreateGraphqlFetchInput,
  ) {
    return this.graphqlFetchService.create(createGraphqlFetchInput);
  }

  @Query(() => [User], { name: 'users' })
  findAllUsers() {
    return this.graphqlFetchService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOneUser(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlFetchService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('updateGraphqlFetchInput')
    updateGraphqlFetchInput: UpdateGraphqlFetchInput,
  ) {
    return this.graphqlFetchService.update(
      updateGraphqlFetchInput.id,
      updateGraphqlFetchInput,
    );
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlFetchService.remove(id);
  }
}
