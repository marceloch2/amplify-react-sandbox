/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAwardInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelAwardConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAwardConditionInput | null > | null,
  or?: Array< ModelAwardConditionInput | null > | null,
  not?: ModelAwardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Award = {
  __typename: "Award",
  id: string,
  name?: string | null,
  AwardTodos?: ModelAwardTodoConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelAwardTodoConnection = {
  __typename: "ModelAwardTodoConnection",
  items:  Array<AwardTodo >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type AwardTodo = {
  __typename: "AwardTodo",
  id: string,
  awardID: string,
  todoID: string,
  award: Award,
  todo: Todo,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  awards?: ModelAwardTodoConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAwardInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteAwardInput = {
  id: string,
  _version?: number | null,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id: string,
  _version?: number | null,
};

export type CreateAwardTodoInput = {
  id?: string | null,
  awardID: string,
  todoID: string,
  _version?: number | null,
};

export type ModelAwardTodoConditionInput = {
  awardID?: ModelIDInput | null,
  todoID?: ModelIDInput | null,
  and?: Array< ModelAwardTodoConditionInput | null > | null,
  or?: Array< ModelAwardTodoConditionInput | null > | null,
  not?: ModelAwardTodoConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAwardTodoInput = {
  id: string,
  awardID?: string | null,
  todoID?: string | null,
  _version?: number | null,
};

export type DeleteAwardTodoInput = {
  id: string,
  _version?: number | null,
};

export type ModelAwardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAwardFilterInput | null > | null,
  or?: Array< ModelAwardFilterInput | null > | null,
  not?: ModelAwardFilterInput | null,
};

export type ModelAwardConnection = {
  __typename: "ModelAwardConnection",
  items:  Array<Award >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAwardTodoFilterInput = {
  id?: ModelIDInput | null,
  awardID?: ModelIDInput | null,
  todoID?: ModelIDInput | null,
  and?: Array< ModelAwardTodoFilterInput | null > | null,
  or?: Array< ModelAwardTodoFilterInput | null > | null,
  not?: ModelAwardTodoFilterInput | null,
};

export type CreateAwardMutationVariables = {
  input: CreateAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type CreateAwardMutation = {
  createAward?:  {
    __typename: "Award",
    id: string,
    name?: string | null,
    AwardTodos?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAwardMutationVariables = {
  input: UpdateAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type UpdateAwardMutation = {
  updateAward?:  {
    __typename: "Award",
    id: string,
    name?: string | null,
    AwardTodos?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAwardMutationVariables = {
  input: DeleteAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type DeleteAwardMutation = {
  deleteAward?:  {
    __typename: "Award",
    id: string,
    name?: string | null,
    AwardTodos?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    awards?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    awards?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    awards?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAwardTodoMutationVariables = {
  input: CreateAwardTodoInput,
  condition?: ModelAwardTodoConditionInput | null,
};

export type CreateAwardTodoMutation = {
  createAwardTodo?:  {
    __typename: "AwardTodo",
    id: string,
    awardID: string,
    todoID: string,
    award:  {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAwardTodoMutationVariables = {
  input: UpdateAwardTodoInput,
  condition?: ModelAwardTodoConditionInput | null,
};

export type UpdateAwardTodoMutation = {
  updateAwardTodo?:  {
    __typename: "AwardTodo",
    id: string,
    awardID: string,
    todoID: string,
    award:  {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAwardTodoMutationVariables = {
  input: DeleteAwardTodoInput,
  condition?: ModelAwardTodoConditionInput | null,
};

export type DeleteAwardTodoMutation = {
  deleteAwardTodo?:  {
    __typename: "AwardTodo",
    id: string,
    awardID: string,
    todoID: string,
    award:  {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetAwardQueryVariables = {
  id: string,
};

export type GetAwardQuery = {
  getAward?:  {
    __typename: "Award",
    id: string,
    name?: string | null,
    AwardTodos?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAwardsQueryVariables = {
  filter?: ModelAwardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAwardsQuery = {
  listAwards?:  {
    __typename: "ModelAwardConnection",
    items:  Array< {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAwardsQueryVariables = {
  filter?: ModelAwardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAwardsQuery = {
  syncAwards?:  {
    __typename: "ModelAwardConnection",
    items:  Array< {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    awards?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAwardTodoQueryVariables = {
  id: string,
};

export type GetAwardTodoQuery = {
  getAwardTodo?:  {
    __typename: "AwardTodo",
    id: string,
    awardID: string,
    todoID: string,
    award:  {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAwardTodosQueryVariables = {
  filter?: ModelAwardTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAwardTodosQuery = {
  listAwardTodos?:  {
    __typename: "ModelAwardTodoConnection",
    items:  Array< {
      __typename: "AwardTodo",
      id: string,
      awardID: string,
      todoID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAwardTodosQueryVariables = {
  filter?: ModelAwardTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAwardTodosQuery = {
  syncAwardTodos?:  {
    __typename: "ModelAwardTodoConnection",
    items:  Array< {
      __typename: "AwardTodo",
      id: string,
      awardID: string,
      todoID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateAwardSubscription = {
  onCreateAward?:  {
    __typename: "Award",
    id: string,
    name?: string | null,
    AwardTodos?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAwardSubscription = {
  onUpdateAward?:  {
    __typename: "Award",
    id: string,
    name?: string | null,
    AwardTodos?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAwardSubscription = {
  onDeleteAward?:  {
    __typename: "Award",
    id: string,
    name?: string | null,
    AwardTodos?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    awards?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    awards?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    awards?:  {
      __typename: "ModelAwardTodoConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAwardTodoSubscription = {
  onCreateAwardTodo?:  {
    __typename: "AwardTodo",
    id: string,
    awardID: string,
    todoID: string,
    award:  {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAwardTodoSubscription = {
  onUpdateAwardTodo?:  {
    __typename: "AwardTodo",
    id: string,
    awardID: string,
    todoID: string,
    award:  {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAwardTodoSubscription = {
  onDeleteAwardTodo?:  {
    __typename: "AwardTodo",
    id: string,
    awardID: string,
    todoID: string,
    award:  {
      __typename: "Award",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
