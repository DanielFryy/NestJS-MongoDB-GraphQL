import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
  // constructor(
  //   private readonly authorsService: AuthorsService,
  //   private readonly postsService: PostsService,
  // ) {}

  @Query(() => String)
  async helloWorld() {
    return 'hello world!';
  }
}
