export default class Character {
    constructor(data) {
        this.name = data.name
        this.mass = data.mass || "unknown"
        this.hairColor = data.hairColor || data.hair_color
        this.gender = data.gender || "unknown"
    }

    get Template() {

        return /*html*/`
        <div class="card p-2">
            ${this.name}
            Mass: ${this.mass}
            Hair Color: ${this.hairColor}
            Gender: ${this.gender}
        </div>
        `
    }
}
