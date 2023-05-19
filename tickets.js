var readline= require('readline-sync');
var nome = ''
var sobrenome = ''
var idade = ''
var assento = ''
var assentoValido = ''
var origem = ''
var destino = ''
var origemValido = ''
var opcao = ''
var escolha = ''
var fileiraA = ''
var fileiraB = ''

console.log("+----------------- Passagens Aéreas -----------------+")
console.log("|  1 - Comprar Passagem                              |")
console.log("|  2 - Consultar Voos                                |")
console.log("|  3 - Mapa de Assento                               |")
console.log("|  4 - Emitir Ticket                                 |")
console.log("|  0 - Encerrar o programa                           |")
console.log("+----------------- Passagens Aéreas -----------------+")
opcao = readline.question("Escolha uma funcao: ")

while(opcao != 0 ){

    if(opcao == 1){
        console.log("+_________________ Passagens Aéreas _________________+")
        console.log("|  Voce esta em -> Comprar passagens                  ")
        nome = readline.question("|  Nome: ")
        sobrenome = readline.question("|  Sobrenome: ")
        idade = readline.question("|  Idade: ")
        assento = readline.question("|  Assento: ")

        assentoValido = false

        while(assentoValido == false){
            for(let index = 1; index < 13; index ++){
                if(assento == "A" + index || assento == "B" + index){
                    assentoValido = true
                }
            }
            if(assentoValido == false){
                console.log("|  Você digitou errado                 |")
                console.log("|  Tente escolher entre: A1 - A2 - A3 - A4 - A5 - A6 - A7 - A8 - A9 - A10 - A11 - A12")
                console.log("|                        B1 - B2 - B3 - B4 - B5 - B6 - B7 - B8 - B9 - B10 - B11 - B12")
                assento = readline.question("|  Assento: ")
            }
        }
        origem = readline.question("|  Origem: Presidente Prudente" )

        destino = readline.question("|  Destino: ")

            if(destino != "Gramado" && destino != "Milao" && destino != "Cancun" && destino != "Sao Paulo"){
            console.log("|  Você digitou errado")
            destino = readline.question("|  Destino: ")
        }
    


        console.log("+_________________ Passagens Aéreas _________________+")
        console.log("|  Voce esta em -> Comprar passagens                 |")
        console.log("|  *Resumo da compra*                                |")
        console.log("|  Cliente: " + nome + " " + sobrenome +            "|")
        console.log("|  Idade: " + idade +                               "|")
        console.log("|  Assento: " + assento +                           "|")
        console.log("|  Voo: Presidente Prudente" + " X " + destino +    "|")
        console.log("|  Status do Voo: Confirmado                         |")
        console.log("|                                                    |")
        console.log("|  Valor: R$3500,00                                  |" )
    }
    if(opcao == 2){
        console.log("+----------------- Passagens Aéreas -----------------+")
        console.log("|  Você está em -> Consulta de Voos                  |")
        console.log("|  Origem                 X                 Destino  |")
        console.log("+____________________________________________________+")
        console.log("|  Presidente Prudente                      Gramado  |")
        console.log("|  Presidente Prudente                        Milao  |")
        console.log("|  Presidente Prudente                    Sao Paulo  |")
        console.log("|  Presidente Prudente                       Cancun  |")
        console.log("+----------------- Passagens Aéreas -----------------+")
    }
    if(opcao == 3){
            var validarFileira = false

            console.log("+----------------- Passagens Aéreas -----------------+")
            console.log("|  Você está em -> Mapa de assentos                  |")
            console.log("+____________________________________________________+")
    
            for(var cadeira = 1; cadeira < 13; cadeira ++){
    
               var assentoA = "A" + cadeira
               var assentoB = "B" + cadeira
    
               if( assentoA == assento){
                    fileiraA += " X "
                    fileiraB += assentoB + " "
               }
               else if(assentoB == assento){
                    fileiraB += " X "
                    fileiraA += assentoA + " "
               }
               else{
                    fileiraA += assentoA + " "
                    fileiraB += assentoB + " "
               }
            }    
            console.log(fileiraA)
            console.log(fileiraB)
         
            console.log("+--------------------------------+")
    }
    if(opcao == 4){
        console.log("+----------------- Passagens Aéreas -----------------+")
        console.log("|  Você está em -> Emitir Tickets                    |")
        console.log("******************************************************")
        console.log("* Obrigado por viajar conosco!                       *")
        console.log("*  Nome: " + nome)
        console.log("* Idade: " + idade  + "              " + "Assento:" + assento)
        console.log("* Origem/Destino> Presidente Prudente -> " + destino)
        console.log("* Status do voo: Confirmado")
        console.log("*                                                    *")
        console.log("******************************************************")
    }

    opcao = readline.question("Escolha uma funcao: ")
}