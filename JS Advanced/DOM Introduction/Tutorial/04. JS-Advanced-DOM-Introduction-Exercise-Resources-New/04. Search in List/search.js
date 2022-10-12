function search() {
   let text = document.getElementById('searchText');
   let cities = document.querySelectorAll('ul#towns li');
   let count = 0;
   let result = document.getElementById('result');
   let matches = [];

   for (let n of cities){
      if (n.textContent.match(text.value)){
         n.style.textDecoration = 'underline'
         n.style.fontWeight = 'bold';
         matches.push(n);
         count += 1;
      }
   }
   result.textContent = `${count} matches found`
   
}
