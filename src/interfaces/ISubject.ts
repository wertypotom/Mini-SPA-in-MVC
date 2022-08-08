import { Observer } from "../utils/observer"

export interface ISubject {
    attach(observer: Observer): void
    detach(observer: Observer): void
    notify(): void
}