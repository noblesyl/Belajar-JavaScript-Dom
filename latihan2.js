// const li = document.querySelector('section#b ul li:nth-child(2)');
// li.setAttribute('class', 'isi-li');
// const baru = document.getElementsByClassName('isi-li')[0];
// baru.style.color = 'salmon';
// li.removeAttribute('class');
// baru.style.color = 'blue';

// const a = document.getElementsByTagName('a')[0];
// a.style.backgroundColor = 'salmon';
// a.removeAttribute('href');


// const ubah = document.querySelector('section#b ul li:nth-child(3)');
// ubah.classList.add("itam3");
// const itam3 = document.getElementsByClassName('itam3')[0];

// itam3.style.color = 'yellow';

// const pbaru = document.getElementsByClassName('p2')[0];
// pbaru.setAttribute('name', 'isip');

// const abaru = document.querySelector('a');

// const p4 = document.querySelector('section#b p');
// p4.classList.add('kotak', 'satu');


// const buttonBaru = document.createElement('button');
// const textButton = document.createTextNode('ubahWarna');

// buttonBaru.appendChild(textButton);

// const sectionBaru = document.querySelector('section#b ul');
// sectionBaru.appendChild(buttonBaru);

// const cButton = document.getElementsByTagName('button')[0];

// cButton.setAttribute('class', 'bKotak');

// cButton.addEventListener('click', function() {
//     document.body.classList.toggle('kotak1');
// });

// cButton.addEventListener('click', function() {
//     cButton.classList.toggle('bkotak');
// });

// cButton.removeAttribute('class');

const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function() {

    const ul = document.querySelector('section#b ul');
    const itemB = document.createElement('li');
    const textItemB = document.createTextNode('item baru');

    itemB.appendChild(textItemB);

    ul.appendChild(itemB);
});