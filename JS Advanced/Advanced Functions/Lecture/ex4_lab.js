function filterEmployees(employees, criteria){
    let parsedEmployees = JSON.parse(employees);
    let splitCriteria = criteria.split('-');
    let key = splitCriteria[0];
    let value = splitCriteria[1];

    
    let newParsedEmployees = parsedEmployees.filter(function (el){
        return el[key] == value;
    })

    for (let i = 0; i < newParsedEmployees.length; i++){
        let obj = newParsedEmployees[i];
        console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
    }

}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

)