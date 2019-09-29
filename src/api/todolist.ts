import { ITodo } from '@store/types';
import { IPromiseReturn } from './types';
import request from './request';

export const getAll = (): IPromiseReturn => request.get(`/todolist`);

export const deleteTodo = (todo: ITodo): IPromiseReturn =>
  request.delete(`/todolist`);

export const addTodo = (todo: ITodo): IPromiseReturn =>
  request.post(`/todolist`);
