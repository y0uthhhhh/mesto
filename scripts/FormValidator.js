class FormValidator {
  constructor (validationConfig, formElement) {
    this._formElement = formElement
    this._formSelector = validationConfig.formSelector
    this._inputSelector = validationConfig.inputSelector
    this._buttonElement = formElement.querySelector(validationConfig.submitButtonSelector)
    this._inactiveButtonClass = validationConfig.inactiveButtonClass
    this._inputErrorClass = validationConfig.inputErrorClass
    this._errorClass = validationConfig.errorClass
    this._inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector))
  }

  _showInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._inputErrorClass)
    errorElement.textContent = inputElement.validationMessage
    errorElement.classList.add(this._errorClass)
    };
    
  _hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._inputErrorClass)
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
    };
    
  _checkInputValidity (inputElement) {
     if(!inputElement.validity.valid) {
      this._showInputError(inputElement)
     } else {
      this._hideInputError(inputElement)
     }
    };
    
  _hasInvalidInput () {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid
      })
    }
    
  clearErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })
  }

  _toggleButtonState = () => {
      if(this._hasInvalidInput()) {
       this._disableButton()
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled', true)
      }
    }
    
  _setEventListeners () {
      this._toggleButtonState();
      this._formElement.addEventListener('reset', () => {
        this._disableButton()
      })
    
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement)
          this._toggleButtonState()
        })
      })
    }
    
  enableValidation () {
      this._formElement.addEventListener('sumbit', function(evt) {
        evt.preventDefault
      })
      this._setEventListeners()
    }
    
  _disableButton () {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true)
    }
}

export default FormValidator