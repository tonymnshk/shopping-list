const itemForm = document.querySelector('#item-form')
const itemInput = document.querySelector('#item-input')
const itemList = document.querySelector('#item-list')
const clearBtn = document.querySelector('#clear')

function addItem(e) {
  e.preventDefault()

  const newItem = itemInput.value
  // Validate Input
  if (newItem === '') {
    alert('Please add an item')
    return
  }

  // Create list item
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(newItem))

  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button)

  itemList.appendChild(li)

  itemInput.value = ''

}

function createButton(classes) {
  const button = document.createElement('button')
  button.className = classes
  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button
}

function createIcon(classes) {
  const icon = document.createElement('i')
  icon.className = classes
  return icon
}

function removeItem(e) {
  //console.log(typeof (e.target.parentElement.className))
  //if (e.target.parentElement.className.includes('remove-item')) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove()
  }
}

function clearItems() {
  while (itemList.firstChild) {
    //itemList.removeChild(itemList.firstChild)
    itemList.firstChild.remove()
  }
}


// Even Listeners
itemForm.addEventListener('submit', addItem)

itemList.addEventListener('click', removeItem)

clearBtn.addEventListener('click', clearItems)

