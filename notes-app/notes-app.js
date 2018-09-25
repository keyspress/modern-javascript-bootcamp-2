// const p = document.querySelector('p');
// p.remove();

const ps = document.querySelectorAll('p');

// ps.forEach(p => p.remove());
// ps.forEach(p => console.log(p.textContent));
ps.forEach(p => console.log((p.textContent = '********')));
