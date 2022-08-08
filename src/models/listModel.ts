import { users } from "../data";
import { IUser } from "../interfaces/IUser";
import { Subject } from "../utils/subject";

export class ListModel extends Subject {
    users: IUser[];

    constructor() {
        super()
        this.users = users
    }
}