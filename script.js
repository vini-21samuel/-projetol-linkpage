function toggleMode(){
    const html= document.documentElement
    
    html.classList.toggle("light")

    // procurar a tag da img no html
    const img= document.querySelector("#profile img")

    //substituir a imagem do modo escurro pra claro
    if  (html.classList.contains("light")){

    //quando ativar modo claro adiciona foto de perfil 2
    img.setAttribute("src", "./arquivos/foto perfil 2.png") 
    }else{
        //senão está no modo claro permanance a foto de perfil
        img.setAttribute("src", "./arquivos/foto perfil.png")
    }
}
