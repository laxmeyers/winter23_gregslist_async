import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";




function _drawHouses() {
    let houses = appState.houses
    let template = ''

    houses.forEach(h => template += h.HouseCard)

    setHTML('listings', template)
    setHTML('modal-content', House.HouseForm())
    setHTML('form-button', House.FormButton())
}

function _drawAddForm() {
    setHTML('modal-content', House.HouseForm())
}

function _drawEditForm(houseId) {
    let house = appState.houses.find(h => h.id == houseId)
    console.log('house', house);
    setHTML('modal-content', House.HouseEditForm(house))
}

export class HousesController {

    constructor() {
        // console.log("hello houses");
        appState.on('houses', _drawHouses)

    }

    drawForm() {
        _drawAddForm()
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
            console.log(error.message);
        }
    }

    async createHouse() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            console.log(form);

            const formData = getFormData(form)
            console.log(formData);

            await housesService.createHouse(formData)

        } catch (error) {
            Pop.error(error)
        }
    }

    async removeHouse(houseId) {
        try {
            if (await Pop.confirm("you Sure?")) {
                await housesService.removeHouse(houseId)
            }
        } catch (error) {
            Pop.error(error)
        }
    }

    drawEditHouseForm(houseId) {
        console.log(houseId);
        _drawEditForm(houseId)
        
    }

    async editHouse(houseId) {
        try {
            window.event.preventDefault()
            const form = window.event.target
            console.log('form',form);

            const formData = getFormData(form)
            await housesService.editHouse(formData, houseId)

        } catch (error) {
            Pop.error(error)
            console.log(error.message);
        }
    }



 }
