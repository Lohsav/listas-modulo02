//1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário

// Solicitar as infos de comprimento e largura
let comprimento = parseFloat(prompt("Digite o comprimento do retângulo:"));
let largura = parseFloat(prompt("Digite a largura do retângulo:"));

// Calcular a área do retângulo
let area = comprimento * largura;

// Exibir o resultado do cálculo acima
console.log("A área do retângulo é: " + area);


//2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%)

// Solicitar um número ao usuário
let numero = parseInt(prompt("Digite um número:"));

// Verificar se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log(numero + " é um número par.");
} else {
    console.log(numero + " é um número ímpar.");
}

//3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

function verificaPalavraJavaScript(texto) {
    if (texto.includes("JavaScript")) {
        return true;
    } else {
        return false;
    }
}

// Solicitar ao usuário uma string
let input = prompt("Digite uma string:");

// Funçao e exibir o resultado
if (verificaPalavraJavaScript(input)) {
    console.log("A string contém a palavra 'JavaScript'.");
} else {
    console.log("A string não contém a palavra 'JavaScript'.");
}

//4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas

// Solicitar ao usuário duas strings
let string1 = prompt("Digite a primeira string:");
let string2 = prompt("Digite a segunda string:");

// Converter as strings para letras minúsc
let lowerCaseString1 = string1.toLowerCase();
let lowerCaseString2 = string2.toLowerCase();

// Verificar se as strings são iguais
if (lowerCaseString1 === lowerCaseString2) {
    console.log("As strings são iguais, ignorando maiúsculas e minúsculas");
} else {
    console.log("As strings são diferentes");
}

//5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

// Exemplos de listas para concatenar
let Lista1 = [1, 2, 3];
let Lista2 = [4, 5, 6];

// Chamar função para concatenar as listas
let combinaLista = (Lista1, Lista2) => Lista1 + "," + Lista2;

console.log(combinaLista(Lista1, Lista2));


//6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length. 

// Array de valores
let valores = [5, 10, 15, 20];

// Calcular média dos valores no array
let soma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
let media = soma / valores.length;

// Exibir a média
console.log("A média dos valores é:", media);

//7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo"

function obterDataHoraAtual() {
    const agora = new Date();
    const dia = agora.getDate().toString().padStart(2, "0");
    const mes = (agora.getMonth() + 1).toString().padStart(2, "0");
    const ano = agora.getFullYear();
    
    const hora = agora.getHours().toString().padStart(2, "0");
    const minuto = agora.getMinutes().toString().padStart(2, "0");
    const segundo = agora.getSeconds().toString().padStart(2, "0");
    
    const formatoLegivel = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    return formatoLegivel;
}

// Chamar função e exibir a data e hora atual formatada
console.log(obterDataHoraAtual());

//8- Implemente um programa que encontre o maior valor em um array usando a função Math.max(). 

// Array de valores
let valores = [17, 2, 21, 34, 35, 42];

// Encontra o maior valor usando Math.max()
let maiorValor = Math.max(...valores);

// Exibe o maior valor
console.log(maiorValor);


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos

// Definir os valores mínimo e máximo
let valorMinimo = 10;
let valorMaximo = 20;

// Chamaar função para gerar um número aleatório entre valorMinimo e valorMaximo
let numeroAleatorio = gerarNumeroAleatorio(valorMinimo, valorMaximo);

// Exibir o número aleatório gerado
console.log(numeroAleatorio);


// 10- Crie um programa js que verifique se um número dado pelo usuário é um número primo usando uma função.

function ehNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Solicitar um número ao usuário
let numero = parseInt(prompt("Digite um número:"));

// Chamar função para verificar se é um número primo e exibir resultadoo
if (ehNumeroPrimo(numero)) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}

//11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado

// Declaração das variáveis
let variavelString = "5";
let variavelNumero = 2;

// Multiplicação das variáveis
let resultado = variavelString * variavelNumero;

// Exibição do resultado
console.log(resultado);

//Explicação: o operador de multiplicação é usado para valores numéricos. Pra multiplicar um string com um número, primeiro precisa converter string para numero antes de executar a operação. Assim, quando realiza 'variavelString * variavelNumero', JS já converte a string "5" em número inteiro antes de multiplicar por 2


//12- Converta a string "123" em um número inteiro e armazene-o em uma variável

// Convertendo a string em um número inteiro e armazenando em uma variável
let numeroInteiro = parseInt("123");

// Exibindo o valor da variável
console.log(numeroInteiro); // Saída: 123


//13-  Escreva um programa que adicione um número e uma string

// Número
let numero = 40;

// String contendo um número
let textoNumero = "25";

// Convertendo a string em um número
let numeroConvertido = parseInt(textoNumero);

// Realizando a operação de adição
let resultado = numero + numeroConvertido;

// Exibindo o resultado
console.log(resultado);

//14- Explique o resultado e discuta a coerção que ocorre

//Usei a função 'parseInt()' pra converte a string "25" em número inteiro.

//15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.

// Declaração das variáveis
let variavelNull = null;
let variavelUndefined;

// Verificando igualdade em valor e tipo
let saoIguais = (variavelNull === variavelUndefined);

// Exibindo o resultado
console.log(saoIguais); //falso pq não sao cnsiderados iguais em valor ou tipo

//16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof

function minhaFuncao() {
    console.log("Isso é uma função!");
}

let variavel = minhaFuncao;
let ehFuncao = typeof variavel === 'function';

if (ehFuncao) {
    console.log("A variável é uma função.");
} else {
    console.log("A variável não é uma função.");
}

//18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20. 

// Calcular o resultado da expressão
let resultado = (10 + 5) * 3 / 20;

// Exibir o resultado
console.log(resultado);

//19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo

function ehPositivoEImpar(numero) {
    if (numero > 0 && numero % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// Testando a função com diferentes números
console.log(ehPositivoEImpar(5));  // Saída: true (positivo e ímpar)
console.log(ehPositivoEImpar(-3)); // Saída: false (negativo)
console.log(ehPositivoEImpar(4));  // Saída: false (positivo, mas não ímpar)
console.log(ehPositivoEImpar(0));  // Saída: false (não é positivo)

//21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos). 

// Lista de membros banidos
let membrosBanidos = ["João", "Maria", "Carlos"];

function verificarPermissao(nome, idade) {
    let idadeMinima = 18;
    let estaBanido = membrosBanidos.includes(nome);

    if (idade >= idadeMinima && !estaBanido) {
        return true;
    } else {
        return false;
    }
}

// Testando a função com diferentes casos
console.log(verificarPermissao("Ana", 20));      // Saída: true (idade >= 18 e não banida)
console.log(verificarPermissao("João", 25));     // Saída: false (banido)
console.log(verificarPermissao("Carlos", 22));   // Saída: false (banido)
console.log(verificarPermissao("Mariana", 16)); // Saída: false (idade < 18)

//22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados
// Valores esperados para o login
const usuarioEsperado = "usuarioLOH";
const senhaEsperada = "senha123";

// Solicita ao usuário nome de usuário e senha
let usuarioDigitado = prompt("Digite o nome de usuário:");
let senhaDigitada = prompt("Digite a senha:");

// Verifica se o nome de usuário e senha correspondem aos valores esperados
if (usuarioDigitado === usuarioEsperado && senhaDigitada === senhaEsperada) {
    console.log("Login bem-sucedido!");
} else {
    console.log("Credenciais inválidas. Login falhou.");
}

