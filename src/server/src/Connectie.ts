import SocketIO = require('socket.io')

import { Gebruiker } from "./Gebruiker";
import { Kanaal } from "./Kanaal";
import { Bericht } from "./Bericht";
import { Messages } from './Messages';

export class Connectie {
    public gebruiker: Gebruiker
    public server_gebruiker: Gebruiker

    constructor(
        private vind_kanaal: (id: number) => Kanaal|null,
        public kanaal_id: number,
        public socket: SocketIO.Socket
    ) {
        this.gebruiker = new Gebruiker()
        this.server_gebruiker = new Gebruiker()
        this.server_gebruiker.naam = "Ninja server"
    }

    public initialize() {
        this.socket.on(
            Messages.in.zetKanaal,
            (id: number) => this.zetKanaal(id)
        )
        this.socket.on(
            Messages.in.maakBericht,
            (tekst: string) => this.maakBericht(tekst)
        )
        this.socket.on(
            Messages.in.zetNaam,
            (naam: string) => this.zetNaam(naam)
        )

        this.stuurKanaal()
        this.stuurNaam()
        this.stuurBericht(
            new Bericht(this.server_gebruiker, "Welkom bij ninja chat!")
        )
    }

    public stuurKanaal() {
        this.socket.emit(Messages.out.krijgKanaal, this.kanaal_id)
    }

    public zetKanaal(id: number) {
        if (this.kanaal_id !== id) {
            const oud_kanaal = this.vind_kanaal(this.kanaal_id)
            const nieuw_kanaal = this.vind_kanaal(id)
            if (oud_kanaal !== null && nieuw_kanaal !== null) {
                this.kanaal_id = id
                oud_kanaal.spoelConnecties()
                nieuw_kanaal.nieuweConnectie(this)
                this.stuurBericht(
                    new Bericht(this.server_gebruiker, `Welkom op kanaal ${id}`)
                )
            }
            else {
                this.stuurBericht(
                    new Bericht(this.server_gebruiker, "Kanaal niet gevonden")
                )
            }
        }
        this.stuurKanaal()
    }

    public maakBericht(tekst: string) {
        const kanaal = this.vind_kanaal(this.kanaal_id)
        if (kanaal === null) {
            this.stuurBericht(
                new Bericht(this.server_gebruiker, "Kanaal kwijt")
            )
        }
        else {
            kanaal.omroep(new Bericht(this.gebruiker, tekst))
        }
    }

    public stuurBericht(bericht: Bericht) {
        this.socket.emit(Messages.out.krijgBericht, bericht.normaliseer())
    }

    public zetNaam(naam: string) {
        this.gebruiker.naam = naam
        this.stuurNaam()
    }

    public stuurNaam() {
        this.socket.emit(Messages.out.krijgNaam, this.gebruiker.naam)
    }
}
