import { IObserver } from "../interfaces/IObserver"
import { Subject } from "./subject"

export class Observer implements IObserver {
    public update = () => {}
}