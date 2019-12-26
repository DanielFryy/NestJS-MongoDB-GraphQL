import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './dto/create-cat.dto';
import { CatInput } from './inputs/cat.input';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => String)
  async helloWorld() {
    return 'hello world!';
  }

  @Query(() => [Cat])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => Cat)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }
}
