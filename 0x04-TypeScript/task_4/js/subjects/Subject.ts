import { Teacher } from "./Teacher";

export default abstract class Subject {
    protected teacher: Teacher | undefined;

    setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
    }

    abstract getRequirements(): string;
    abstract getAvailableTeacher(): string;
}
