const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'popup__btn-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const showInputError = (formElement, inputElement, errorMessage, config) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
inputElement.classList.add(config.inputErrorClass)
errorElement.textContent = errorMessage
errorElement.classList.add(config.errorClass)
};

const hideInputError = (formElement, inputElement, config) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
inputElement.classList.remove(config.inputErrorClass)
errorElement.classList.remove(config.errorClass);
errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, config) => {
 if(!inputElement.validity.valid) {
  showInputError(formElement, inputElement, inputElement.validationMessage, config)
 } else {
  hideInputError(formElement, inputElement, config)
 }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement, config) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true)
  }
}

const setEventListeners = (formElement, config) => {
  console
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  formElement.addEventListener('reset', () => {
    disableButton(buttonElement, config)
  })

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function(evt) {
      checkInputValidity(formElement, inputElement, config)
      toggleButtonState(inputList, buttonElement, config)
    })
  })
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function (formElement) {
    formElement.addEventListener('sumbit', function(evt) {
      evt.preventDefault
    })
    setEventListeners(formElement, config)
  })
}

const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true)
}

enableValidation(validationConfig);

