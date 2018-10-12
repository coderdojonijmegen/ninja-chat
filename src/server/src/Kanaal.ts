import { Bericht } from "./Bericht";
import { Connectie } from "./Connectie";

export class Kanaal {
    public geschiedenis: Bericht[] = []
    public connecties: Connectie[] = []

    constructor(
        public id: number
    ) {}

    public nieuweConnectie(conn: Connectie) {
        this.connecties.push(conn)
    }

    public spoelConnecties() {
        const filter_connecties = this.connecties.filter(conn => (conn.kanaal_id === this.id))
        this.connecties = filter_connecties
    }
    
    public omroep(bericht: Bericht) {
        for (let conn of this.connecties) {
            conn.stuurBericht(bericht)
        }
        this.geschiedenis.push(bericht)
    }
}
