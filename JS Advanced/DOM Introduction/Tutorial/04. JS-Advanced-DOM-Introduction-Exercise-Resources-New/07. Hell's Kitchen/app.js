function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let obj = {};

      for (let n of input){
         let data = n.split('-');
         let restaurantName = data[0];
         let workers = data[1].trim().split(' ');
         console.log(workers)   
         if (!obj.hasOwnProperty(restaurantName)){
            obj[restaurantName] = {};
         }
      
         for (let _ of workers){
            let workerName = workers[0]
            let salary = workers[1].replace(', ', '');
            
            console.log(workerName)
            obj[restaurantName][workerName] = Number(salary);
         }
      }
   
      console.log(obj)
      
   }
}