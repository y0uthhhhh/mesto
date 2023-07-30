/* enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'popup__btn-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); */ 

const showInputError = (inputElement, errorMessage) => {
const errorElement = document.querySelector(`.${inputElement.id}-error`)
inputElement.classList.add('popup__input_type_error')
errorElement.textContent = errorMessage
errorElement.classList.add('popup__input-error_active')
};

const hideInputError = (inputElement) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`)
inputElement.classList.remove('popup__input_type_error')
errorElement.classList.remove('form__input-error_active');
errorElement.textContent = '';
};

const checkInputValidity = (inputElement) => {
 if(!inputElement.validity.valid) {
  showInputError(inputElement)
 } else {
  hideInputError(inputElement)
 }
};

const setEvenetListeners = () => {
  const inputList = Array.from(document.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function(evt) {
      checkInputValidity(evt.target)
    })
  })
}

setEvenetListeners()

