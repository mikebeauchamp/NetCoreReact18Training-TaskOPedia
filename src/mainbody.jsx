import Student from "./components/student/student";
import StudentReview from "./components/student/studentreview";
import React from "react";

class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React JS";
    const lectureCount = 3;

    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building
          TaskOPedia! <br />
          Total Lecture - {lectureCount}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        <div className="container row">Students Enrolled</div>
        <Student
          experience={2}
          name="Mike Beauchamp"
          headshot="https://api.lorem.space/image/face?w=150&h=152"
        >
          <StudentReview />
        </Student>
        <Student
          experience={4}
          name="Joe Schmo"
          headshot="https://api.lorem.space/image/face?w=150&h=151"
        >
          <StudentReview />
        </Student>
        <Student
          experience={6}
          name="Johnny Lawrence"
          headshot="https://api.lorem.space/image/face?w=150&h=150"
        />
      </div>
    );
  }
}

export default MainBody;
