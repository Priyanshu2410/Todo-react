import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [{ ...course, subCourses: [] }, ...state.courses],
    }));
  },
  addSubCourse: (courseId, subCourse) => {
    set((state) => {
      const updatedCourses = state.courses.map((course) => {
        if (course.id === courseId) {
          return {
            ...course,
            subCourses: [...course.subCourses, subCourse],
          };
        }
        return course;
      });
      return { courses: updatedCourses };
    });
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId ? { ...course, completed: !course.completed } : course
      ),
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: 'courses',
    })
  )
);

export default useCourseStore;
