const popup = document.querySelector('.popup');
const popupCards = document.querySelector('.popup-cards');
const profile = document.querySelector('.profile');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');
const closeBtn = popup.querySelector('.popup__btn-close');
const closeCardsBtn = popupCards.querySelector('.popup-cards__btn-close');
const popupCardsForm = popupCards.querySelector('.popup-cards__form');
const form = popup.querySelector('.popup__form');
const name = popup.querySelector('.popup__input_el_name');
const description = popup.querySelector('.popup__input_el_description')
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const elements = document.querySelector('.elements');
const cardName = popupCards.querySelector('.popup-cards__input_el_name');
const cardImage = popupCards.querySelector('.popup-cards__input_el_description');
const imagePopup = document.querySelector('.popup-image');
const imagePopupName = imagePopup.querySelector('.popup-image__description')
const imagePopupImg = imagePopup.querySelector('.popup-image__image')
const imagePopupBtnClose = imagePopup.querySelector('.popup-image__btn-close')

function imagePopupClose() {
  imagePopup.classList.remove('popup-image_opened')
}

imagePopupBtnClose.addEventListener('click', imagePopupClose)

function editCardsForm (evt) {
  evt.preventDefault();

  addCard(cardName.value, cardImage.value) 

  popupCardsClose()
}

popupCardsForm.addEventListener('submit', editCardsForm)


function popupCardsOpen() {
  popupCards.classList.add('popup-cards_opened');
}

addBtn.addEventListener('click', popupCardsOpen);

function popupCardsClose() {
  popupCards.classList.remove('popup-cards_opened');
  cardName.value = ''
  cardImage.value = ''
}

closeCardsBtn.addEventListener('click', popupCardsClose);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

  function addCard(name, link) {
  const element = document.createElement('article')
  element.classList.add('element')
  const btnDelete = document.createElement('button');
  btnDelete.setAttribute('type', 'button');
  btnDelete.classList.add('element__btn-delete')
  let elementImage = document.createElement('img')
  elementImage.classList.add('element__image')
  elementImage.src = link
  elementImage.alt = name
  const elementTextZone = document.createElement('div');
  elementTextZone.classList.add('element__text-zone')
  let elementText = document.createElement('h2')
  elementText.classList.add('element__text')
  elementText.textContent = name
  const elementLikeBtn = document.createElement('button')
  elementLikeBtn.classList.add('element__like-btn');
  elementLikeBtn.setAttribute('type', 'button')

  elements.prepend(element)
  element.append(btnDelete, elementImage, elementTextZone)
  elementTextZone.append(elementText, elementLikeBtn)
  
  elementLikeBtn.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-btn_active')
  })

  btnDelete.addEventListener('click', function(evt) {
    element.remove()
  })

  elementImage.addEventListener('click', function(evt) {
    imagePopup.classList.add('popup-image_opened')
    
    imagePopupImg.src = evt.target.src
    imagePopupName.textContent = element.textContent
  })
}

addCard(initialCards[0].name, initialCards[0].link)
addCard(initialCards[1].name, initialCards[1].link)
addCard(initialCards[2].name, initialCards[2].link)
addCard(initialCards[3].name, initialCards[3].link)
addCard(initialCards[4].name, initialCards[4].link)
addCard(initialCards[5].name, initialCards[5].link)



function popupOpen() {
  popup.classList.add('popup_opened');
  name.value = profileName.textContent
  description.value = profileDescription.textContent

}

editBtn.addEventListener('click', popupOpen);

function popupClose() {
  popup.classList.remove('popup_opened');
}

closeBtn.addEventListener('click', popupClose);



function editForm (evt) {
  evt.preventDefault();

  profileName.textContent = name.value
  profileDescription.textContent = description.value

  popupClose()
}

form.addEventListener('submit', editForm)





