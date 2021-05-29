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
- Beweeg de muis over de groene, gele en grijze balken in de app.

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

> \<textarea class="berichtInput"\>Type hier...\</textarea\>

> TODO: screenshot.

Je kunt nu tekst typen. Als je op enter drukt, wordt je bericht verstuurd!

Meer onderdelen
===============
> TODO: opsommen van onderdelen, waarvan de kids zelf kunnen bepalen waar het op het scherm komt.

HTML in berichten
=================
> TODO: laat kinderen \<em\> en \<strong> en \<h1\> blocks in hun berichten gebruiken.

Afbeeldingen
============
> TODO: laat kids hun app opleuken met afbeeldingen, beschrijf ook hoe afbeeldingen in de berichten kunnen worden gevoegd.


[Volgende: stijl](stijl.md)
