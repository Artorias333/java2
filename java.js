
function mascara_telefone() {

    var tel = document.getElementById("telefone").value
    console.log(tel)
    tel = tel.slice(0, 14)
    console.log(tel)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)
    console.log(tel)


    var tel_formato = document.getElementById("telefone").value
    if (tel_formato[0] != "(") {
        if (tel_formato[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formato[0];
        }
    }

    if (tel_formato[3] != ")") {
        if (tel_formato[3] != undefined) {
            document.getElementById("telefone").value = tel_formato.slice(0, 3) + ")" + tel_formato[3]
        }
    }

    if (tel_formato[9] != "-") {
        if (tel_formato[9] != undefined) {
            document.getElementById("telefone").value = tel_formato.slice(0, 9) + "-" + tel_formato[9]
        }
    }
    localStorage.setItem("Tel", tel_formato)
}



    
      
        
function mascara_cpf()
{ var cpf_formato = document.getElementById("cpf").value
    if (cpf_formato[3]!=".")
    {
        if (cpf_formato[3]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formato.slice(0,3)+"."+cpf_formato[3];
        }
    }

    if (cpf_formato[7]!=".")
    {
        if(cpf_formato[7]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formato.slice(0,7)+"."+cpf_formato[7]
        }
    }
    if (cpf_formato[11]!="-")
    {
        if(cpf_formato[11]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formato.slice(0,11)+"-"+cpf_formato[11]
        }
    }
    localStorage.setItem("cp", cpf_formato)

}    

function gravanome(){
    const nombre = document.getElementById("name").value
    console.log(nombre)
    localStorage.setItem ("nome", nombre)
}

localStorage.setItem("nombre", name)

function gravaemail(){
    const emal = document.getElementById("email").value
    console.log(emal)
    localStorage.setItem ("emali", emal)
}
function gravasenha(){
    const sema = document.getElementById("senha").value
    console.log(sema)
    localStorage.setItem ("sena", sema)
}



function enviado() {
    alert("Informação Enviada!");
}
const abrirmodal = document.querySelector("#open-modal");

const fecharmodal = document.querySelector("#fechar");

const modal = document.querySelector("#modal");

const fade = document.querySelector("#modal-fade");




function abrirFechar(){

   //fade.classList.toggle("show")

    modal.showModal()

  // modal.classList.remove("hide")

   //fade.classList.remove("hide")

}

fecharmodal.addEventListener("click", () => {
  modal.close();})


/*fade.addEventListener("click",()=>{

      fade.classList.toggle("show")

    modal.classList.toggle("show")

  //  modal.classList.add("hide")

 //  fade.classList.add("hide")




})*/
