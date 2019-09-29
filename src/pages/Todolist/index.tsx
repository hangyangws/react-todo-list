import React from 'react';

import { useStore, useDispatch } from '@store/index';
import { ITodo, ITodoList } from '@store/types';

import './index.scss';

const List = () => {
  const dispatch = useDispatch();
  const todoList = useStore('todolist') as ITodoList;
  const [newTodo, setNewTodo] = React.useState('');

  React.useEffect(() => {
    dispatch({
      type: 'TODOLIST_FETCH'
    });

    return () => {
      dispatch({
        type: 'TODOLIST_CLEAR'
      });
    };
  }, []);

  const handleDelete = React.useCallback(
    (todo: ITodo) => () => {
      dispatch({
        type: 'TODOLIST_DELETE',
        payload: todo
      });
    },
    []
  );

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAdd = React.useCallback(async () => {
    if (newTodo) {
      await dispatch({
        type: 'TODOLIST_ADD',
        payload: {
          id: new Date().getTime(),
          createTime: new Date().getTime(),
          text: newTodo
        }
      });

      setNewTodo('');
    }
  }, [newTodo]);

  return (
    <ul className="list">
      <li className="list-item">
        <input
          onChange={handleEdit}
          className="list-new"
          placeholder="添加 TODO"
          value={newTodo}
        />
        <button onClick={handleAdd} className="list-btn" title="添加">
          +
        </button>
      </li>
      {!todoList.data.length && <li className="list-empty">没有数据</li>}
      {todoList.data.map((todo: ITodo) => (
        <li className="list-item" key={todo.id}>
          {todo.text}
          <button
            onClick={handleDelete(todo)}
            className="list-btn"
            title="删除"
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
