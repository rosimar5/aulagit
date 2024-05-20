function decimal_binario(numero) {
    if (numero == 0) {
        return "0";
    }
    binario = "";
    while (numero > 0) {
        resto = numero % 2;
        binario = resto.toString() + binario;
        numero = Math.floor(numero / 2);
    }
    return binario;
}
function teste_decimal_binario() {
    console.log("iniciando teste");

    resultado = decimal_binario(25);

    if (resultado == "10001") {
        console.log("Passou no teste no decimal 25 e binário 11001");
    }
    else {
        console.log("falhou o teste no decimal 25 e biário 11001");
    }

    resultado = decimal_binario(0);

    if (resultado == "10001") {
        console.log("Passou no teste no decimal 25 e binário 11001");
    }
    else {
        console.log("falhou o teste no decimal 25 e biário 11001");
    }

}
teste_decimal_binario();