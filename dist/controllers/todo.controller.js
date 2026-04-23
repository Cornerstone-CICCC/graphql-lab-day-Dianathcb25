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
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todo_model_1.Todo.find();
    console.log(todos);
    return todos;
});
const getTodosByUserId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_model_1.Todo.find({ userId: id });
});
const createTodo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = new todo_model_1.Todo(data);
    return yield todo.save();
});
const updateTodo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_model_1.Todo.findByIdAndUpdate(id, data, { new: true });
});
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_model_1.Todo.findByIdAndDelete(id);
});
exports.default = {
    getTodos,
    getTodosByUserId,
    createTodo,
    updateTodo,
    deleteTodo
};
