import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AwardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AwardTodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Award {
  readonly id: string;
  readonly name?: string;
  readonly AwardTodos?: (AwardTodo | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Award, AwardMetaData>);
  static copyOf(source: Award, mutator: (draft: MutableModel<Award, AwardMetaData>) => MutableModel<Award, AwardMetaData> | void): Award;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly awards?: (AwardTodo | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class AwardTodo {
  readonly id: string;
  readonly award: Award;
  readonly todo: Todo;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AwardTodo, AwardTodoMetaData>);
  static copyOf(source: AwardTodo, mutator: (draft: MutableModel<AwardTodo, AwardTodoMetaData>) => MutableModel<AwardTodo, AwardTodoMetaData> | void): AwardTodo;
}