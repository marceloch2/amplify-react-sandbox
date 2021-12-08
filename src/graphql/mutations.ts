/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAward = /* GraphQL */ `
  mutation CreateAward(
    $input: CreateAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    createAward(input: $input, condition: $condition) {
      id
      name
      AwardTodos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAward = /* GraphQL */ `
  mutation UpdateAward(
    $input: UpdateAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    updateAward(input: $input, condition: $condition) {
      id
      name
      AwardTodos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAward = /* GraphQL */ `
  mutation DeleteAward(
    $input: DeleteAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    deleteAward(input: $input, condition: $condition) {
      id
      name
      AwardTodos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      awards {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      awards {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      awards {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAwardTodo = /* GraphQL */ `
  mutation CreateAwardTodo(
    $input: CreateAwardTodoInput!
    $condition: ModelAwardTodoConditionInput
  ) {
    createAwardTodo(input: $input, condition: $condition) {
      id
      awardID
      todoID
      award {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      todo {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAwardTodo = /* GraphQL */ `
  mutation UpdateAwardTodo(
    $input: UpdateAwardTodoInput!
    $condition: ModelAwardTodoConditionInput
  ) {
    updateAwardTodo(input: $input, condition: $condition) {
      id
      awardID
      todoID
      award {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      todo {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAwardTodo = /* GraphQL */ `
  mutation DeleteAwardTodo(
    $input: DeleteAwardTodoInput!
    $condition: ModelAwardTodoConditionInput
  ) {
    deleteAwardTodo(input: $input, condition: $condition) {
      id
      awardID
      todoID
      award {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      todo {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
