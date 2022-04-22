import React from 'react';
import Part from './Part';

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
  );
};

export default Course;
