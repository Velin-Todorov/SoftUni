function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let result = [];

   function onClick() {
      let searchField = document.getElementById('searchField');
      let table = document.querySelectorAll('tbody tr');
      for (let n of table){
         //n.classList.remove()

         if (n.innerHTML.includes(searchField.value)){
               n.className = 'select';
               result.push(n);
            }
         
      }

      searchField.value = '';
      //result.forEach((el) => {el.classList.remove('select')});
   }
}