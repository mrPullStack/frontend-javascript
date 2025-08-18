// task_4/js/subjects/Subject.ts

// Importing the Teacher interface from the Subjects namespace
import { Teacher } from './Teacher';

// Defining the Subject class in the Subjects namespace
namespace Subjects {
    export class Subject {
        private teacher: Teacher;

        // Setter method to assign a teacher to the subject
        setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
        }
    }
}

export default Subjects; // Exporting the Subjects namespace for use in other files
