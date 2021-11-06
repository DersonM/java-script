let n = document.querySelector('input#n1')
let l = document.querySelector('select#lista')
let r = document.querySelector('div#res')
let valores = []

function isnum(nu) {
    if(Number(nu) >= 1 && Number(nu) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(nu, l) {
    if (l.indexOf(Number(nu)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isnum(n.value) && !inLista(n.value, valores)) {
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text= `Valor ${n.value} adicionado.`
        l.appendChild(item)
        r.innerHTML = ''
    } else {
        window.alert('Valor inválidado ou já encontrou na lista.')
    }
    n.value = ''
    n.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        r.innerHTML =''
        r.innerHTML += `<p>Ao todo, temos ${tot} número cadastrados.</p>`
        r.innerHTML += `<p>O maior valor informado foi ${maior}.</P>`
        r.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        r.innerHTML += `<p>Todos os valores somados, temos ${soma}.</p>`
        r.innerHTML += `<p>A media dos valores digitados é ${media}. </p>`
    }
    
}