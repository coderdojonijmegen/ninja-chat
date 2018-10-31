var serverIpAdresEnPoort = "http://127.0.0.1:3000";


var socket = io(serverIpAdresEnPoort, { forceNew: true });

function zetNaam(input) {
    var naam = input.target.value
    socket.emit('zetNaam', naam)
}

function zetKanaal(input) {
    var kanaal = input.target.value
    socket.emit('zetKanaal', kanaal)
}

function stuurBericht() {
    var berichtInput = $("#berichtInput")
    var bericht = berichtInput.val()
    if (bericht != "") {
      socket.emit('maakBericht', bericht)
      berichtInput.val("")
    }
}

function checkEnter(event) {
    if (event.which === 13) {
        stuurBericht()
    }
}

function toonNaam(naam) {
    $("#naamInput").val(naam)
}

function toonKanaal(kanaal) {
    $("#kanaal").val(kanaal)
}

function toonBericht(bericht) {
    var div = $('<div>').html(berichtNaarHtml(bericht))
    $("main").append(div)
}

function berichtNaarHtml(bericht) {
    var gebruiker = $("#naamInput").val()
    var class_naam = "bericht"

    if (gebruiker === bericht.gebruiker) {
        class_naam = "eigen bericht"
    }

    return '<p class="' + class_naam + '"><i>'
        + bericht.gebruiker + ' ' + bericht.tijdstip
        + '</i><br><span>' + bericht.tekst + '</span></p>'
}

function begin() {
    $("#naamInput").change(zetNaam)
    $("#kanaal").change(zetKanaal)
    $(".stuurBericht").click(stuurBericht)
    $("#berichtInput").keypress(checkEnter)

    socket.on('krijgKanaal', toonKanaal)
    socket.on('krijgNaam', toonNaam)
    socket.on('krijgBericht', toonBericht)
}

$(begin)
