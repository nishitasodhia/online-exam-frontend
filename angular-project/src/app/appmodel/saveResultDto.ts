
import { subject } from "./subject";
import { User } from "./user";

export class SaveResultDto{
    attempts: number;
    level: number;
    score: number;
    sid : subject = new subject();
    uid : User = new User();
}