let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let editBtn = profile.querySelector('.profile__edit-btn');
let closeBtn = popup.querySelector('.popup__btn-close');
let form = popup.querySelector('form');
let name = popup.querySelector('.popup__input_el_name')
let description = popup.querySelector('.popup__input_el_description')
let profileName = profile.querySelector('.profile__name')
let profileDescription = profile.querySelector('.profile__description')

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





