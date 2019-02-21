const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    const location = this.journeys.map((journey) => journey.startLocation);
    return location;
  };

Traveller.prototype.getJourneyEndLocations = function() {
    const location = this.journeys.map((journey) => journey.endLocation);
    return location;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
    const journeyTransport = this.journeys.filter((item) => item.transport === transport);
    return journeyTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    const journeyDistance = this.journeys.filter((item) => item.distance > minDistance);
    return journeyDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    const distance = this.journeys.reduce((total, item) => total + item.distance, 0);
    return distance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
    const transportList = this.journeys.filter((journey) => journey.transport);
    return transportList;
};


module.exports = Traveller;
