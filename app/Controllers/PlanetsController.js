import { ProxyState } from "../AppState.js";
import { planetsService } from "../Services/PlanetsService.js";


//Private
function _draw() {
    let planets = ProxyState.planets;
    let template = ''
    planets.forEach(v => template += v.Template)
    document.getElementById("planet").innerHTML = /*html*/`
  <div className="card-columns planets">
      ${template}
  </div>
  <button class="btn btn-primary" onclick="app.planetsController.prev()">Previous</button>
  <button class="btn btn-primary" onclick="app.planetsController.next()">Next</button>
  `
}

//Public
export default class PlanetsController {
    constructor() {
        ProxyState.on("planets", _draw);
        _draw()
    }

    next() {
        planetsService.next()
    }
    prev() {
        planetsService.prev()
    }

}
