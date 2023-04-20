export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // getter for sqft
  get sqft() {
    return this._sqft;
  }

  // setter for sqft
  set sqft(value) {
    this._sqft = value;
  }

  // abstract method that must be implemented by any class that extends Building
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

