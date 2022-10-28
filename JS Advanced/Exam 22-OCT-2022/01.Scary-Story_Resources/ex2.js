class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = []
    }

    returnPlayerObject(playerName) {
        for (let n of this.invitedPlayers) {
            if (n.name == playerName) {
                return n;
            }
        }
        return false;

    }


    newAdditions(footballPlayers) {
        let uniquePlayers = new Set()

        for (let n of footballPlayers) {
            let [name, age, playerValue] = n.split('/')

            if (this.returnPlayerObject(name)) {
                let obj = this.returnPlayerObject(name)
                if (Number(obj.playerValue) < Number(playerValue)) {
                    Number(obj.playerValue) = Number(playerValue)
                }

            } else {
                let player = {
                    name,
                    age,
                    playerValue
                }
                this.invitedPlayers.push(player)
                uniquePlayers.add(name)
            }

        }

        return `You successfully invite ${Array.from(uniquePlayers).join(', ')}.`
    }


    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/')
        let playerObj = this.returnPlayerObject(name)

        if (!playerObj) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            if (playerObj.playerValue > playerOffer) {
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(playerObj.playerValue - playerOffer)} million more are needed to sign the contract!`)
            } else {
                playerObj.playerValue = 'Bought'
            }
        }

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        let playerObj = this.returnPlayerObject(name)

        if (!playerObj) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            let difference;

            if (age > Number(playerObj.age)) {
                difference = Math.abs(age - Number(playerObj.age))

                if (difference < 5) {
                    return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
                } else if (difference > 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`

                } 
                
            }else if (Number(playerObj.age) >= age) {
                return `${name} is above age limit!`

            }

        }

    }

    transferWindowResult(){
        let result = 'Players list:\n'
        let sorted = this.invitedPlayers.sort((a, b) => a.name - b.name)
        for (let n of sorted){
            let name = n.name
            let val = n.playerValue

            result += `Player ${name}-${val}\n`
        }
        return result.trim();
    }

}

