/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAward = /* GraphQL */ `
  subscription OnCreateAward {
    onCreateAward {
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
export const onUpdateAward = /* GraphQL */ `
  subscription OnUpdateAward {
    onUpdateAward {
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
export const onDeleteAward = /* GraphQL */ `
  subscription OnDeleteAward {
    onDeleteAward {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateAwardTodo = /* GraphQL */ `
  subscription OnCreateAwardTodo {
    onCreateAwardTodo {
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
export const onUpdateAwardTodo = /* GraphQL */ `
  subscription OnUpdateAwardTodo {
    onUpdateAwardTodo {
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
export const onDeleteAwardTodo = /* GraphQL */ `
  subscription OnDeleteAwardTodo {
    onDeleteAwardTodo {
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
