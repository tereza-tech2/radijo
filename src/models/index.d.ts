import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideoObjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly Name: string;
  readonly email?: string | null;
  readonly image?: string | null;
  readonly exterLink?: string | null;
  readonly userLevel?: number | null;
  readonly isActive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class VideoObject {
  readonly id: string;
  readonly caption: string;
  readonly videoFrameSize?: string | null;
  readonly associatedArticle?: string | null;
  readonly embedUl?: string | null;
  readonly accessAPI?: string | null;
  readonly archivedAt?: string | null;
  readonly author?: string | null;
  readonly dateCreated?: number | null;
  readonly exampleCapture?: string | null;
  readonly video?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<VideoObject, VideoObjectMetaData>);
  static copyOf(source: VideoObject, mutator: (draft: MutableModel<VideoObject, VideoObjectMetaData>) => MutableModel<VideoObject, VideoObjectMetaData> | void): VideoObject;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly comments?: (Comment | null)[] | null;
  readonly content?: string | null;
  readonly dateCreated?: number | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly postID: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}