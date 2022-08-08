import { ListController } from "../controllers/listController";
import { IUser } from "../interfaces/IUser";
import { Observer } from "../utils/observer";

export class ListView extends Observer {
    private controller: ListController

    constructor(controller: ListController) {
        super()
        this.controller = controller
        this.controller.listModel.attach(this)
        this.render()
    }

    public render = () => {
        this.renderUsersList()
        this.renderSearchField()
    }

    public renderUsersList = () => {
        const usersList = document.querySelector('.userItems-list')
        
        const users = this.controller.listModel.users

        for (let index = 0; index < users.length; index++) {
            const user = users[index];

            const userElement = document.createElement('li')
            userElement.textContent = user.name + ' ' + user.surname

            if (!!user.isSelected) {
                userElement.className = 'selectedUserItem'
            }

            userElement.addEventListener('click', () => {
                this.controller.setSelectedUser(user)
            })
            
            usersList?.append(userElement)
        }
    }

    public renderSearchField = () => {
        const input = document.querySelector('.userItems-input')

        input?.addEventListener('keyup', (e) => {
            const target = e.target as HTMLInputElement

            this.controller.filterUsers(target.value)
        })
    }


    public update = () => {
       const usersList = document.querySelector('.userItems-list')

       if (usersList) {
            usersList.innerHTML = ''
       }

       this.renderUsersList() 
    }
}

export const add = (a: number, b:number) => a + b