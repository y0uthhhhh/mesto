import openImagePopup from "./index.js";

class Card {
  constructor(data, templateElement) {
    this._templateElement = templateElement;
    this._image = data.link;
    this._description = data.name;
    this._alt = data.alt;
  };

  _getTemplate() {
    const cardElement = document.querySelector(this._templateElement).content.querySelector('.element').cloneNode(true);
    
    return cardElement;
  };

  _setEventListeners() {
    this._element.querySelector('.element__btn-delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });

    this._likeBtn.addEventListener('click', () => {
      this._handleLikeCard();
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });
  };

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  };

  _handleLikeCard() {
    this._likeBtn.classList.toggle('element__like-btn_active');
  };

  _handleOpenPopup() {
    openImagePopup(this._image, this._description);
  };
  
  generateCard() {
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.element__like-btn');
    this._elementImage =  this._element.querySelector('.element__image');

    this._setEventListeners();  

    this._elementImage.src = this._image;
    this._elementImage.alt = this._alt  || 'картинка' + this._description;
    this._element.querySelector('.element__text').textContent = this._description;

    return this._element;
  };
};

export default Card