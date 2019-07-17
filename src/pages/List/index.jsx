import React from 'react';

const todos = [
  '吃早饭',
  '吃午饭'
];

const List = () => {
  const [todolist] = React.useState(todos);

  return (
    <ul>
      {todolist.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default List;