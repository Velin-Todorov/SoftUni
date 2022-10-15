function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);



   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let res = [];
      let restaurant = {};
      let restaurantAvgMax = {}



      for (let n of input) {
         let data = n.split('-');
         let restaurantName = data[0];
         let workers = data[1].trim().split(', ');
         let totalSalary = 0;
   

         if (!restaurant.hasOwnProperty(restaurantName)) {
            restaurant[restaurantName] = {};
            restaurantAvgMax[restaurantName] = {};
            restaurantAvgMax[restaurantName]['Average'] = 0;
            restaurantAvgMax[restaurantName]['Max'] = 0;
            
            for (let n of workers) {
               let [name, salary] = n.split(' ')
               
               restaurant[restaurantName][name] = Number(salary);
               totalSalary += Number(salary);
               
            }
         

            restaurantAvgMax[restaurantName]['Average'] = (totalSalary / workers.length).toFixed(2);
            restaurantAvgMax[restaurantName]['Max'] = Math.max(...Object.values(restaurant[restaurantName])).toFixed(2)

         }else{
            totalSalary = Object.values(restaurant[restaurantName]).reduce((acc, el) => el + acc, 0)

            for(let n of workers){
               let [name, salary] = n.split(' ')

               restaurant[restaurantName][name] = Number(salary);
               totalSalary += Number(salary);
            }

            restaurantAvgMax[restaurantName]['Average'] = Number(totalSalary / Object.keys(restaurant[restaurantName]).length.toFixed(2))
            restaurantAvgMax[restaurantName]['Max'] = Number(Math.max(...Object.values(restaurant[restaurantName])).toFixed(2))
         }  
         
      }
      
      let bestRest = '';
      let bestAvgSalary = 0;
      for (const key in restaurantAvgMax){

         if(restaurantAvgMax[key]['Average'] > bestAvgSalary){
            bestAvgSalary = restaurantAvgMax[key]['Average']
            bestRest = key;
         }
      }
      

      let values = Object.entries(restaurant[bestRest]);
      values = values.sort((a, b) => a[1] + b[1]);
      let bestRestaurant = document.querySelector('#outputs #bestRestaurant p');
      let bestWorkers= document.querySelector('#outputs #workers p');
      let result = '';
      bestRestaurant.textContent = `Name: ${bestRest} Average Salary: ${String(restaurantAvgMax[bestRest]['Average'])} Best Salary: ${String(restaurantAvgMax[bestRest]['Max'])}`;
     
      values.forEach((el) => result += `Name: ${el[0]} With Salary: ${el[1]}\n`)
      bestWorkers.textContent = result;

   }

}