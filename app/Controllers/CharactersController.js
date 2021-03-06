import { ProxyState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";


//Private
function _draw() {
  let characters = ProxyState.characters;
  let template = ''
  characters.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div className="card-columns characters">
      ${template}
  </div>
  <button class="btn btn-primary" onclick="app.charactersController.prev()">Previous</button>
  <button class="btn btn-primary" onclick="app.charactersController.next()">Next</button>
  <button class="btn btn-primary" onclick="app.charactersController.male()">Male</button>
  `
  let male = ProxyState.male
  let mtemplate = ''
  male.forEach(m => mtemplate += m.Template)
  document.getElementById("male").innerHTML = /*html*/`
  <div className="card-columns male">
  <hr>
  <h4 id="malestitle" hidden>Males</h4>
      ${mtemplate}
  </div>
  `
}

//Public
export default class CharactersController {
  constructor() {
    ProxyState.on("characters", _draw);
    ProxyState.on("male", _draw);
    _draw()
  }

  next() {
    charactersService.next()
  }
  prev() {
    charactersService.prev()
  }

  male() {
    charactersService.male()
  }

}
