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

const templateCardElement = document.querySelector('#template-element').content

function createCard (img, text, desc) {
  const cardElement = templateCardElement.querySelector('.element').cloneNode(true)
  const cardText = cardElement.querySelector('.element__text')

  cardElement.querySelector('.element__image').src = img
  cardElement.querySelector('.element__image').alt = desc || 'картинка' + text
  cardText.textContent = text

  const deleteCardBtn = cardElement.querySelector('.element__btn-delete')

  deleteCardBtn.addEventListener('click', () => {
    cardElement.remove()
  })

  const likeCardBtn = cardElement.querySelector('.element__like-btn')

  likeCardBtn.addEventListener('click', () => {
    likeCardBtn.classList.toggle('element__like-btn_active')
  })

  const cardImage = cardElement.querySelector('.element__image') 

  cardImage.addEventListener('click', () => {
    openPopup(imagePopup)
    imagePopupImg.src = cardImage.src
    imagePopupName.textContent = cardText.textContent
  })

  return cardElement
}

function addCard(img, text, desc) {
const cardElement = createCard(img, text, desc)

elements.prepend(cardElement)
}

imagePopupBtnClose.addEventListener('click', () => {
  closePopup(imagePopup)
})

function editProfile() {
  profileName.textContent = popupProfileNameInput.value
  profileDescription.textContent = popupProfileDescriptionInput.value
}

initialCards.forEach(element => {
  addCard(element.link, element.name, element.alt)
});

const closePopupEsc = (evt) => {
  const popupList = Array.from(document.querySelectorAll('.popup'))
  popupList.forEach((popup) => {
      if(evt.key === 'Escape')
        closePopup(popup)
  })
}

function openPopup(popupName) {
  popupName.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
}

function closePopup(popupName) {
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
  
  addCard(cardLinkInput.value, cardNameInput.value);
  
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
  hideInputError(profileForm, popupProfileDescriptionInput)
  hideInputError(profileForm, popupProfileNameInput)
});

addBtn.addEventListener('click', () => {
  openPopup(popupCard)
  enableValidation(validationConfig)
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
