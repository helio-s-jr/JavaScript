//Primeiro exercício - Estrutura de dados

let nome = "Helio Junior"
console.log(nome)

let numero = 23
console.log(numero)

let ano = 2022
console.log(ano - numero)

console.log("Estou mexendo no console.log")

let quartaFeira = false
console.log(quartaFeira)

console.log(typeof quartaFeira)

//Segundo exercício - If-Else

let idade = 18

if(idade >=18){
    console.log("Pode chegar depois de 22:00")
}else{
    console.log("Deve chegar até 22:00")
}

let human = true

if(idade >=18 && human === true){
    console.log("Você é um humano adulto")
}else{
    console.log("Você é humano em desenvolvimento")
}
console.log(human)

let mes = "Janeiro"

if(mes === "Janeiro" || mes === "Dezembro"){
    console.log("Yep, Dependendo do dia, é do melhor signo do zodíaco... Aquário")
}else{
    console.log("É... Não deu sorte, seu aniversário não é em Janeiro")
}

let meuNome = "Helio"

if(meuNome[0] === "R"){
    console.log("Sim, seu nome inicia com a letra R")
}else{
    console.log("Não, nome não inicia com R")
}

let sobreNome = "Junior"

if(sobreNome.lenght >= 6 || meuNome[0] === "E"){
    console.log("Nos conformes da requisição exigidas")
}else{
    console.log("Não está em conformidade com as requisições exigidas")
}

//Terceiro exercício - For-While

for(let numerar = 1; numerar <=10; numerar++){
    console.log("numeracao")
}

let contagem = 10

while(contagem >=1){
    console.log(contagem--)
}

for(let i = 1; i <= 100; i +=2){
    console.log(i)
}

for(let i = 0; i <= 100; i +=2){
    console.log(i)
}

//Treinando as contagens com While

let numeroo = 1

while(numeroo <=100){
    console.log(numeroo)
    numeroo +=2
}

let numeru = 0

while(numeru <=100){
    console.log(numeru)
    numeru +=2
}

//Quarto exercício - Function

function mensagem(mensagem){
    console.log(`A mensagem é: ${mensagem}`)
}

mensagem("Chorão, cadê meus dias de glória?")

function nomeMeu(nomeMeu){
    console.log(`Bem-Vindo(a), ${nomeMeu}!`)
}

nomeMeu("Helio Junior")


function about(nomeMeu, idade, estilo){
    console.log(`Meu nome é: ${nomeMeu}, tenho ${idade} anos e gosto de ${estilo}`)
}

about("Helio", 34, "Rap")

function audioVisual(filme, musica){
    console.log(`Meu filme favorito é ${filme} e minha musica favorita é ${musica}`)
}

audioVisual("Deadpool", "Coladin - Hotelo")

function contando(x){
    return x * 3
}

console.log(contando(5))