import { ISubject } from "../interfaces/ISubject";
import { Observer } from "./observer";

export class Subject implements ISubject {
    private observers: Observer[] = [];

    public attach = (observer: Observer): void => {
        const isExist = this.observers.includes(observer);
        
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        this.observers.push(observer)
    }

    public detach = (observer: Observer): void => {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.')
        }

        this.observers.splice(observerIndex, 1)
    }

    public notify = (): void => {
        this.observers.forEach(observer => {
            observer.update()
        })         
    }
}

