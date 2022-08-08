import { IUser } from "./interfaces/IUser";

export const users: IUser[] = [
    {
        id: 1,
        name: 'Jane',
        surname: 'SurJane',
        age: 13,
        address: {
            houseNum: 1,
            street: 'Holly crep'
        },
        className: '',
        isSelected: false,
    },
    {
        id: 2,
        name: 'Mike',
        surname: 'SurMike',
        age: 23,
        address: {
            houseNum: 2,
            street: 'Johny boy St.'
        },
        className: '',
        isSelected: false,
    },

    {
        id: 3,
        name: 'Bob',
        surname: 'SurBob',
        age: 42,
        address: {
            houseNum: 3,
            street: 'Market St'
        },
        className: '',
        isSelected: false,
    },
    {
        id: 4,
        name: 'Kevin',
        surname: 'SurKevin',
        age: 32,
        address: {
            houseNum: 1,
            street: 'Bakery St.'
        },
        className: '',
        isSelected: false,
    },
    {
        id: 5,
        name: 'Mike',
        surname: 'Klarkson',
        age: 19,
        address: {
            houseNum: 19,
            street: 'Johny boy St.'
        },
        className: '',
        isSelected: false,
    },
]