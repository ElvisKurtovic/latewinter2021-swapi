import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Planet from "../Models/Planet.js";

class PlanetsService {

    constructor() {
        this.getPlanets()
    }

    // api.get('people').then(function (res) {

    // })
    getPlanets() {
        api.get('planets').then(res => {
            console.log(res.data)
            ProxyState.planets = res.data.results.map(rawPlanetData => new Planet(rawPlanetData))
            ProxyState.nextPlanets = res.data.next
            ProxyState.prevPlanets = res.data.previous
            console.log(ProxyState.planets)
            console.log("this does not run first")
        }).catch(err => console.error(err))
        console.log("this runs first")
    }

    next() {
        api.get(ProxyState.nextPlanets).then(res => {
            console.log(res.data)
            ProxyState.planets = res.data.results.map(rawPlanetData => new Planet(rawPlanetData))
            ProxyState.nextPlanets = res.data.next
            ProxyState.prevPlanets = res.data.previous
            console.log(ProxyState.planets)
        }).catch(err => console.error(err))
    }
    prev() {
        api.get(ProxyState.prev).then(res => {
            console.log(res.data)
            if (ProxyState.prev != null) {
                ProxyState.planets = res.data.results.map(rawPlanetData => new Planet(rawPlanetData))
                ProxyState.nextPlanets = res.data.next
                ProxyState.prevPlanets = res.data.previous
                console.log(ProxyState.planets)
            } else {
                alert("There is no previous")
            }
        }).catch(err => console.error(err))
    }


}

export const planetsService = new PlanetsService();

