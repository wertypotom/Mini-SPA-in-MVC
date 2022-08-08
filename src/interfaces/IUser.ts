interface IAddress {
    street: string
    houseNum: number
}

export interface IUser {
    id: number;
    name: string
    surname: string
    age: number
    className: string;
    isSelected: boolean
    address: IAddress
}