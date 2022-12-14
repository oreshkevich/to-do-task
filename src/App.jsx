import { useState, useEffect } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });

  const addTask = (nameTask) => {
    if (nameTask.nameTask.length > 0) {
      const newItem = {
        id: new Date().getTime(),
        complete: nameTask.done,
        ...nameTask,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="container content">
      <div className="app">
        <header>
          <h1>Список задач: {todos.length}</h1>
        </header>
        <ToDoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <ToDo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;

