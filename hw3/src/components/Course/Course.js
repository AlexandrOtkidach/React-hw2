import ITSchool from "../ITSchool/ITSchool";

class Course extends ITSchool {
    constructor(courseName, totalLessons, availableTeachersAmount){
        this.courseName = courseName;
        this.totalLessons = totalLessons;
        this.availableTeachersAmount = availableTeachersAmount;
    }
    
}

export default Course