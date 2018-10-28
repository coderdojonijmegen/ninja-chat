Code blokjes
============
Gebruik deze blokjes om je eigen chat programma te bouwen. Enkele tips:

- De HTML tag plaats je in het html bestand, op de aangegeven plek. Kies zelf in welke volgorde ze komen te staan, zodat de pagina er helemaal uit ziet zoals jij wilt!
- De CSS regels plaats je onderin het css bestand. Experimenteer door bijvoorbeeld kleuren te veranderen en blokjes groter of kleiner te maken.
- Veel HTML tags kunnen andere tags en teksten bevatten. Een `<div>` wordt bijvoorbeeld afgesloten met een `</div>`. Alles wat daartussen staat, komt in dat blokje te staan.
- Voeg teksten toe om alles duidelijker te maken. In HTML kun je gewoon tekst typen en dat komt dan op de pagina!
- Gebruik `<br>` om het volgende blokje op een nieuwe regel te zetten.

Berichten
---------
Gebruik dit blokje om berichten te ontvangen van de server.

**HTML Tag:** `<div class="berichten">` `</div>`  
**CSS:** Bijvoorbeeld

    .berichten {
      background-color: green;   /* Voor een groene achtergrond */
      padding: 5px;              /* Om 5 pixels extra ruimte in de box te krijgen aan alle randen. */
      border: 2px dotted yellow; /* Voor een gele rand.
    }

Bericht schrijven
-----------------
Gebruik dit blokje om zelf berichten te kunnen typen. Als je op enter drukt, wordt het bericht verstuurd.

**HTML Tag:** `<input id="berichtInput">`  
**CSS:** Bijvoorbeeld

    #berichtInput {
      background-color: yellow;
      color: blue;
    }

**Uitbreiding:** Gebruik placeholder om een tijdelijke tekst te zien, zolang er nog niets geschreven is. Bijvoorbeeld:    
  `<input id="berichtInput" placeholder="Type hier je bericht!">`


Naam instellen
--------------
Hiermee kun je instellen onder welke naam jouw berichten worden verstuurd. Standaard krijg je een naam van de server toegewezen, bijvoorbeeld anon836, dit kun je zelf veranderen.

**HTML Tag:** `<input id="naamInput">`  
**CSS:** Bijvoorbeeld

    #naamInput {
      background-color: black;
      color: white;
      font-weight: bold;
    }

Kanaal instellen
----------------
Hiermee kun je een kanaal kiezen. Standaard zit je op kanaal 1, probeer zelf eens uit hoeveel kanalen je kan kiezen!

**HTML Tag:** `<input id="kanaalInput">`  
**CSS:**

    #kanaalInput {
      /* Kijk bij de eerder blokjes voor voorbeelden. */
    }
