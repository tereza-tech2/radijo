// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, VideoObject, Post, Comment } = initSchema(schema);

export {
  User,
  VideoObject,
  Post,
  Comment
};