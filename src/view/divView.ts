import { ListController } from "../controllers/listController";
import { IUser } from "../interfaces/IUser";
import { Observer } from "../utils/observer";

export class DivView extends Observer {
    controller: ListController

    constructor(controller: ListController) {
        super()
        this.controller = controller
        this.controller.divModel.attach(this)
    }

    public renderUserCard = (user: IUser) => {
        const rootContainer = document.querySelector('.root')
        const itemContainer = document.createElement('ul') 
        itemContainer.className = 'userItemContainer'

        const userName = document.createElement('li')
        userName.textContent = 'Name: ' + user.name
        const userSurname = document.createElement('li')
        userSurname.textContent = 'Surname: ' + user.surname
        const userAge = document.createElement('li')
        userAge.textContent = 'Age: ' + user.age.toString()
        const userHouseNum = document.createElement('li')
        userHouseNum.textContent = 'House number: ' + user.address.houseNum.toString()
        const userStreet = document.createElement('li')
        userStreet.textContent = 'Street: ' + user.address.street

        itemContainer?.append(userName)
        itemContainer?.append(userSurname)
        itemContainer?.append(userAge)
        itemContainer?.append(userHouseNum)
        itemContainer?.append(userStreet)

        rootContainer?.append(itemContainer)
    }


    public removeElementFromPage = (value: string): void => {
        const item = document.querySelector('.'+value)
        item?.remove()
    }

    public update = () => {
        if (!!this.controller.divModel.selectedUser) {
             this.removeElementFromPage('userItemContainer')
             this.renderUserCard(this.controller.divModel.selectedUser)
        } else {
             this.removeElementFromPage('userItemContainer')
        }
    }
}