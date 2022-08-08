import { ListController } from "./controllers/listController";
import { DivModel } from "./models/divModel";
import { ListModel } from "./models/listModel";
import { DivView } from "./view/divView";
import { ListView } from "./view/listView";


const listModel = new ListModel()
const divModel = new DivModel()
const listController = new ListController(listModel, divModel)

new ListView(listController)
new DivView(listController)

