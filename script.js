document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector('.arrow3');
    const menu = document.querySelector('.menu');

    let p = document.createElement('p');
    p.textContent = 'Contact';
    p.classList.add('menu-item');
    let a = document.createElement('a');
    a.textContent = ' NewsLetter';
    a.classList.add('menu-item');
    let p1 = document.createElement('p');
    p1.textContent = 'Linkedin';
    p1.classList.add('menu-item');
    menu.append(p, a, p1);

    arrow.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    let arr =document.querySelectorAll('.arrow1');
    let menu2 = document.querySelector('.menu2');
    let p2 = document.createElement('p');
    p2.textContent = 'Contact';
    
 
    let men = document.querySelector('.men');
    let m = document.querySelector('.mobMenu');

    men.addEventListener('click', () => {
        const menuIcon = document.getElementById('menu-icon');
        
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
            m.classList.add('active');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
            m.classList.remove('active');
        }
    });
    
  
});

 
  let product = document.querySelector('.product');
  let men1 = document.querySelector('.men1');
  product.addEventListener('click', () =>{
    men1.classList.toggle ('togMen');
  });


  let component = document.querySelector('.Company');
  let men2 = document.querySelector('.men2');
  component.addEventListener('click', () =>{
    men2.classList.toggle ('togMen');
  });

  let Connect = document.querySelector('.Connect');
  let men3 = document.querySelector('.men3');
  Connect.addEventListener('click', () =>{
    men3.classList.toggle ('togMen');
  });
