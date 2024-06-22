import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  const courses = props.courses;
  const res = courses.map((course) => (
    <div key={course.title} id={course.id}>
      <h5>{course.title}</h5>
      <p>{course.description}</p>
      <div className="d-flex flex-wrap CourseCardContainer mx-auto">
        {course.modules.map((module, index) => (
          <Link key={module.name} to={module.pathlink} className="links">
            <div className="card m-2" style={{ width: "15rem" }}>
              <img
                src={module.imgPath}
                alt="img"
                className="card-img-top"
                height={125}
              />

              <div className="card-body">
                <h5 className="card-title">{module.name}</h5>
                <p className="card-text">Description </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ));

  return (
    <>
      <div className="back">
        <div className="container">
          <Link to="/courses" className="links" style={{ color: "white" }}>
            All Courses
          </Link>
        </div>
      </div>
      <section className="container mt-3">
        <h2>What we Offer</h2>
        <div>{res}</div>
      </section>
    </>
  );
}
