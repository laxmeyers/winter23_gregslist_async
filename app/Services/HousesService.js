import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"


class HousesService {
    async editHouse(formData, houseId) {
        const res = await sandboxApi.put('/houses/' + houseId, formData)

        let oldHouseIndex = appState.houses.findIndex(h => h.id == houseId)
        appState.houses.splice(oldHouseIndex, 1, new House(res.data))
        appState.emit('houses')
    }

    async removeHouse(houseId) {
        const res = await sandboxApi.delete('/houses/' + houseId)

        appState.houses = appState.houses.filter(h => h.id != houseId)
    }

    async createHouse(formData) {
        const res = await sandboxApi.post('/houses', formData)
        console.log(res.data);
        let newHouse = new House(res.data)
        appState.houses.push(newHouse)
        appState.emit('houses')
    }
    
    async getHouses() {
        const res = await sandboxApi.get('/houses')
        // console.log(res.data);
        // console.log(appState.houses);
        appState.houses = res.data.map(h => new House(h))
    }

 }


export const housesService = new HousesService()