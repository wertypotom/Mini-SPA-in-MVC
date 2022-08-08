import { IUser } from "../interfaces/IUser";
import { Subject } from "../utils/subject";

export class DivModel extends Subject {
    selectedUser: IUser | null = null;

    constructor() {
        super()
    }
}