function decimal_octal(numero){    
    if(numero < 8){
        return numero.toString();
    }
    octal = "";
    while(numero > 7){
        resto = numero % 8;
        octal = resto.toString()+octal;
        numero = Math.floor(numero/8);
    }
    
    return numero.toString()+octal;

}

function teste_decimal_octal(){
    console.log("iniciando teste");
    resultado = decimal_octal(64);
    if(resultado == "100"){
        console.log("Passou o teste no decimal 64 e octal 100");
    }else{
        console.log("Falhou o teste no decimal 64 e octal 100");
    }
    resultado = decimal_octal(0);
    if(resultado == "0"){
        console.log("Passou o teste no decimal 0 e octal 0");
    }else{
        console.log("Falhou o teste no decimal 0 e octal 0");
    }
}
teste_decimal_octal();