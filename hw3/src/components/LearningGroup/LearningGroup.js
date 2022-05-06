import Course from "../Course/Course";

class LearningGroup extends Course{
    constructor(courseName, teacherName, amountOfStudents){
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
    }

    doneLesson(title, topics){
    }

}

export default LearningGroup
