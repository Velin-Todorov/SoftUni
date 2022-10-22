class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable
        this.plants = []
        this.storage = []
    }

    ReturnPlant(plantName) {
        for (let n of this.plants) {
            let name = n.plantName
            if (name == plantName) {
                return n;
            }
        }
    }

    PlantExists(plantName) {
        for (let n of this.plants) {
            let name = n.plantName
            if (name == plantName) {
                return true
            }
        }
    }

    DeletePlant(plantName) {
        for (let n of this.plants) {
            let name = n.plantName
            if (name == plantName) {
                this.plants.splice(this.plants.indexOf(n), 1);
            }
        }
    }

    addPlant(plantName, spaceRequired) {
        if (typeof plantName == 'string' && typeof spaceRequired == 'number') {
            if (spaceRequired > this.spaceAvailable) {
                throw new Error('Not enough space in the garden.')
            } else {
                let plant = {
                    plantName,
                    spaceRequired,
                    ripe: false,
                    quantity: 0
                }

                this.plants.push(plant)
                this.spaceAvailable -= spaceRequired
                return `The ${plantName} has been successfully planted in the garden.`

            }
        }
    }

    ripenPlant(plantName, quantity) {
        if (typeof quantity == 'number') {
            if (!this.PlantExists(plantName)) {
                throw new Error(`There is no ${plantName} in the garden.`)
            } if (quantity <= 0) {
                throw new Error('The quantity cannot be zero or negative.')
            }
        }
        let plant = this.ReturnPlant(plantName)

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        plant.ripe = true;
        plant.quantity = quantity

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        if (!this.PlantExists(plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let plant = this.ReturnPlant(plantName)

        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        let name = plant.plantName
        let quant = plant.quantity

        let newPlant = {
            plantName: name,
            quantity: quant
        }

        this.storage.push(newPlant)
        this.spaceAvailable += plant.spaceRequired

        this.DeletePlant(plantName)
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.`
        this.plants.sort((a, b) => {
            if (a.plantName > b.plantName) {
                return 1
            } else {
                return -1;
            }
        })

        let names = []
        for (let n of this.plants) {
            names.push(n.plantName);
        }
        result += `\nPlants in the garden: ${names.join(', ')}`
        if (this.storage === []){
            result += 'Plants in storage: The storage is empty.'
        }else{
            let store = []
            for (let n of this.storage){
                let str = `${n.plantName} (${n.quantity})`
                store.push(str)
            }
            
            result += `\nPlants in storage: ${store.join(', ')}`

        }
        return result;
    }

}
