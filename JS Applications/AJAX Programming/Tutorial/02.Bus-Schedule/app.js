function solve() {

    let firstStop = 'depot'
    let info = document.getElementById('info')

    function depart() {
        document.getElementById('depart').disabled = false;

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${firstStop}`)
            .then((response) => response.json())
            .then((data) => {

                if (data === null) {
                    info.textContent = 'Error';
                    document.getElementById('arrive').disabled = false;
                    document.getElementById('depart').disabled = false;
                }
                let name = data.name
                let nextStopId = data.next
                firstStop = nextStopId
                document.getElementById('depart').disabled = true;

                info.textContent = `Next stop ${name}`
                document.getElementById('arrive').disabled = false;
            })
            .catch(error => {
                info.textContent = 'Error';
                document.getElementById('arrive').disabled = false;
                document.getElementById('depart').disabled = false;

            })
    }

    function arrive() {
        let stop = info.textContent.split('stop')
        let currentStop = stop[1]
        info.textContent = `Arriving at ${currentStop}`
        document.getElementById('arrive').disabled = true
        document.getElementById('depart').disabled = false
    }

    return {
        depart,
        arrive
    };
}

let result = solve();