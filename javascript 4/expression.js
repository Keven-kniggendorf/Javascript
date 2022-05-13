/* Expressões e Operadores

 -Expression 
 -Operators
 -Binary
 -Unary
 -Ternary

*/

let number = 1 //esta é uma expressão
//a operação é o que ocorre quando se testa o código

console.log(number + 1)//é um binário pois existe dois valores para que o operador esteja entre eles no caso o +, no caso do unario seria só se existisse um valor apenas


//*new
//*left-hand-side expression
//*criar um novo objetivo

// let name = new String('keven')
// name.surName = "kniggendorf"
// let age = new Number(23)
// console.log(name.surName, age)


// Operadores Aritiméticos 

//multiplicação
//console.log(3.2 * 5.5)

//divisão
//console.log(12 / 2)

//soma
//console.log(143432 + 2342342424)

//subtração
//console.log(3434413 - 23121)

//resto da divisão
//let remainder
//remainder = 11 % 3
//console.log(remainder)

//incremento ++ increment

//decremento -- decrement

//exponencial **

// == igual a

// != diferente de 

//condicional ?:

// OR ||

//operadores de atribuição

// assignment
//x = 1

//addition assignment
// x = x + 2 
//x+= 2

//subtraction assignment
//x -=2

//multiplication assignment
//x *= 2

//division assignment
//x /=2

// Operador condicional terário, no caso criar uma função na qual me da a informação se é falso ou verdadeiro igual ao sistema boleano porem com edição na hora da resposta.
let age = 22
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)



// Crontol flow

// if...else

let temperature = 36.5

if(temperature >= 37) {
    console.log("febre")
} else {
    console.log("saudável")
}

// switch
// Aqui se usa para o envio de informações e recebimento delas de acordo com o que esta no código.

let expression = 'a'

switch (expression) {
    case 'a':
        //código
        console.log('a')
        break
    case 'b':
        //código para a expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}

// throw, serve para provocar um erro e envia-lo para fora do seu código para ver aonde esta.

function sayMyName(name = '') {
    if (name=== '') {
        throw 'Nome é obrigatório'
    }

    console.log('depois do nome')
}

//try...catch
try{
    sayMyName()
} catch(e) {
    console.log(e)
}
console.log('após a função de erro')



// Estrutura de repetição
// for

for(let i = 0; i < 10; i++){
    console.log(i)
}

//estrutura de repetição
//while
//Normalmente o while é usado no caso de quando nao saber quando é a parada.

let i = 49587322
while(i>10){
    console.log(i)
    i++;
}