function getInfo() {
    let stopId = document.getElementById('stopId')
    let submit = document.getElementById('submit')

    let result = document.getElementById('result')
    let stopName = document.getElementById('stopName')
    let buses = document.getElementById('buses')

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`)
        .then((reponse) => reponse.json())
        .then((data) => {
            let bus = data.buses
            let name = data.name
            console.log(typeof data)
            stopName.textContent = name;
            buses.innerHTML = '';

            for (const key in bus) {
                let li = document.createElement('li')
                li.textContent = `Bus ${key} arrives in ${buses[key]} minutes`
                buses.appendChild(li)
            }

        }).catch(error => {
            stopName.textContent = 'Error';
            buses.innerHTML = '';
        })
}