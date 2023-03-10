import { IPost } from "../../types/post";
import { post, prisma } from "../prisma";

type dataRepository = {
  skip: number;
  take: number;
  userId: string;
};

export class PostRepository {
  public async create(data: IPost) {
    const newPost = await post.create({
      data: data,
    });
    return newPost as IPost;
  }

  public async loadFeed(data: dataRepository) {
    const posts = (await prisma.$queryRaw`
      select post.content, post.image, post.id, users.name, users.id as "userId"
      from post inner join follows on follows."followingId" = post."userId"
      inner join users on users.id = post."userId"
      where follows."followerId" = ${data.userId} or post."userId" = ${data.userId}
      order by post."createdAt" desc
      limit ${data.take} offset ${data.skip};
      `) as IPost[];
    return posts;
  }
}
