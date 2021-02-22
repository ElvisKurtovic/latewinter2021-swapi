export default class Planet {
    constructor(data) {
        this.name = data.name
        this.diameter = data.diameter || "unknown"
        this.climate = data.climate || "unknown"
    }

    get Template() {

        return /*html*/`
        <div class="card p-2">
            ${this.name}
            Diameter: ${this.diameter}
            Climate: ${this.climate}
        </div>
        `
    }
}
