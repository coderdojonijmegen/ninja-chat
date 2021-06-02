---
title: "Javascript - Ninja-Chat"
date: 2021-05-24T13:44:02+02:00
draft: false
toc: true
headercolor: "teal-background"
taal: Javascript
---

We gaan een chat programma maken!

<!--more-->

## Benodigdheden

Voordat we aan de slag kunnen, moeten we eerst een paar dingen regelen. We hebben een checklist gemaakt van alles wat je nodig hebt, daaronder volgt per stap de uitleg.


### Checklist

1. De skeleton app
2. Een tekst editor
3. Een web browser
4. Een web server
5. De chat server URL
6. De developers tools


### De skeleton app

Klik [hier](client.zip) om de skeleton app te downloaden. Pak dit bestand uit naar een map, bijvoorbeeld op je bureaublad.

Dit zijn de bestanden die je nodig hebt om te beginnen: een html file, een css file en een javascript file. Elk bestand heeft z'n eigen hoofdstuk, waarin je dat bestand gaat bewerken en je eigen dingen toe voegt.

Als je ergens een foutje maakt, kun je de bestanden altijd opnieuw uitpakken.


### Een tekst editor

Als je nog geen tekst editor hebt, adviseren wij [Visual Studio Code](www.vscode.com).

Download, installeer en open VS Code. In VS Code klik je op "Open Folder", selecteer dan de map waar je de skeleton app hebt uitgepakt.

Andere tekst editors zijn ook prima, als je aan iets anders gewend bent. Bijvoorbeeld: Notepad++ of Sublime Text.


### Een web browser

In alle voorbeelden gebruiken wij [Google Chrome](www.googlechrome.com). Andere browsers, zoals Firefox of Edge, zijn ook prima, mogelijk zien de app en developers tools er dan wel anders uit dan in Chrome.

Controleer ook of je de nieuwste versie hebt van de browser, om zeker te weten dat de app goed werkt.

### Een web server

Om je app te zien, moet je een web server hebben die naar je map verwijst. Daarnaast zijn er een paar instellingen belangrijk.

Wij adviseren [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb). Installeer de web server en open de app. Je zie dan een instellingen pagina. Selecteer hier de uitgepakte map en stel de server in zoals op deze afbeelding:

![Chrome web server settings](images/settings-webserver-for-chrome.png)

*Let op*: De CORS headers zijn heel belangrijk om de chat werkend te krijgen.


### De chat server URL

Als het goed is, hebben de mentoren je een link gegeven van de chat server. Dit is belangrijk om te kunnen praten met de andere ninja's in de groep.

Zoek de volgende regel in je index.html bestand, en plak de chat server url tussen de haakjes:

{{<highlight javascript>}}
<script>
    var serverIpAdresEnPoort = "https://chat.coderdojo-nijmegen.nl";
</script>
{{</highlight>}}


### De developers tools

Als het goed is, heb je nu alles om je app te bouwen. Open de link van je web server in Chrome, als het goed is zie je dan drie gekleurde balken.

Klik met je rechter muisknop op &egrave;&egrave;n van die balken en klik op "Inspect Element". Hiermee open je de developers tools van Chrome, waar je kan sleutelen aan alle onderdelen van de app.

Voor de chat app is het fijn om de developers tools rechts van je scherm te zetten met *deze* knop, rechts van je tools. Sleep de rand van de tools dan zo, dat het ongeveer de helft van je scherm in beslag neemt.

![Developers tools](images/developers-tools.png)


## Structuur (HTML)

Deze instructies bestaan uit drie hoofdstukken:
1. Structuur (HTML) - hier gaan we de app onderdelen in elkaar zetten.
2. Stijl (CSS) - hier gaan we veranderen hoe de onderdelen eruit zien.
3. Scripts (Javascript) - hier gaan we veranderen hoe de app werkt.

Bij elk hoofdstuk hoort een bestand. Voor dit hoofdstuk werken we in de *index.html*.

### HTML: blokjes en tekst

In het begin zul je nog niet alles snappen wat in de bestanden staat. Dat is ok&egrave;! Laten we eerst rond kijken en dan gaan we onze eigen onderdelen toevoegen:

- Open de app en de developers tools (zie [Benodigdheden]((#benodigdheden))).
- Klik op de Inspect Element knop (zie afbeelding), zodat deze blauw wordt.   
![Inspect element](images/inspect-element.png)
- Beweeg de muis over de groene, gele en grijze balken in de app.

Je ziet de 'div' elementen in de Developers Tools oplichten. Dat zijn de 'blokjes' waarmee je begint. Een paar dingen moet je weten over die blokjes:

- Een blok begint met **\<div\>** en eindigt met **\</div\>**.
- Met **class=""** krijgt het blokje een class naam.
- De class wordt in de CSS (hoofdstuk 2) gebruikt om te bepalen hoe het eruit ziet.
- De class wordt ook in de Javascript (hoofdstuk 3) gebruikt om te bepalen hoe het werkt.
- Blokjes kunnen *in* elkaar en blokjes kunnen *naast* elkaar.

#### HTML tekst

In de HTML kun je tekst typen. Afhankelijk van waar je die tekst typt, komt het ergens anders op het scherm (of misschien zelfs helemaal niet).

- Zoek de div blokjes op in de index.html, het zijn er vier.
- De 'container' class zorgt ervoor dat de blokjes die er in zitten onder elkaar komen.
- In de container zie je drie andere divs. Kun je raden waar die voor zijn?
- Schrijf wat tekst, bijvoorbeeld "Hallo wereld!", in het blokje met de class 'midden'.
- Ververs je pagina. Staat je tekst in het middelste blokje? Zo niet, dan is er misschien iets mis gegaan.
- Probeer ook tekst te typen in de boven en onder blokjes. Verschijnt die tekst ook op de juiste plek in je scherm?
- Wat gebeurt er als je tekst typt in de container, maar *buiten* de boven/midden/onder blokjes?
- Wat gebeurt er als je tekst typt *buiten* de container (maar wel in de **\<body\>**)?

![Test teksten](images/test-teksten.png)

### Chat berichten

Nu dat je snapt hoe de HTML blokjes werken, kun je je eigen blokjes toe voegen.  
Voeg deze code in, in het blokje *"midden"*:

> \<div class="berichten"\>\</div\>

Ververs de pagina. Als het goed is, verschijnen nu de chat berichten op je scherm! Zo makkelijk kan het zijn om onderdelen toe te voegen.

![Chat bericht](images/chat-bericht.png)

#### Berichten typen

We willen natuurlijk ook berichten kunnen sturen.  
Voeg deze code in, in het blokje *"onder"*:

> \<div class="berichtInput"\>Type hier...\</div\>

Als het goed is, zie je *"Type hier..."* op je scherm, maar als je daar klikt, kun je nog niet typen. Dat komt, omdat *div* daar niet voor is gemaakt. Verander het woord *div* in *textarea*, en ineens ziet het er heel anders uit:

> \<textarea class="berichtInput" placeholder="Type hier..."\>\</textarea\>

![Textarea](images/textarea.png)

Je kunt nu tekst typen. Als je op enter drukt, wordt je bericht verstuurd!

### Meer onderdelen

Laten we nog wat meer onderdelen toevoegen. Kopieer deze blokjes en plak ze in de boven/midden/onder blokjes. Je mag zelf bepalen waar deze blokjes in je app komen en in welke volgorde. Je kan ook ons voorbeeld onderin deze pagina na maken.

**Tips:**
- Probeer niet alles tegelijk te doen. Plak een blokje in de index.html, sla op en ververs de pagina in chrome.
- Staat een blokje niet op de plek die je had verwacht? Gebruik de Inspect Element knop om te ontdekken wat er mis is gegaan!
- De boven/midden/onder classes heb elk hun eigen manier van blokjes plaatsen. Hier gaan we in het volgende hoofdstuk verder op in.
- Verander teksten en de type blokjes, je kan er vanalles van maken. Zolang de 'class' klopt, zou het moeten blijven werken.

#### De blokjes

> \<h1\>Ninja chat\</h1\>

Met h1 plaats je een titel, de letters zijn dan groter en dikker. Het heeft verder geen speciale effecten, dus h1 is net als een div. Probeer ook h2 en h3 voor verschillende grooottes.

> \<div\>Naam: \<input type="text" class="naamInput"\>\</div\>

Een input is een speciaal soort blokje, waar je iets kan typen of aanklikken. Een input hoeft niet afgesloten te worden, want er kan nooit html *in* een input staan. Met *type="text"* wordt gezegd dat je tekst kan typen. De class *'naamInput'* is voor het invoeren van je naam. We hebben de input in een div blokje geplaatst, zodat de tekst "Naam" er mooi bij komt te staan. Verander de standaard naam in je eigen naam, omdat bij de berichten terug te zien.

> \<div\>Kanaal: \<input type="number" class="kanaalInput"\>\</div\>

Ook dit is een input, nu met type *'number'*, zodat je alleen een getal kan invullen. Elk bericht hoort bij een kanaal en je kanaal is standaard '1'.

> \<button class="stuurBericht"\>Stuur bericht\</button\>

Button is Engels voor het woord 'knop'. Tot nu toe stuurde je berichten door op 'enter' te drukken, nu kan het ook door op deze knop te klikken.

> \<div class="deelnemers"\>\</div\>

Deze div is nog leeg, het doet niets totdat er op de deelnemers knop wordt gedrukt. Maar die knop heb je nog niet, dus die volgt nu:

> \<button class="bekijkDeelnemers"\>Bekijk deelnemers\</button\>

Je krijgt dus een knop waarmee je deelnemers kan bekijken, zodra daar op wordt geklikt wordt de 'deelnemers' div gevuld met de namen van de andere ninja's en mentoren. Deze knop mag ook *in* de 'deelnemers' div staan, zodat de namen en de knop mooi bij elkaar staan.

![Voorbeeld app](images/voorbeeld-app.png)

### HTML in berichten

Wat de ninja-chat zo bijzonder maakt, is dat je HTML in je berichten kan gebruiken. Type maar eens als bericht in de chat:

> \<h1\>Hallo wereld!\<h1\>

Zoals eerder gezegd, is h1 een blokje zoals de div. Maar niet elke HTML code is een eigen blokje. Je kan ook HTML gebruiken om een woord of meerdere woorden op te maken. Type dit als bericht in de chat:

> Hier is woord \<strong\>dikgedrukt\</strong\> en twee woorden \<em\>schuin gedrukt\</em\>!

Probeer ook andere HTML code die je hebt geleerd in je berichten. Alles mag!

### Afbeeldingen

Het mooiste HTML blokje hebben we bewaard voor het laatst: je kan plaatjes zien in je app!

> \<img src="coderdojo.png"\>

Het plaatje is erg groot, eigenlijk te groot om mooi in de app te passen. Dit is makkelijk op te lossen door een width (= breedte) en een height (= hoogte) bij te voegen:

> \<img src="coderdojo.png" width="32" height="32"\>

Net als een input blokje, hoeft de img niet afgesloten te worden. De link voor het plaatje schrijf je in *src=""*. We gebruiken nu de bijgesloten coderdojo.png als voorbeeld, maar het kan elk plaatje zijn wat je maar wilt.

Zo kies je je eigen plaatjes:

- Zoek op internet een plaatje dat je in de app wilt hebben.
- Klik met rechtermuisknop op het plaatje en selecteer *"afbeeldingsadres kopi&euml;ren"*.
- Type een nieuw *img* blok in je index.html en ze je cursor in de aanhalingstekens van de *src*.
- Gebruik rechtermuisknop en klik op plakken, of type CTRL-V om te plakken.
- Sla op en bekijk je plaatje in de app.

*Tip:* Op deze manier kun je ook plaatjes in je chat berichten plaatsen.

## Stijl (CSS)

Je weet nu hoe je HTML blokjes kan plaatsen en je weet hoe je die een class naam kan geven. Die class namen gaan we nu gebruiken om ze te *stylen*: je kan helemaal veranderen hoe ze eruit zien!

Voor dit hoofdstuk werk je voornamelijk in het bestand *basic-chat.css*.

### Kleuren en lettertypes

Laten we eerst kleuren aanpassen:

- Zoek het div blokje 'midden' in de Developers Tools, gebruik eventueel Inspect Element op de gele achtergrond.
- Rechts zie je een tabblad *"Styles"*, hier staan alle CSS regels voor dit blokje. Schrik niet, het zijn er veel!
- Zoek de regel *background-color: lightyellow* (TODO: screenshot met een pijl ofzo).
- Klik op het woord *lightyellow* en druk op backspace.
- De browser toont al een lijst van kleuren, klik of type *cadetblue*.
- Zie hoe de kleur van het midden blok is veranderd!
- Verander van andere blokjes ook de background-color. Probeer verschillende kleuren uit.

De kleuren die je nu in stelt worden nog niet opgeslagen. De volgende keer dat je refresht is alles weer terug naar hoe het was.

#### Styling opslaan

Dit is hoe je je kleuren kan opslaan:

- Noteer of kopieer de naam van de kleur die je wilt opslaan.
- Je kunt ook een kleur kiezen op deze website: [csscolornames.com](http://csscolornames.com/)
- Open de *basic-chat.css*.
- Zoek de regel *.midden {*, hier staan de stijl regels voor het midden blok.
- Verander de background-color in een kleur naar keuze en sla het bestand op.
- Refresh je browser en zie de kleur die je hebt gekozen in het midden blok.

Op deze manier kun je alle achtergrond kleuren instellen die je wilt. Zoek de andere onderdelen van je app op in het CSS bestand en geef ze een kleur die je leuk vindt.

#### Tekst

Je kunt ook teksten er anders uit laten zien. Voeg deze regels eens toe, bijvoorbeeld bij .bericht:

> color: darkred;  
> font-family: 'Indie Flower', cursive;

*color* verandert de kleur van de tekst. Je kunt dezelfde kleuren gebruiken als voor *background-color*.  
*font-family* verandert het lettertype. Kun je ontdekken welk lettertype nog meer wordt gebruikt in de app?

> TODO: screenshots en laat de kinderen die na maken.

### Vormen en randen

> TODO: laat de kinderen de flex afmetingen aanpassen en presenteer de CSS opdrachten voor border en padding. Presenteer ook de border-radius optie.

> TODO: screenshots en laat de kinderen die na maken.

### Styling in berichten

> TODO: beschrijf hoe inline styling werkt en laat de kinderen gestylde berichten naar elkaar sturen.

## Scripts (JavaScript)

Nu dat je een complete app hebt en zelf heb bepaald hoe het eruit ziet, gaan we een kijkje onder de motorkap nemen: hoe worden de berichten verstuurd en ontvangen?  
Voor dit hoofdstuk werk je in het bestand *basic-chat.js*.

### Javascript: de basis

> TODO: laat de kinderen in de console wat basale javascript uitproberen: vestuur een bericht via de console, laat ze het kanaal instellen op basis van een +1 berekening.

### Functies en parameters

> TODO: laat de kinderen een functie schrijven, waarmee ze een bericht ontvangen en die loggen in de console.

### Je eigen bot

> TODO: Gebruik Regex en ifjes om berichten te herkennen en er automatisch op te reageren.

> TODO: opdrachten zoals automatische kanaalwissel of getimede ping/pong berichten.


{{< licentie rel="http://creativecommons.org/licenses/by-nc-sa/4.0/">}}
