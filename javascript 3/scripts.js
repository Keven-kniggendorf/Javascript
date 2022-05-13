/*
    Prototype

    * prototype-based language
    *prototype chain
    *__proto__
*/
// a questão da prototipagem engloba todo o js, ou seja, todas se nao a maioria das palavras são prototipadas para melhhor usuabilidade de quem coda, e aprendendo isto se pode mexer em qualquer coisa com js, é só por um '.' na frente do valor.

//manipulando strings e numeros

//transformar string em numero e numero em string

let word = "paralelepipedo"
console.log(word.length)

let number = 1234
console.log(String(number).length)



//agora exercitando a questão de arrays

let techs = ["html", "css", "js"]

//adicionar um intem no fim
console.log(techs.push("nodejs"))
//adicionar no começo
techs.unshift("sql")
//remover no fim
techs.pop()
//remover no começo
techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))

//remover 1 ou mais items em qualquer posição do array
//techs.splice(1, 1) ou se quiser selecionar qual posição eu posso colocar qual posição eu queo depois da virgula e antes dela eu seleciono qual eu quero remover.

//encontrar a posição de um elemento no array
let index = techs.indexOf('css') // este é para remover um em especifico, mas tem que colocar o nome exatamente como é.
console.log(techs)
