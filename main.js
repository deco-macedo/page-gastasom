//--------------- ABRE E FECHA O MENU --------------- //

// FUNÇÃO PARA PROCURAR OS CAMINHOS ABAIXO //
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

// PARA CADA ELEMENT DO TOOGLE ADICIONE UM EVENTO DE CLICK QUE ATIVARÁ A FUNÇÃO TOOGLE ADICIONANDO UMA CLASSE CHAMADA 'SHOW' DENTRO DO NAV //
for (const element of toogle) {
    element.addEventListener('click', function () {
      nav.classList.toggle('show')
    })
  }

  //--------------- ROTEAMENTO DE LINKS --------------- //

  // FUNÇÃO PARA PROCURAR TODOS OS LINKS DO MENU //
  const links = document.querySelectorAll('nav ul li a')


// PARA CADA LINK DENTRO DOS LINKS, REMOVA A CLASS 'SHOW' DENTRO DO NAV //
  for (const link of links) {
    link.addEventListener('click', function () {
      nav.classList.remove('show')
    })
  }

    //--------------- MUDAR HEADER QUANDO DER SCROLL NA PAGE --------------- //

    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight // atributo de deslocamento da altura do header

    window.addEventListener('scroll', function() {
      if (this.window.scrollY >= navHeight) {
        header.classList.add('scroll')
      } else {
        header.classList.remove('scroll')
      }
    })

     //--------------- MOSTRAR ELEMENTOS QUANDO DER SCROOL NA PAGE --------------- //

     const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
    })
    
    scrollReveal.reveal(
      `#home .image, #home .text,
      #about .title, #about .image, #about .text,
      #discography .title, #discography .card,
      #testimonials header, #testimonials .testimonials
      #contact .title, #contact .links,
      footer .brand, footer .social
      `,
      { interval: 100 }
    )