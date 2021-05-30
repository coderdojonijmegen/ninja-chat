Structuur (HTML)
================
Deze instructies bestaan uit drie hoofdstukken:
1. Structuur (HTML) - hier gaan we de app onderdelen in elkaar zetten.
2. Stijl (CSS) - hier gaan we veranderen hoe de onderdelen eruit zien.
3. Scripts (Javascript) - hier gaan we veranderen hoe de app werkt.

Bij elk hoofdstuk hoort een bestand. Voor dit hoofdstuk werken we in de *index.html*.

HTML: blokjes en tekst
======================
In het begin zul je nog niet alles snappen wat in de bestanden staat. Dat is ok&egrave;! Laten we eerst rond kijken en dan gaan we onze eigen onderdelen toevoegen:

- Open de app en de developers tools (zie [Benodigdheden](benodigdheden.md)).
- Klik op Inspect Element *(TODO: inline afbeelding van de knop)*.
- Beweeg de muis over de groene, gele en grijze balken in de appkv.

Je ziet de 'div' elementen in de Developers Tools oplichten. Dat zijn de 'blokjes' waarmee je begint. Een paar dingen moet je weten over die blokjes:

- Een blok begint met **\<div\>** en eindigt met **\</div\>**.
- Met **class=""** krijgt het blokje een class naam.
- De class wordt in de CSS (hoofdstuk 2) gebruikt om te bepalen hoe het eruit ziet.
- De class wordt ook in de Javascript (hoofdstuk 3) gebruikt om te bepalen hoe het werkt.
- Blokjes kunnen *in* elkaar en blokjes kunnen *naast* elkaar.

HTML tekst
----------
In de HTML kun je tekst typen. Afhankelijk van waar je die tekst typt, komt het ergens anders op het scherm (of misschien zelfs helemaal niet).

- Zoek de div blokjes op in de index.html, het zijn er vier.
- De 'container' class zorgt ervoor dat de blokjes die er in zitten onder elkaar komen.
- In de container zie je drie andere divs. Kun je raden waar die voor zijn?
- Schrijf wat tekst, bijvoorbeeld "Hallo wereld!", in het blokje met de class 'midden'.
- Ververs je pagina. Staat je tekst in het middelste blokje? Zo niet, dan is er misschien iets mis gegaan.
- Probeer ook tekst te typen in de boven en onder blokjes. Verschijnt die tekst ook op de juiste plek in je scherm?
- Wat gebeurt er als je tekst typt in de container, maar *buiten* de boven/midden/onder blokjes?
- Wat gebeurt er als je tekst typt *buiten* de container (maar wel in de **\<body\>**)?

> TODO: screenshot als voorbeeld.

Chat berichten
==============
Nu dat je snapt hoe de HTML blokjes werken, kun je je eigen blokjes toe voegen.  
Voeg deze code in, in het blokje *"midden"*:

> \<div class="berichten"\>\</div\>

Ververs de pagina. Als het goed is, verschijnen nu de chat berichten op je scherm! Zo makkelijk kan het zijn om onderdelen toe te voegen.

> TODO: screenshot.

Berichten typen
---------------
We willen natuurlijk ook berichten kunnen sturen.  
Voeg deze code in, in het blokje *"onder"*:

> \<div class="berichtInput"\>Type hier...\</div\>

Als het goed is, zie je *"Type hier..."* op je scherm, maar als je daar klikt, kun je nog niet typen. Dat komt, omdat *div* daar niet voor is gemaakt. Verander het woord *div* in *textarea*, en ineens ziet het er heel anders uit:

> \<textarea class="berichtInput" placeholder="Type hier..."\>\</textarea\>

> TODO: screenshot.

Je kunt nu tekst typen. Als je op enter drukt, wordt je bericht verstuurd!  

Meer onderdelen
===============
Laten we nog wat meer onderdelen toevoegen. Kopieer deze blokjes en plak ze in de boven/midden/onder blokjes. Je mag zelf bepalen waar deze blokjes in je app komen en in welke volgorde. Je kan ook ons voorbeeld onderin deze pagina na maken.

**Tips:**
- Probeer niet alles tegelijk te doen. Plak een blokje in de index.html, sla op en ververs de pagina in chrome.
- Staat een blokje niet op de plek die je had verwacht? Gebruik de Inspect Element knop om te ontdekken wat er mis is gegaan!
- De boven/midden/onder classes heb elk hun eigen manier van blokjes plaatsen. Hier gaan we in het volgende hoofdstuk verder op in.
- Verander teksten en de type blokjes, je kan er vanalles van maken. Zolang de 'class' klopt, zou het moeten blijven werken.

De blokjes
----------

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

> TODO: screenshot van de voorbeeld app.

HTML in berichten
=================
Wat de ninja-chat zo bijzonder maakt, is dat je HTML in je berichten kan gebruiken. Type maar eens als bericht in de chat:

> \<h1\>Hallo wereld!\<h1\>

Zoals eerder gezegd, is h1 een blokje zoals de div. Maar niet elke HTML code is een eigen blokje. Je kan ook HTML gebruiken om een woord of meerdere woorden op te maken. Type dit als bericht in de chat:

> Hier is woord \<strong\>dikgedrukt\</strong\> en twee woorden \<em\>schuin gedrukt\</em\>!

Probeer ook andere HTML code die je hebt geleerd in je berichten. Alles mag!

Afbeeldingen
============
Het mooiste HTML blokje hebben we bewaard voor het laatst: je kan plaatjes zien in je app!

> \<img src="coderdojo.png"\>

Net als een input blokje, hoeft de img niet afgesloten te worden. De link voor het plaatje schrijf je in *src=""*. We gebruiken nu de bijgesloten coderdojo.png als voorbeeld, maar het kan elk plaatje zijn wat je maar wilt.

Zo kies je je eigen plaatjes:

- Zoek op internet een plaatje dat je in de app wilt hebben.
- Klik met rechtermuisknop op het plaatje en selecteer *"afbeeldingsadres kopi&euml;ren"*.
- Type een nieuw *img* blok in je index.html en ze je cursor in de aanhalingstekens van de *src*.
- Gebruik rechtermuisknop en klik op plakken, of type CTRL-V om te plakken.
- Sla op en bekijk je plaatje in de app.

*Tip:* Op deze manier kun je ook plaatjes in je chat berichten plaatsen.


[Volgende: stijl](stijl.md)
