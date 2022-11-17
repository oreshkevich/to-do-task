function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => toggleTask(todo.id)}
      >
        <span>Название: </span>
        {todo.nameTask}
      </div>
      <button className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </button>
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => toggleTask(todo.id)}
      >
        <span>Описание: </span>
        {todo.descriptionTask}
      </div>
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => toggleTask(todo.id)}
      >
        <span>Дата: </span>
        {todo.completionDate}
      </div>
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => toggleTask(todo.id)}
      >
        <span>Документ: </span>
        {todo.image}
      </div>
    </div>
  );
}

export default ToDo;
