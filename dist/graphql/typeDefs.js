"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.typeDefs = (0, graphql_tag_1.gql) `
  type User {
    id: ID!,
    firstname: String,
    lastname: String,
    email: String,
    todos: [Todo]
  }

  type Todo {
    id: ID!,
    text: String,
    completed: Boolean,
    user: User
  }

  type Query {
    hello: String,
    users: [User],
    getUserById(userId: ID): User
    todos: [Todo]
  }

  type Mutation {
    addUser(firstname: String, lastname: String, email: String): User,
    editUser(id: ID, firstname: String, lastname: String, email: String): User,
    removeUser(id: ID): User

    addTodo(text: String, userId: ID): Todo
    editTodo(id: ID, text: String, completed: Boolean): Todo
    removeTodo(id: ID): Todo
  }
`;
