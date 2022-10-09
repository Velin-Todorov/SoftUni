function printDeckOfCards(cards){

    const facesNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    const facesStrings = ['J', 'Q', 'K', 'A']
    const suitsObj = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663' 
    }

    let cardObj = {
            face: null,
            suit: null
    };
    
    
    function createCard(){
    
       
        let result = [];
        let face = null;
        let suit = null;

        for (let n of cards){
            if (n.length == 2){
                face = n[0];
                suit = n[1];
            }else if (n.length == 3){
                face = n[0] + n[1];
                suit = n[2];
            }

            let cardInfo = returningObj(face, suit);
            let str = `${cardInfo.face}${cardInfo.suit}`

            if (cardInfo.face == undefined || cardInfo.suit == undefined){
                return `Invalid card: ${face}${suit}`
            }
            result.push(str);
            
        }
        
        return result.join(' ');
    }

    function returningObj(card, suit){

        if (suit !== suit.toUpperCase() || card !== card.toUpperCase()){
            throw new Error('Error')
        }else{
            let numberCard = Number(card)
            if (!isNaN(numberCard)){
    
                if (performCheckCard(numberCard)){
                    if (performSuitCheck(suit)){
                        return createCardObj(numberCard, suit);
                    }
                }else{
                    return `Invalid card: ${card}${suit}`;
                }
                
            }else{
                if (performCheckCard(card)){
                    if (performSuitCheck(suit)){
                        return createCardObj(card, suit);
                    }
                }else{
                    return `Invalid card: ${card}${suit}`;
                }
                }
            }
    
        }
    

    function performCheckCard(card){
        if (facesNumber.includes(card)){
            return true;        
        
        }else if (facesStrings.includes(card)){
            return true;
        }
        
    }

    function performSuitCheck(suit){
        if (suitsObj.hasOwnProperty(suit)){
            return true;
        }
    }

    function performFaceCheck(card){
        if (createCardObj(card, suit).hasOwnProperty('face')){
            return true;
        }
    }

    function createCardObj(card, suit){
        cardObj.face = card;
        cardObj.suit = suitsObj[suit];

        return cardObj;
    }

     
    console.log(createCard())
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
