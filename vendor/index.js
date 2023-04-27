let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let editBtn = profile.querySelector('.profile__edit-btn');
let closeBtn = popup.querySelector('.popup__btn-close');

function popupOpen() {
  popup.classList.add('popup_opened');
}

editBtn.addEventListener('click', popupOpen);

function popupClose() {
  popup.classList.remove('popup_opened');
}

closeBtn.addEventListener('click', popupClose);


let profileName = profile.querySelector('.profile__name')

function editForm (evt) {
  evt.preventDefault();
  
  let name = popup.querySelector('.popup__name')
  let description = popup.querySelector('.popup__description')

  let profileName = profile.querySelector('.profile__name')
  let profileDescription = profile.querySelector('.profile__description')

  profileName.textContent = name.value
  profileDescription.textContent = description.value

  popupClose()
}

popup.addEventListener('submit', editForm)





