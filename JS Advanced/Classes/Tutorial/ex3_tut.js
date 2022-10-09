function managerTickets(arr, criteria){

    let tickets = [];

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        } 

    }

    for (let n of arr){
        let data = n.split('|');
        let ticket = new Ticket(data[0], Number(data[1]), data[2])
        tickets.push(ticket);
    }

    let sorted = tickets.sort((a, b) => {if (a[criteria] > b[criteria]){return 1}
                                        else if (a[criteria] < b[criteria]){return -1}})
    return sorted;
    
}

console.log(managerTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'))