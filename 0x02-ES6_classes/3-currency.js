export default class Currency {
  constructor(code, name) {
	  this._code = code;
	  this._name = name;
  }
  
  // getter code
  get code() {
    return this._code;
  }

  // setter code
  set code(code) {
    this._code = code;
  }

  // getter name
  get name() {
    return this._name;
  }

  // setter name
  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
