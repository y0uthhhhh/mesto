const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'popup__btn-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
}

const showInputError = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
inputElement.classList.add('popup__input_type_error')
errorElement.textContent = errorMessage
errorElement.classList.add('popup__input-error_active')
};

const hideInputError = (formElement, inputElement) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
inputElement.classList.remove(validationConfig.inputErrorClass)
errorElement.classList.remove(validationConfig.errorClass);
errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
 if(!inputElement.validity.valid) {
  showInputError(formElement, inputElement, inputElement.validationMessage)
 } else {
  hideInputError(formElement, inputElement)
 }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true)
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function(evt) {
      checkInputValidity(formElement, inputElement)
      toggleButtonState(inputList, buttonElement)
    })
  })
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach(function (formElement) {
    formElement.addEventListener('sumbit', function(evt) {
      evt.preventDefault
    })
    setEventListeners(formElement)
  })
}

enableValidation(validationConfig);

