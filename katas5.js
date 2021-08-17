// implemente aqui as funções de teste
//1.Escreva duas funções de teste unitário chamadas testReverseString1 e testReverseString2. Em seguida, escreva uma função chamada reverseString que inverte uma string.
const testReverseString1 = () => {
    let result = reverseString("abcd")
    let expected = "dcba"
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
testReverseString1()
const testReverseString2 = () => {
    let result = reverseString("123456789")
    let expected = "987654321"
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
testReverseString2()
function reverseString(string){
    result = ""
    for (let i = string.length-1; i>=0; i--){
        result = result + string[i]
    }
    return result
}

// 2.Escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2. Em seguida, escreva uma função chamada reverseSentence que inverte uma frase.Ex:   
// >"bob likes dogs" retorna "dogs likes bob".

const testReverseSentence1 = () => {
    let result = reverseSentence("bob ama cachorros")
    let expected = "cachorros ama bob"
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
const testReverseSentence2 = () => {
    let result = reverseSentence("criando teste aleatorio")
    let expected = "aleatorio criando teste"
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}

function reverseSentence(string) {
    let result = []
    let split = string.split(" ")
    for (let i = split.length-1; i>=0; i--){
        result.push(split[i])
    }
    return result.join(" ")
}

// 3.Escreva duas funções de teste unitário chamadas testMinimumValue1 e testMinimumValue2. Em seguida, escreva uma função chamada minimumValue que encontra o valor mínimo de um array.

const testMinimumValue1 = () => {
    let result = minimumValue([4, 3, 2, 1, 5])
    let expected = 1
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
} 
const testMinimumValue2 = () => {
    let result = minimumValue([10, 20, 5, 8, 15])
    let expected = 5
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
} 
function minimumValue(arr) {
    result = arr.sort((a, b) => a-b)
    return result[0]
}

//4.Escreva duas funções de teste unitário chamadas testMaximumValue1 e testMaximumValue2. Em seguida, escreva uma função chamada maximumValue que encontra o valor máximo de um array.

const testMaximumValue1 = () => {
    let result = maximumValue([4, 3, 2, 1, 5])
    let expected = 5
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
} 
const testMaximumValue2 = () => {
    let result = maximumValue([10, 20, 5, 8, 15])
    let expected = 20
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
} 
function maximumValue(arr) {
    result = arr.sort((a, b) => b-a)
    return result[0]
}

//5.Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e testCalculateRemainder2. Em seguida, escreva uma função chamada calculateRemainder que calcula o resto de uma determinada divisão.

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(15 , 3)
    let expected = 0
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
const testCalculateRemainder2 = () => {
    let result = calculateRemainder(15 , 2)
    let expected = 1
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
function calculateRemainder(numero, dividido){
    resto = numero%dividido
    
    return resto
}

//6.Escreva duas funções de teste unitário chamadas testDistinctValues1 e testDistinctValues2. Em seguida, escreva uma função chamada distinctValues que retorna valores distintos de uma lista. Ex: 

const testDistinctValues1 = () => {
    let result = distinctValues("1 3 5 3 7 3 1 1 5" )
    let expected = "1 3 5 7"
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
const testDistinctValues2 = () => {
    let result = distinctValues("2 4 6 5 9 6 2 0 9")
    let expected = "2 4 6 5 9 0"
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}

function distinctValues(string) {
    let arrString = string.split(" ")
    let result = new Set(arrString)
    result = [...result].join(" ")
    return result
}


// 7.Escreva duas funções de teste unitário chamadas testCountValues1 e testCountValues2. Em seguida, escreva uma função chamada countValues que retorna os valores de uma lista e suas ocorrências.Ex:   

const testCountValues1 = () => {
    let result = countValues("1 3 5 3 7 3 1 1 5")
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
testCountValues1()

const testCountValues2 = () => {
    let result = countValues("2 4 6 5 9 6 2 0 9")
    let expected = "2(2) 4(1) 6(2) 5(1) 0(1) 9(1)"
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}

function countValues(string) {
    let result = []
    string = string.split(" ")
    let countValue = string.reduce((acc, valorAtual) => {
        if (valorAtual in acc){
            acc[valorAtual]++
        }
        else{
            acc[valorAtual] = 1
        }
        return acc
    }, {})
    for ( let prop in countValue){
        result.push(`${prop}(${countValue[prop]})`) 
    }
    result = result.join(" ")

    return  result
}

// 8.Escreva duas funções de teste unitário chamadas testEvaluateExpression1 e testEvaluateExpression2. Em seguida, escreva uma função chamada evaluateExpression que receberá dois parâmetros:

const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a - b + c + d", {a: 1, b: 7, c: 3, d: 14})
    let expected = 11
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})
    let expected = -3
    console.assert(result === expected, `esperado  ${expected}, obtido: ${result}`)
}
function evaluateExpression(exprecion, values) {
    exprecion = exprecion.split(" ")
    let result = 0
    let a = values.a
    let b = values.b
    let c = values.c
    let d = values.d

    if (exprecion[1] == "+"){
        result += a+b
    }
    if (exprecion[1]== "-"){
        result += a-b
    }
    if (exprecion[3] == "+"){
        result += c
    }
    if (exprecion[3] == "-"){
        result -= c
    }
    if (exprecion[5] == "+"){
        result += d
    }
    if (exprecion[5] == "-"){
        result -= d
    }

    return result

}