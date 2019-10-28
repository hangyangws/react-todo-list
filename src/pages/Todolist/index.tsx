import React from 'react';
import { useDispatch, useStore } from 'hooks-store';

import { IAction } from '@store/list/types';

import './index.scss';

const List = () => {
  const dispatch = useDispatch<IAction>();
  const todoList = useStore('todolist') as any;
  const [newTodo, setNewTodo] = React.useState('');

  React.useEffect(() => {
    dispatch({
      type: 'TODOLIST_INIT',
      api: {
        url: '/todolist'
      }
    });

    return () => {
      dispatch({
        type: 'TODOLIST_CLEAR'
      });
    };
  }, []);

  const handleDelete = (todo: any) => () => {
    dispatch({
      type: 'TODOLIST_DELETE',
      api: {
        method: 'delete',
        url: '/todolist'
      },
      payload: todo
    });
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAdd = React.useCallback(async () => {
    if (newTodo) {
      await dispatch({
        type: 'TODOLIST_ADD',
        api: {
          method: 'post',
          url: '/todolist'
        },
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
      {todoList.data.map((todo: any) => (
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
