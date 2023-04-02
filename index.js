const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('min')
const segundo = document.getElementById('seg')

const lancamento = "01 dec 2023"

function countdown() {
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (datalanc - hoje) / 1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segTotal / 60) % 60
    const finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = finalDias + "D"
    hora.innerHTML = formatoTempo(finalHoras) + "H"
    minuto.innerHTML = formatoTempo(finalMinutos) + "M"
    segundo.innerHTML = formatoTempo(finalSegundos) + "S"
}

function formatoTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo
}

countdown()
setInterval(countdown, 1000)