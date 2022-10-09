function playingCards(card, suit){
    let facesNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    let facesStrings = ['J', 'Q', 'K', 'A']
    let suitsObj = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663' 
    }
    let cardObj = {
        face: null,
        suit: null
    };

    function returningObj(){

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
                    throw new Error('Error');
                }
                
            }else{
                if (performCheckCard(card)){
                    if (performSuitCheck(suit)){
                        return createCardObj(card, suit);
                    }
                }else{
                    throw new Error('Error');
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

    function toString(){
        let obj = returningObj();

        if (performFaceCheck(card) && performSuitCheck(suit)){
            return `${obj.face}${obj.suit}`;
        }else{
            throw new Error('Error');
        }   
        
    }
    return toString()
}
let result = playingCards('10', 'H')
console.log(result.toString())