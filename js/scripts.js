
const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const desplegarMenu = () => {

    mobileMenu.style.display = 'block';
    iconMenu.style.opacity = '50%';
    iconMenu.style.transform = 'rotate(90deg)';
    
};

const replegarMenu = () => {

    mobileMenu.style.display = 'none';
    iconMenu.style.opacity = '100%';
    iconMenu.style.transform = 'rotate(0deg)';

};

const displayIconMenu = (e) => {

    e.preventDefault();

    if ( mobileMenu.style.display === 'block' )
    {
        replegarMenu();
    }
    else
    {
        desplegarMenu();
    }
    
};

const defaultPage = (e) => {

    e.preventDefault();

    if ( window.innerWidth >= 1024 )
    {
        replegarMenu();
    }

};


iconMenu.addEventListener('click', displayIconMenu);

window.addEventListener("resize", defaultPage);


const links = document.querySelectorAll('a');

links.forEach((link) => {

    link.addEventListener('click', (e) => {
        
        const target = e.currentTarget.getAttribute('href');

        e.preventDefault();
        replegarMenu();
        document.querySelector(target).scrollIntoView(
        {
            behavior: 'smooth'
        });

    });

}); 








let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
    
  menu_bar.addEventListener('click', function() {
    menu.classList.toggle("menu-toggle");
    
  });

  window.sr = ScrollReveal();

    sr.reveal( '.navbar' , {
        duration: 2000,
        origin: 'bottom' , 
        distance: '-100px'
         

    });

    sr.reveal( '.scroll' , {
        duration: 2000,
        origin: 'bottom' , 
        distance: '-100px'
         

    });


    window.sr = ScrollReveal();

    sr.reveal( '.navbarr' , {
        duration: 2000,
        origin: 'bottom' , 
        distance: '-100px'
         

    });

    sr.reveal( '.scrollC' , {
        duration: 2000,
        origin: 'bottom' , 
        distance: '-100px'
         

    });






    