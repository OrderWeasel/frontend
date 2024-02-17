import { STATES } from './states';

function isFullState(text) {
  return Object.keys(STATES).find(state => state === text);
}

function isStateCode(text) {
  return Object.values(STATES).find(code => code === text);
}

function getStateCode(text) {
  if (isFullState(text)) {
    return (STATES[text]);
  } else {
    return text
  }
}

function isValidEmail(text, merchants, merchant) {
    let isUnique = !merchants.find(merch => merch.email === text);
    let password = merchant["password"];
    return isNotEmpty(text)
      && text != password
      && isUnique
      && text.length >= 4
      && validEmailPattern(text)
}

function isValidValidator(text, merchant) {
  return isNotEmpty(text)
    && text === merchant['password'];
}

function isValidPassword(text, merchant) {
  let email = merchant["email"];

  return isNotEmpty(text)
    && text.length >= 8
    && text !== email;
}

function isValidRestaurantName(text) {
  return isNotEmpty(text);
}

function isValidPhoneNumber(text) {
  return isNotEmpty(text) && validNumPattern(text);
}

function isValidStreet(text) {
  return isNotEmpty(text) && validStreetPattern(text);
}

function isValidCity(text) {
  return isNotEmpty(text) && validCityPattern(text);
}

function isValidState(text) {
  return isNotEmpty(text) && !!(isStateCode(text) || isFullState(text));
}

function isValidZip(text) {
  return isNotEmpty(text, 5) && validZipPattern(text);
}

function isNotEmpty(text, maxChars=225) {
  if (maxChars > 225) return false;

  text = text.trim();
  return text.length > 0 && text.length <= maxChars;
}

function formatPhone(text) {
  return text.replace(/[\-\(\)]/g, '');
}

function validZipPattern(text) {
  let validZip = new RegExp(/^\d{5}$/);
  text = text.trim();
  return validZip.test(text);
}

function validStreetPattern(text) {
  let validStreetChars = new RegExp(/^[A-Za-z0-9\s.,#&-]+$/);
  text = text.trim();
  return validStreetChars.test(text);
}

function validCityPattern(text) {
  let validCityChars = new RegExp(/^[A-Za-z\s'.-]+$/);
  text = text.trim();
  return validCityChars.test(text);
}

function validEmailPattern(text) {
  let validEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  text = text.trim();
  return validEmail.test(text);
}

function validNumPattern(text) {
  let validNum = new RegExp(/^\d{10}$/);
  text = text.replace(/[\-\(\)]/g, '');
  text = text.trim();
  return validNum.test(text);
}

export {
  isValidPhoneNumber, isValidRestaurantName, isValidStreet,
  isValidCity, isValidState, isValidZip,
  isValidEmail, isValidPassword, isValidValidator,
  isNotEmpty, getStateCode, formatPhone,
  validZipPattern, validStreetPattern, validCityPattern,
  validEmailPattern, validNumPattern
};
