import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"


class HousesService {
    async getHouses() {
        const res = await sandboxApi.get('/houses')
        // console.log(res.data);
        appState.houses = res.data.map(h => new House(h))
    }

 }


export const housesService = new HousesService()