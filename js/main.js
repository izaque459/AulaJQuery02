
function consultaCEP(){
    let cep = document.getElementById("CEP").value
    let url = "http://viacep.com.br/ws/"+cep+"/json/"

    $.ajax({
        url: url ,
        type: "GET" ,
        success:function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro)
            $("#titulo_cep").html("CEP "+response.cep)

           // document.getElementById("logradouro").innerHTML= response.logradouro
            document.getElementById("bairro").innerHTML    = response.bairro
            document.getElementById("localidade").innerHTML= response.localidade
            document.getElementById("UF").innerHTML        = response.uf

        }
    
    })

}
/*
()=>{
    $(".cep").hide()
}
*/
