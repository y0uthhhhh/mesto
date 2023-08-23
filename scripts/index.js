import FormValidator from "./FormValidator.js";
import Card from "./card.js";

const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-cards');
const profile = document.querySelector('.profile');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');
const closeBtnProfile = popupProfile.querySelector('.popup-profile__btn-close');
const closeBtnCard = popupCard.querySelector('.popup-cards__btn-close');
const popupCardForm = popupCard.querySelector('.popup-cards__form');
const profileForm = popupProfile.querySelector('.popup-profile__form');
const popupProfileNameInput = popupProfile.querySelector('.popup-profile__input-name');
const popupProfileDescriptionInput = popupProfile.querySelector('.popup-profile__input-description')
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const elements = document.querySelector('.elements');
const cardNameInput = popupCard.querySelector('.popup-cards__input-name');
const cardLinkInput = popupCard.querySelector('.popup-cards__input-description');
const imagePopup = document.querySelector('.popup-image');
const imagePopupName = imagePopup.querySelector('.popup-image__description');
const imagePopupImg = imagePopup.querySelector('.popup-image__image');
const imagePopupBtnClose = imagePopup.querySelector('.popup-image__btn-close');
const popupCardBtnSubmit = popupCard.querySelector('.popup-cards__btn-submit');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'изображение озера, вокруг горы'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'изображение озера в заснеженном лесу'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'изображение старых жилых многоэтажных домов'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'изображение земли с травой, на заднем плане горы'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'изображение с деревьями вдоль железной дороги'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'изображение гор с заснеженными вершинами'
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'popup__btn-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
}

const addCard = (data, templateElement) => {
  const card = new Card(data, templateElement)
  const cardElement = card.generateCard()
  
  elements.prepend(cardElement)
}

initialCards.forEach(element => {
  addCard(element, '#template-element')
});

imagePopupBtnClose.addEventListener('click', () => {
  closePopup(imagePopup)
})

const editProfile = () => {
  profileName.textContent = popupProfileNameInput.value
  profileDescription.textContent = popupProfileDescriptionInput.value
}

const closePopupEsc = (evt) => {
  const openedPopup = document.querySelector('.popup_opened')
    if(evt.key === 'Escape') {
  closePopup(openedPopup)
  }
}

const openPopup = (popupName) => {
  popupName.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
  popupProfileValidation.clearErrors()
  popupCardValidation.clearErrors()
}

const closePopup = (popupName) => {
  popupName.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEsc)
}

profileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  editProfile();

  closePopup(popupProfile);
})

popupCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  addCard({link: cardLinkInput.value, name: cardNameInput.value}, '#template-element');
  
  closePopup(popupCard);

  popupCardForm.reset();
})

closeBtnCard.addEventListener('click', () => {
  closePopup(popupCard)
});

closeBtnProfile.addEventListener('click', () => {
  closePopup(popupProfile)
});

editBtn.addEventListener('click', () => {
  openPopup(popupProfile)
  popupProfileNameInput.value = profileName.textContent
  popupProfileDescriptionInput.value = profileDescription.textContent
});

addBtn.addEventListener('click', () => {
  openPopup(popupCard)
});


const closePopupClick = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'))
  popupList.forEach((popup) => {
    popup.addEventListener('click', function(evt) {
      if(evt.currentTarget === evt.target) {
        closePopup(popup)
      }
    })
  })
}

closePopupClick()

const popupProfileValidation = new FormValidator(config, popupProfile)
popupProfileValidation.enableValidation()
const popupCardValidation = new FormValidator(config, popupCard)
popupCardValidation.enableValidation()

export { openPopup, imagePopup, imagePopupImg, imagePopupName }

