export class Report{
    constructor(score: number,
        id: number,
        subName: string,
        level: number) {
        this.score = score;
        this.subName = subName;
        this.level =level;
        this.id = id;
    }
    id:number;
    subName:string;
    level:number;
    score:number;
    attempts:number;
    
}