function search() {
   let data = document.querySelectorAll('ul#towns li')
   let countMatches = 0;
   let searchValue = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let res = '';

   for (let n of data){
      n.style.fontWeight = 'normal';
      n.style.textDecoration = ''
   }

   for (let n of data){
     let text = n.textContent;
     
     if(text.match(searchValue)){
         countMatches++;
         n.style.fontWeight = 'bold'
         n.style.textDecoration = 'underline'      
     }

   }

   res = `${countMatches} matches found`
   result.textContent = res;
   
}
