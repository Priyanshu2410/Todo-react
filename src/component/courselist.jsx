// CourseList.jsx
import React from 'react';
import useCourseStore from './zustand';
import './app.css';

const CourseList = () => {
  const addSubCourse = useCourseStore((state) => state.addSubCourse);
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore((state) => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourseStatus: state.toggleCourseStatus,
  }));

  const handleSubCourseSubmit = (courseId) => {
    const subCourseTitle = prompt('Enter sub-course title:');
    if (!subCourseTitle) return;
    addSubCourse(courseId, {
      id: Math.ceil(Math.random() * 1000000),
      title: subCourseTitle,
    });
  };

  return (
    <div className="course-list-container">
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className={`course-item ${course.completed ? 'completed' : ''}`}>
            <div className="course-item-header">
              <input
                type="checkbox"
                checked={course.completed}
                onChange={() => toggleCourseStatus(course.id)}
              />
              <span className="course-title">{course.title}</span>
              <button className='addsubcourse' onClick={() => handleSubCourseSubmit(course.id)}>
                Add Sub-List
              </button>
              <button className="delete-btn" onClick={() => removeCourse(course.id)}>
                Delete
              </button>
            </div>
            {course.subCourses.length > 0 && (
              <ul className="sub-course-list">
                {course.subCourses.map((subCourse) => (
                  <li key={subCourse.id} className="sub-course-item">
                    {subCourse.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
