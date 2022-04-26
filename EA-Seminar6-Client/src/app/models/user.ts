export class User {
    _id?: number;
    id: string;
    name: string;
    age: string;
    password: string;
    creationDate: Date;

    constructor(id: string, name: string, age: string, password: string, creationDate: Date) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.password = password;
        this.creationDate = creationDate;
    }   
}
