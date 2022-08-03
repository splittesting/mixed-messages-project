// Starting function to generate a random number using the floor and random methods then assign the value to a card suit
function generateRandomNumber(num) {

    return Math.floor(Math.random() * num)
  }
  
  const chooseCard = {
    cardInfo: ['diamond', 'heart', 'spade', 'clubs'],
    suitOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    yield: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  
  // Store the 'cardMagic' in an array
  let cardMagic = []
  
  // Iterate over the object
  for(let prop in chooseCard) {
    let optionIdx = generateRandomNumber(chooseCard[prop].length)
  
    // use the object's properties to customize the message being added to cardMagic  
    switch(prop) {
      case 'cardInfo':
        cardMagic.push(`Your card right now is a "${chooseCard[prop][optionIdx]}".`)
        break
      case 'suitOutput':
        cardMagic.push(`You are having: "${chooseCard[prop][optionIdx]}".`)
        break
      case 'yield':
        cardMagic.push(`You should: "${chooseCard[prop][optionIdx]}".`)
        break
      default:
        cardMagic.push('There is not enough info.')
    }
  }
  
  function formatCard(fortune) {
    
    const formatted = cardMagic.join('\n')
    console.log(formatted)
  }
  
  formatCard(cardMagic);