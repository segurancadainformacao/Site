function funcao(valor){


    switch(valor){
        case "1":alert("Página 1");
        break;
        case "2":alert("Página 2");
        break;
        case "3":alert("Página 3");
        break;
        default:
            alert("Nenhuma das Opções!");
    }
}

function Enviar(valor){

    switch(valor){
        case "1":alert(" Seus dados foram enviados com sucesso! ");
        document.getElementById("nome").value=""
        document.getElementById("tel").value=""
        document.getElementById("email").value=""
        break;
    }
}
function limpar(){

}