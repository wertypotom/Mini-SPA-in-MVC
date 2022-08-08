import { IUser } from '../../src/interfaces/IUser'
import { DivModel } from '../../src/models/divModel'
import { ListModel } from '../../src/models/listModel'
import {ListController} from './../../src/controllers/listController'

describe('ListController', () => { 
    let listModel: ListModel
    let divModel: DivModel
    let listController: ListController

    describe('Filter users', () => {
        beforeEach(() => {
            listModel = new ListModel()
            listController = new ListController(listModel, divModel)
        })

        it('Correct value passed', () => {
            const mike = {
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
            }
    
            listController.filterUsers('Mike Klarkson')
            expect(listModel.users.length).toBe(1)
            expect(listModel.users).toEqual([mike])
            expect(listModel.users).toBeInstanceOf(Array)
        })

        it('Non-existed user typed', () => {
            listController.filterUsers('Eva')
            expect(listModel.users.length).toBe(0)
        })

        it('No user typed', () => {
            listController.filterUsers('')
            expect(listModel.users.length).toBe(5)
        })
    })
     
    describe('Set selected user', () => {
        let selectedUser: IUser;

        beforeEach(() => {
            listModel = new ListModel()
            divModel = new DivModel()
            listController = new ListController(listModel, divModel)

            selectedUser = {
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
            }
        })

        it('Should set selected user correctly', () => {
            expect(divModel.selectedUser).toBeNull()
            listController.setSelectedUser(selectedUser)
            expect(divModel.selectedUser).toBeDefined()
            expect(divModel.selectedUser).toEqual(selectedUser)
        })
        
        it('Should implement toggleIsUserSelected correctly', () => {
            listController.toggleIsUserSelected = jest.fn(listController.toggleIsUserSelected)
            let toggleIsUserSelected = listController.toggleIsUserSelected 

            listController.setSelectedUser(selectedUser)
            expect(toggleIsUserSelected).toHaveBeenCalled()
            expect(toggleIsUserSelected).toHaveBeenCalledTimes(1)
            expect(toggleIsUserSelected).toHaveBeenCalledWith(selectedUser, true)

            listController.setSelectedUser(selectedUser)
            expect(divModel.selectedUser).toBeNull()
            expect(toggleIsUserSelected).toHaveBeenCalledWith(selectedUser, false)
        })
    })
})
