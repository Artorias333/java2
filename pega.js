addEventListener("DOMContentLoaded",()=> {
    var telecebe = localStorage.getItem("Tel")
    document.getElementById("telefone").value = telecebe
})
addEventListener("DOMContentLoaded",()=> {
    var cpcece = localStorage.getItem("cp")
    document.getElementById("cpf").value = cpcece
})
addEventListener("DOMContentLoaded",()=> {
    const nomrecebe = localStorage.getItem("nome")
    document.getElementById("name").value = nomrecebe
})

addEventListener("DOMContentLoaded",()=> {
    var emalcebe = localStorage.getItem("emali")
    document.getElementById("email").value = emalcebe
})
addEventListener("DOMContentLoaded",()=> {
    var senhacebe = localStorage.getItem("sena")
    document.getElementById("senha").value = senhacebe
})

