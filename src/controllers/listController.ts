import { IUser } from '../interfaces/IUser'
import { ListModel } from './../models/listModel'
import { users } from './../data'
import { DivModel } from '../models/divModel'

export class ListController {
    listModel: ListModel
    divModel: DivModel

    constructor(listModel: ListModel, divModel: DivModel) {
        this.listModel = listModel
        this.divModel = divModel
    }

    toggleIsUserSelected = (user: IUser, isSelected: boolean) => {
        const foundUser = this.listModel.users.find(i => i.id === user['id'])

        if (!!foundUser) {
            foundUser.isSelected = isSelected
        }
    }

    setSelectedUser = (selectedUser: IUser) => {
        if (!!this.divModel.selectedUser) {
            if (selectedUser.id === this.divModel.selectedUser.id) {
                this.divModel.selectedUser = null
                this.toggleIsUserSelected(selectedUser, false)
            } else {
                const currentActiveInList = this.listModel.users.find(user => user.isSelected)

                this.divModel.selectedUser = selectedUser
                this.toggleIsUserSelected(selectedUser, true)

                if (!!currentActiveInList) currentActiveInList.isSelected = false
            }  
        } else {
            this.divModel.selectedUser = selectedUser
            this.toggleIsUserSelected(selectedUser, true)
        }

        this.divModel.notify()
        this.listModel.notify()
    }

    filterUsers = (inputValue:  string) => {
        if (!inputValue) {
            this.listModel.users = users
        }

        this.listModel.users = users.filter(user => {
            const name = user.name.toLowerCase()
            const surname = user.surname.toLowerCase()
            const fullName = `${name} ${surname}`

            if (fullName.includes(inputValue.toLowerCase())) {
                return user
            }
        })
       

        this.listModel.notify()
    }
}