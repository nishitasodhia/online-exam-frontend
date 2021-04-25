import { Subject } from "./admin-subject";

export class Question{
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    marks: number;
    correctAnswer: string;
    levels: number;
    subject: Subject = new Subject;
    status: boolean;
}