function enviar(){
    alert('Obrigado por enviar os dados!')

}

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();
    
    const usuario = document.querySelector("#usuario")

    const value= usuario.value;

    console.log(value);


});

    