// TodoForm.jsx
import React, { useState } from 'react';
import useCourseStore from './zustand';
import './app.css';

const TodoForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const courses = useCourseStore((state) => state.courses);

  const [courseTitle, setCourseTitle] = useState('');

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert('Please add a course title');
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
      subCourses: [],
    });
    setCourseTitle('');
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
      />
      <button onClick={handleCourseSubmit} className="form-submit-btn">
        Add List
      </button>
    </div>
  );
};

export default TodoForm;
