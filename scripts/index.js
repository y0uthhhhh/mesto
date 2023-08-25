import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import initialCards from "./cards.js";

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
const cardsContainer = document.querySelector('.elements');
const cardNameInput = popupCard.querySelector('.popup-cards__input-name');
const cardLinkInput = popupCard.querySelector('.popup-cards__input-description');
const imagePopup = document.querySelector('.popup-image');
const imagePopupName = imagePopup.querySelector('.popup-image__description');
const imagePopupImg = imagePopup.querySelector('.popup-image__image');
const imagePopupBtnClose = imagePopup.querySelector('.popup-image__btn-close');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'popup__btn-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
}

const createCard = (data, templateElement) => {
  const card = new Card(data, templateElement)
  const cardElement = card.generateCard()
  
  return cardElement
}

initialCards.forEach(element => {
  cardsContainer.prepend(createCard(element, '#template-element'))
});

const editProfile = () => {
  profileName.textContent = popupProfileNameInput.value
  profileDescription.textContent = popupProfileDescriptionInput.value
}

const closePopupEsc = (evt) => {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

const openPopup = (popupName) => {
  popupName.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
}

const openImagePopup = (image, description) => {
  openPopup(imagePopup)
  imagePopupImg.src = image
  imagePopupName.textContent = description
  imagePopupImg.alt = description
}

const closePopup = (popupName) => {
  popupName.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEsc)
}

const setPopupOverlayClickListeners = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'))
  popupList.forEach((popup) => {
    popup.addEventListener('click', function(evt) {
      if(evt.currentTarget === evt.target) {
        closePopup(popup)
      }
    })
  })
}

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  editProfile();

  closePopup(popupProfile);
}

imagePopupBtnClose.addEventListener('click', () => {
  closePopup(imagePopup)
})

profileForm.addEventListener('submit', handleProfileFormSubmit)

popupCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  cardsContainer.prepend(createCard({link: cardLinkInput.value, name: cardNameInput.value}, '#template-element'));
  
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
  popupProfileValidation.clearErrors()
});

addBtn.addEventListener('click', () => {
  openPopup(popupCard)
  popupCardValidation.clearErrors()
});

setPopupOverlayClickListeners()

const popupProfileValidation = new FormValidator(validationConfig, popupProfile)
popupProfileValidation.enableValidation()
const popupCardValidation = new FormValidator(validationConfig, popupCard)
popupCardValidation.enableValidation()

export default openImagePopup

