/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging - add new optional attribute
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
        return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
        if (!this.teacher.experienceTeachingJava) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
