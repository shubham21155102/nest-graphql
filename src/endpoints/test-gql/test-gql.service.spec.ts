import { Test, TestingModule } from '@nestjs/testing';
import { TestGqlService } from './test-gql.service';

describe('TestGqlService', () => {
  let service: TestGqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGqlService],
    }).compile();

    service = module.get<TestGqlService>(TestGqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
