import { appState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";




function _drawHouses() {
    let houses = appState.houses
    let template = ''

    houses.forEach(h => template += h.HouseCard)

    setHTML('listings', template)
}

export class HousesController {

    constructor() {
        console.log("hello houses");
        appState.on('houses', _drawHouses)

    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
        }
    }
 }
