function limpa_formulario_cep(){
    document.getElementById("cep").value="";
    document.getElementById("rua").value="";
    document.getElementById("bairro").value="";
    document.getElementById("cidade").value="";
    document.getElementById("uf").value="";

}
function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("rua").value=(conteudo.logradouro);
        document.getElementById("bairro").value= (conteudo.bairro);
        document.getElementById("cidade").value=(conteudo.cidade);
        document.getElementById("uf").value=(conteudo.uf);

    }
    else{
        limpa_formulario_cep();
        alert("Cep não encontrado");
    }
}  
function pesquisacep(valor){
    //variavel Cep para confirmar se os dados estão corretos.
    var cep = valor.replace(/\D/g,'');
    if(cep !=""){
        // Função para validar o cep, necessariamente o cep precisa ter 8 números
        // e um caracter especial
        var validacep = /[0-9]{8}$/;
        if(validacep.test(cep)){
            document.getElementById("cep").value="...";
            document.getElementById("rua").value="...";
            document.getElementById("bairro").value="...";
            document.getElementById("cidade").value="...";
            document.getElementById("uf").value="...";

            var script = document.createElement('script');
            script.src = 'https//viacep.com.br/ws/'+ cep +'/json/?callback=meu_callback';
            document.body.appendChild(script)

        }
      else{
        limpa_formulario_cep();
        alert("insere um Cep valido ai namoral")
      }  
    }

    else{
        limpa_formulario_cep();

    }}
    
