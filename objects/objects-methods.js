let restaurant = {
  name: 'The Barn',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailablity: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
  }
};

restaurant.seatParty(75);
console.log(restaurant.checkAvailablity(4));
restaurant.removeParty(10);
console.log(restaurant.checkAvailablity(4));
