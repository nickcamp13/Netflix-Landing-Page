const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function SelectItem(e) {
  removeShow();
  removeBorder();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show')
}

tabItems.forEach(item => item.addEventListener('click', SelectItem));