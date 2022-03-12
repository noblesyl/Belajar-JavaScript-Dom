// // DOM Selection

// // mengembalikan elemen
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.innerHTML = "selamat datang";


// // mengembalikan htmlCollections
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'salmon';

// }

// // mengembalikan htmlCollections
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = "ini diubah melalui js";

// // mengembalikan elemen
// const li = document.querySelector('ul li:nth-child(2)');
// li.style.color = "red";


// // memilih semua elemen di halaman
// const baru = document.querySelectorAll('p');

// for (let i = 0; i < baru.length; i++) {
//     baru[i].style.backgroundColor = 'salmon';
//     baru[i].style.color = 'white';

// }


const sectionb = document.getElementById('b');
const p = sectionb.getElementsByTagName('p')[0];
p.style.backgroundColor = 'salmon';