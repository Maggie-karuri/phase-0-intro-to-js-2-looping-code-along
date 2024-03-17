function countDown() {
    for (let i = 10; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown();
  function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  module.exports = { writeCards };