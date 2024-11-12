function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n1- SOMA (+)\n2- SUBTRAÇÃO (-)\n 3- MULTIPLICAÇÃO (*)\n 4- DIVISÃO REAL (/)\n 5- DIVISÃO INTEIRA (%)\n 6- POTENCIAÇÃO(**)'));
    if (!operacao || operacao > 6){
        alert('Erro, operação inválida');
        calculadora();
    } else{
        let n1 = Number(prompt('Insira um primeiro valor:'));
        let n2 = Number(prompt('Insira um segundo valor:'));
        let resultado;

// criando a function de soma
    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
    };
// criando a function de subtração
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
    };
// criando a function de multiplicação
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
    };
// criando a function de divisão real
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`o resto entre ${n1} / ${n2} é igual a ${resultado}`)
    };
// criando a function de divisão real
    function divisaoInt(){
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`)
    };
// criando a function de potenciação
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a {n2} é igual a ${resultado}`)
    };

// criando uma função de retornar ao início da calculadora
    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação? \n 1(sim)\n (não)');
        if (opcao==1){
            calculadora();
        }else{
            alert('Até mais, acabamos por aqui');
        }
    };

    if(operacao==1){
        soma();
    }else if(operacao==2){
        subtracao();
    }else if(operacao==3){
        multiplicacao();
    }else if(operacao==4){
        divisaoReal();
    }else if(operacao==5){
        divisaoInt();
    }else if(operacao==6){
        potenciacao();
    }
    }

} 
calculadora();