
import { subject } from "./subject";
import { User } from "./user";

export class SaveResultDto{
    attempts: number;
    level: number;
    score: number;
    subject : subject = new subject();
    user : User = new User();
}