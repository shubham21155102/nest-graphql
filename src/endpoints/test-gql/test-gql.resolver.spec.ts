import { Test, TestingModule } from '@nestjs/testing';
import { TestGqlResolver } from './test-gql.resolver';
import { TestGqlService } from './test-gql.service';

describe('TestGqlResolver', () => {
  let resolver: TestGqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGqlResolver, TestGqlService],
    }).compile();

    resolver = module.get<TestGqlResolver>(TestGqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
