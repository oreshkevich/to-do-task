function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <button className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </button>
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => toggleTask(todo.id)}
      >
        <div>
          <span>Название: </span>
          {todo.nameTask}
        </div>

        <div>
          <span>Описание: </span>
          {todo.descriptionTask}
        </div>
        <div>
          <span>Дата: </span>
          {todo.completionDate}
        </div>
        <div>
          <span>Документ: </span>
          {todo.image}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
