import React, { useState } from 'react';

function ToDoForm({ addTask }) {
  const [nameTask, setNameTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [done, setDone] = useState(false);

  const [image, setImage] = useState('');

  const imageRef = React.createRef();

  const onImageChange = (e) => {
    const target = e.target;
    if (target.files && target.files[0]) {
      const img = target.files[0];
      console.log(img.name);
      setImage(img.name);
    }
  };
  console.log(done);
  const dataChange = (e) => {
    const d1 = new Date();
    const d2 = new Date(e.target.value);
    let same = d1.getTime() > d2.getTime();
    setDone(same);
    setCompletionDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      nameTask: nameTask,
      descriptionTask: descriptionTask,
      completionDate: completionDate,
      done: done,
      image: image,
    };
    addTask(newCard);
    reset();
  };

  const reset = () => {
    setNameTask('');
    setDescriptionTask('');
    setCompletionDate('');
  };
  return (
    <div>
      <form className="form" method="post" noValidate onSubmit={handleSubmit}>
        <div className="form__item">
          <label className="form__label" htmlFor="title">
            Название задачи:{' '}
          </label>
          <input
            name="title"
            placeholder="Название задачи"
            className="form__control"
            value={nameTask}
            type="text"
            onChange={(e) => setNameTask(e.target.value)}
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="description">
            Описание задачи:{' '}
          </label>
          <input
            name="description"
            value={descriptionTask}
            placeholder="Описание задачи"
            className="form__control"
            onChange={(e) => setDescriptionTask(e.target.value)}
          />
        </div>
        <div>
          <label className="form__label" htmlFor="myImage">
            Прикрепите файл:{' '}
          </label>
          <input
            ref={imageRef}
            type="file"
            name="myImage"
            onChange={onImageChange}
          />
        </div>
        <div className="form__item">
          <label className="form__control" htmlFor="date">
            Дата завершения:
          </label>
          <input
            className="form__input  form__input-data-there"
            type="date"
            value={completionDate}
            name="date"
            onChange={dataChange}
          />
          <p className="small"></p>
        </div>
        <div className="form__btn btn">
          <button type="submit" className="btn-success">
            Создать
          </button>
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
