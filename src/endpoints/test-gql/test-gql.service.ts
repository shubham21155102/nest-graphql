import { Injectable } from '@nestjs/common';

import { User } from './entities/test-gql.entity';
import { CreateGraphqlFetchInput } from './dto/create-test-gql.input';
import { UpdateGraphqlFetchInput } from './dto/update-test-gql.input';

@Injectable()
export class GraphqlFetchService {
  private users: User[] = [];

  create(createGraphqlFetchInput: CreateGraphqlFetchInput) {
    const newUser: User = {
      id: this.users.length + 1,
      ...createGraphqlFetchInput,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateGraphqlFetchInput: UpdateGraphqlFetchInput) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const updatedUser = {
      ...this.users[userIndex],
      ...updateGraphqlFetchInput,
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const deletedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return deletedUser;
  }
}
