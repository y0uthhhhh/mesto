import { openPopup, imagePopup, imagePopupImg, imagePopupName } from "./index.js"

class Card {
  constructor(data, templateElement) {
    this._templateElement = templateElement
    this._image = data.link
    this._description = data.name
    this._alt = data.alt
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateElement).content.querySelector('.element').cloneNode(true)
    
    return cardElement
  }

  _setEventListeners() {
    this._element.querySelector('.element__btn-delete').addEventListener('click', () => {
      this._handleDeleteCard()
    })

    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._handleLikeCard();
    })

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    })
  }

  _handleDeleteCard() {
    this._element.remove()
  }

  _handleLikeCard() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active')
  } 

  _handleOpenPopup() {
    openPopup(imagePopup)
    imagePopupImg.src = this._image
    imagePopupName.textContent = this._description
  }
  
  generateCard() {
    this._element = this._getTemplate()

     this._setEventListeners()  

    this._element.querySelector('.element__image').src = this._image
    this._element.querySelector('.element__image').alt = this._alt  || 'картинка' + this._description
    this._element.querySelector('.element__text').textContent = this._description

    return this._element
  }
}

export default Card