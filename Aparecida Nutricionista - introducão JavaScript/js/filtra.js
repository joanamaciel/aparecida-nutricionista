let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    
    let pacientes = document.querySelectorAll(".paciente");
    for (let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];
        let tdNome = paciente.querySelector(".info-np");
        let nome = tdNome.textContent
        if( nome != this.value){
            paciente.classList.add("invisivel")
        }else{
            paciente.classList.remove("invisivel")
        };

        console.log(nome);
        
    }

    
    
})