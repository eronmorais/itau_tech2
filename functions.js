function ValidarDados() {
    if (document.getElementById("nome").value == "" || 
        document.getElementById("cpf").value == "" ||
        document.getElementById("rua").value == "" ||
        document.getElementById("numero").value == "" ||
        document.getElementById("celular").value == "") 
        {
            alert("Favor preencher os campos obrigatórios.");
            return false;
    }
    else{
        if (!ValidarCPF(document.getElementById('cpf').value )) {
            return false;
        }
        else
        {
            alert('Formulário enviado com sucesso!');
            return true;
        }
    }
}

function replaceAll(string, token, newtoken) {
    if(token!=newtoken)
    while(string.indexOf(token) > -1) {
        string = string.replace(token, newtoken);
    }
    return string;
}

function ValidarCPF(c) {
    var c = replaceAll(c, '.', '')
    c = replaceAll(c, '-', '');
    var i;
    s = c;
    var c = s.substr(0,9);
    var dv = s.substr(9,2);
    var d1 = 0;
    var v = false;

    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(10-i);
    }
    if (d1 == 0){
        alert("CPF Inválido")
        v = true;
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){
        alert("CPF Inválido")
        v = true;
        return false;
    }

    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(11-i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1){
        alert("CPF Inválido")
        v = true;
        return false;
    }
    if (!v) {
        //alert(c + "CPF Válido")
        return true;
    }
}
