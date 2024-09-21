import { Module } from '@nestjs/common';
import { GraphqlFetchService } from './test-gql.service';
import { GraphqlFetchResolver } from './test-gql.resolver';

@Module({
  providers: [GraphqlFetchResolver, GraphqlFetchService],
})
export class TestGqlModule {}
