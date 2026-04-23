"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
exports.resolvers = {
    Query: {
        hello: () => "Hello World",
        users: () => __awaiter(void 0, void 0, void 0, function* () { return yield user_controller_1.default.getUsers(); }),
        getUserById: (_, { userId }) => __awaiter(void 0, void 0, void 0, function* () { return yield user_controller_1.default.getUserById(userId); }),
        todos: () => __awaiter(void 0, void 0, void 0, function* () { return yield todo_controller_1.default.getTodos(); })
    },
    Mutation: {
        /** User */
        addUser: (_, { firstname, lastname, email }) => __awaiter(void 0, void 0, void 0, function* () { return yield user_controller_1.default.createUser({ firstname, lastname, email }); }),
        editUser: (_, { id, firstname, lastname, email }) => __awaiter(void 0, void 0, void 0, function* () { return yield user_controller_1.default.updateUser(id, { firstname, lastname, email }); }),
        removeUser: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () { return yield user_controller_1.default.deleteUser(id); }),
        /** Todo */
        addTodo: (_, { text, userId }) => __awaiter(void 0, void 0, void 0, function* () { return yield todo_controller_1.default.createTodo({ text, completed: false, userId }); }),
        editTodo: (_, { id, text, completed }) => __awaiter(void 0, void 0, void 0, function* () { return yield todo_controller_1.default.updateTodo(id, { text, completed }); }),
        removeTodo: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () { return yield todo_controller_1.default.deleteTodo(id); })
    },
    User: {
        todos: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield todo_controller_1.default.getTodosByUserId(parent.id); })
    },
    Todo: {
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield user_controller_1.default.getUserById(parent.userId); })
    }
};
