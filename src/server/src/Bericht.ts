import { Gebruiker } from "./Gebruiker";

export class Bericht {
    public tijdstip: Date

    constructor(
        public gebruiker: Gebruiker,
        public tekst: string
    ) {
        this.tijdstip = new Date()
    }

    public normaliseer(): object {
        return {
            tijdstip: this.tijdstip.toLocaleTimeString(),
            gebruiker: this.gebruiker.naam,
            tekst: JSON.stringify(this.tekst)
        }
    }
}
