class Teacher {
    constructor(teacherName) {
        this.name = teacherName; 
        this.courses = [];
    }

    addCourse(newCourse) {

        if(newCourse instanceof Course) {
            this.courses.push(newCourse);
        } 
        else {
            console.log("You did not add a Class Course");
        }
        
    }

}


class Course {
    constructor(courseName) {
        this.name = courseName;
        this.books = [];
        this.coursePoints;
    }

    addBook(bookName) {
        this.books.push(bookName);
    }
    
    set points(newCoursePoints) {
        this.coursePoints = newCoursePoints;
    }

}


let testTeacher = new Teacher("Maria");

let testCourse = new Course("JavaScript 1");

testTeacher.addCourse(testCourse);

testCourse.points = 200;


let school = new School("Nackademin");

school.addTeacher(testTeacher);

console.log(school);