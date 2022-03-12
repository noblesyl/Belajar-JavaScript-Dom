const h1 = document.querySelector('#judul');
h1.style.color = 'red';
h1.innerHTML = 'syahrul saleh';

h1.setAttribute('name', 'ini h1');
h1.setAttribute('href', 'syahrulsaleh.com');
h1.getAttribute('id');
h1.removeAttribute('href');

const p = document.getElementsByClassName('p1')[0];
p.classList.add('baru1');
p.classList.add('baru2', 'baru3', 'baru4');
p.classList.remove('baru4');

// const bg = document.querySelector('section#b ul li:nth-child(2)');
// bg.classList.toggle('bgkotak');


const section = document.querySelector('section#b ul');
const libaru = document.createElement('li');
const pbaru = document.createTextNode('item baru');

libaru.appendChild(pbaru);

section.appendChild(libaru);

const warnaLi = section.querySelector('li:nth-child(4)');
warnaLi.classList.add('item-li');
warnaLi.addEventListener('click', function() {
    warnaLi.classList.toggle('bgkotak');
    const liTambah = document.createElement('li');
    const pTambah = document.createTextNode('Li Tambah');
    liTambah.appendChild(pTambah);
    section.appendChild(liTambah);
    liTambah.classList.add('bgkotak');
})