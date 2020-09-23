//Procurar o botao
document.querySelector("#add-time")

//Quando clicar no botao
.addEventListener('click',cloneField)


//Executar uma acao
function cloneField(){
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(fields){
        //pegar o field do momento e limpa
        fields.value = ""       
    })
   
     //Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
  

    