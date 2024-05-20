function verifica_par_impar(numero){
    if(numero % 2 == 0){
        return "par";
    }else{
        return "impar";
    }
}

function test_numero_par_impar(){
    console.log("Iniciado teste");
    resultado = verifica_par_impar(4);
    if(resultado == "par"){
        console.log("Passou teste no par");
    }else{
        console.log("falhou teste no par");
    }

    resultado = verifica_par_impar(5);
    if(resultado == "impar"){
        console.log("Passou teste no impar");
    }else{
        console.log("falhou teste no impar");
    }
}

test_numero_par_impar();