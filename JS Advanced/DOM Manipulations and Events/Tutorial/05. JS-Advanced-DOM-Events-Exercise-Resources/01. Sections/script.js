function create(words) {

   let content = document.getElementById('content');

   for (let n of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.innerText = n;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div)

      div.addEventListener('click', show);
      function show() {
         p.style.display = 'inline';
      }
   }
}