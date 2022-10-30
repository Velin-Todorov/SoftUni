function attachEvents() {
    let submit = document.getElementById('submit')
    let location = document.getElementById('location')

    function returnWeatherCondition(condition) {
        weather = ''
        if (condition == 'Sunny') {
            weather = '&#x2600;'
        } else if (condition == 'Partly sunny') {
            weather = '&#x26C5;'
        } else if (condition == 'Overcast') {
            weather = '&#x2601;'
        } else if (condition == 'Rain') {
            weather = '&#x2614;'
        } else if (condition == 'Degrees') {
            weather = '&#176;'
        }

        return weather
    }


    function fetchCurrent(data) {

        if (data == null){
            document.getElementById('forecast').textContent = 'Error'
            return;
        }
        document.getElementById('forecast').style.display = 'block'

        let classForecast = document.getElementsByClassName('label')[0]
        let div = document.createElement('div')

        div.className = 'forecasts'

        let weather = returnWeatherCondition(data.forecast.condition)
        let spanSymbol = document.createElement('span')
        spanSymbol.className = 'condition symbol'
        spanSymbol.innerHTML = weather

        div.appendChild(spanSymbol)

        let spanCondition = document.createElement('span')
        spanCondition.className = 'condition'

        spanCondition.innerHTML = `<span class="forecast-data">${data.name}</span>
                                                       <span class="forecast-data">${data.forecast.low}&#176;/${data.forecast.high}&#176;</span>
                                                       <span class="forecast-data">${data.forecast.condition}</span>`
        div.appendChild(spanCondition)
        document.getElementById('current').appendChild(div)
    }

    function fetchFuture(data) {
        let upcoming = document.getElementById('upcoming')
        let forecastInfo = document.getElementsByClassName('label')[1]

        let div = document.createElement('div')
        div.className = 'forecast-info'

        for (let n of data.forecast) {
            let span = document.createElement('span')
            span.className = 'upcoming'

            let weather = returnWeatherCondition(n.condition)
            span.innerHTML = `<span class="symbol">${weather}</span>
                              <span class="forecast-data">${n.low}&#176;/${n.high}&#176;</span>
                              <span class="forecast-data">${n.condition}</span`
            div.appendChild(span)
        }

        upcoming.appendChild(div)
    }



    submit.addEventListener('click', () => {
        let found = false
        fetch(`http://localhost:3030/jsonstore/forecaster/locations/`)
            .then(response => response.json())
            .then(data => {
                for (let n of data) {
                    let CC = n.code
                    let name = n.name
                    if (name == location.value) {
                        found = true
                        fetch(`http://localhost:3030/jsonstore/forecaster/today/${CC}`)
                            .then(response => response.json())
                            .then(data => fetchCurrent(data))
                            .catch(error => {
                                document.getElementById('forecast').style.display = 'block'
                                document.getElementById('forecast').innerHTML = ''
                                document.getElementById('forecast').innerText = 'Error'})

                        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${CC}`)
                            .then(response => response.json())
                            .then(data => fetchFuture(data))
                            .catch(error => {
                                document.getElementById('forecast').style.display = 'block'
                                document.getElementById('forecast').innerHTML = ''
                                document.getElementById('forecast').innerText = 'Error'})
                    }

                }
                if(!found){
                    document.getElementById('forecast').style.display = 'block'
                    document.getElementById('forecast').innerHTML = ''
                    document.getElementById('forecast').innerText = 'Error'
                }
                

            }).catch(error => {
                document.getElementById('forecast').style.display = 'block'
                document.getElementById('forecast').innerHTML = ''
                document.getElementById('forecast').innerText = 'Error'})
    })


}

attachEvents();