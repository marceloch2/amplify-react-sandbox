/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAward = /* GraphQL */ `
  query GetAward($id: ID!) {
    getAward(id: $id) {
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
export const listAwards = /* GraphQL */ `
  query ListAwards(
    $filter: ModelAwardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAwards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAwards = /* GraphQL */ `
  query SyncAwards(
    $filter: ModelAwardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAwards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAwardTodo = /* GraphQL */ `
  query GetAwardTodo($id: ID!) {
    getAwardTodo(id: $id) {
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
export const listAwardTodos = /* GraphQL */ `
  query ListAwardTodos(
    $filter: ModelAwardTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAwardTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        awardID
        todoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAwardTodos = /* GraphQL */ `
  query SyncAwardTodos(
    $filter: ModelAwardTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAwardTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        awardID
        todoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
