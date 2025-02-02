document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector('.arrow3');
    const menu = document.querySelector('.menu');
    

    let p = document.createElement('p');
    p.textContent = 'Contact';
    p.classList.add('menu-item');
    let a = document.createElement('p');
    a.textContent = ' NewsLetter';
    a.classList.add('menu-item');
    let p1 = document.createElement('p');
    p1.textContent = 'Linkedin';
    p1.classList.add('menu-item');
    menu.append(p, a, p1);

    arrow.addEventListener('click', () => {
        menu.classList.toggle('show');
        arrow.classList.toggle('a');
    });
    let arrow1 = document.querySelector('.arrow1');
    let menu1 = document.querySelector('.menu1');

    let a1 = document.createElement('p');
    a1.textContent = ' Overview';
    a1.classList.add('menu-item');
    let p4 = document.createElement('p');
    p4.textContent = 'Pricing';
    p4.classList.add('menu-item');
    let p5 = document.createElement('p');
    p5.textContent = 'Marketplace';
    p5.classList.add('menu-item');
    let p6 = document.createElement('p');

    p6.textContent = 'Features';
    p6.classList.add('menu-item');
    let p7 = document.createElement('p');
    p7.textContent = 'Integrations';
    p7.classList.add('menu-item');
  menu1.append( a1, p4, p5, p6, p7);

    arrow1.addEventListener('click', () => {
        menu1.classList.toggle('show');
        arrow1.classList.toggle('a');
    });

    let arrow2 = document.querySelector('.arrow2');
    let menu4 = document.querySelector('.menu2');
    let p2 = document.createElement('p');
    p2.textContent = 'About';
    p2.classList.add('menu-item');
    let a2 = document.createElement('p');
    a2.textContent = ' Team';
    a2.classList.add('menu-item');
    let p3 = document.createElement('p');
    p3.textContent = 'Careers';
    p3.classList.add('menu-item');
    let p8 = document.createElement('p');
    p8.textContent = 'Blog';
    p8.classList.add('menu-item');
    menu4.append(p2, a2, p3, p8);
    
    arrow2.addEventListener('click', () => {
        menu4.classList.toggle('show');
        arrow2.classList.toggle('a');
    });



    let arr =document.querySelectorAll('.arrow1');
    let menu2 = document.querySelector('.menu2');
    let pp = document.createElement('p');
    pp.textContent = 'Contact';
    
 
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

let farr = document.querySelector('.arr');

  let product = document.querySelector('.product');
  let men1 = document.querySelector('.men1');
  product.addEventListener('click', () =>{
    men1.classList.toggle ('togMen');
    farr.classList.toggle('a');
  });

  let sarr = document.querySelector('.arr2');
  let component = document.querySelector('.Company');
  let men2 = document.querySelector('.men2');
  component.addEventListener('click', () =>{
    men2.classList.toggle ('togMen');
    sarr.classList.toggle('a');
  });
  let tarr = document.querySelector('.arr3');
  let Connect = document.querySelector('.Connect');
  let men3 = document.querySelector('.men3');
  Connect.addEventListener('click', () =>{
    men3.classList.toggle ('togMen');
    tarr.classList.toggle('a');
  });
