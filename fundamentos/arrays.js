const valores = [7.7, 8.9, 4.3, 9.3]
console.log(valores[0], valores[3])
console.log(valores[4]) //posição 4 não esta definida 'undefined'

valores[4] = 10
console.log(valores)
console.log(valores.length) //tamanho do array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retira o ultimo elemento do array
delete valores[0] //retira elemento do array conforme indice
console.log(valores)

console.log(typeof valores) // um array é do tipo object