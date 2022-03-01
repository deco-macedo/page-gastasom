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
    const navHeight = header.offsetHeight
    
    function changeHeaderWhenScroll() {
      if (window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')
      } else {
        // menor que a altura do header
        header.classList.remove('scroll')
      }
    }

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

    //--------------- BOTÃO VOLTAR PARA O TOPO --------------- //
    const backToTopButton = document.querySelector('.back-to-top')

    function backToTop() {
      if (window.scrollY >= 160) {
        backToTopButton.classList.add('show')
      } else {
        backToTopButton.classList.remove('show')
      }
      }

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})