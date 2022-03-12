const h1 = document.querySelector('#judul');
h1.style.color = 'red';
h1.innerHTML = 'syahrul saleh';

h1.setAttribute('name', 'ini h1');
h1.setAttribute('href', 'syahrulsaleh.com');
h1.removeAttribute('href');

const p = document.getElementsByClassName('p1')[0];
p.classList.add('baru1');
p.classList.add('baru2', 'baru3', 'baru4');