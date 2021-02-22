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
            diameter: ${this.diameter}
            climate: ${this.climate}
        </div>
        `
    }
}
