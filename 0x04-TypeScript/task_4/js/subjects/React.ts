/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging - add new optional attribute
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
        return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
        if (!this.teacher.experienceTeachingReact) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
