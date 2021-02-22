import ValuesController from "./Controllers/ValuesController.js";
import CharactersController from "./Controllers/CharactersController.js";
import PlanetsController from "./Controllers/PlanetsController.js";

class App {
  valuesController = new ValuesController();
  charactersController = new CharactersController();

  planetsController = new PlanetsController()
}

window["app"] = new App();
