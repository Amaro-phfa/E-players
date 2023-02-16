$(document).ready(function(){
    
    let SlideAtual = 1
    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]
    
    setInterval(mudarSlide, 2000)

    
    function mudarSlide(){
    //remover slide anterior

        if (SlideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[SlideAtual - 1])
        }
        else {
            $("#carrossel").removeClass(listaSlides[listaSlides.length - 1])
        }
        //exibir slide atual 
        $("#carrossel").addClass(listaSlides[SlideAtual])
        SlideAtual++
        //indicar qual slide atual
        if (SlideAtual>listaSlides.length - 1) {
            SlideAtual = 0
        }
    }
    
    
    
    
    
    
    $("#barras").click(function(){
        if ($("#menu").hasClass("menu-ativo")) {
            $("#menu").removeClass("menu-ativo")
        }
        else {
            $("#menu").addClass("menu-ativo")
        }
    })
})

/*function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value
    alert(email)
}

//function mostrarMenu($event) {//
    //let menu = document.getElementById("menu")/
    if(getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    }
    else {
        menu.style.display = "none"
    }
    event.preventDefault()

}*/