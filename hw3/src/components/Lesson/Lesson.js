import LearningGroup from "../LearningGroup/LearningGroup";

class Lesson extends LearningGroup{
    constructor(title, topics){
        this.title = title;
        this.topics = topics;
    }
}

export default Lesson
