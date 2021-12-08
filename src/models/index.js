// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Award, Todo, AwardTodo } = initSchema(schema);

export {
  Award,
  Todo,
  AwardTodo
};