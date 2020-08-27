//console.log('connect!')
let form = document.getElementById('addForm');
let items = document.getElementById('items');
let filter = document.getElementById('filter');

// form listener
form.addEventListener('submit',addItem);
//remove event
items.addEventListener('click', removeItem);
// filter events
filter.addEventListener('keyup',filterItem);
// addItem function
function addItem(e){
  e.preventDefault();
  // get input id
  let newItem = document.getElementById('item').value;
  // create new element called list
  let li = document.createElement('li');
  // add class to the new list
  li.className = 'list-group-item';
  // add text to the list
  let text = document.createTextNode(newItem);
  //append to the list
  li.appendChild(text);
  //add delete button to list
  let deleteBtn = document.createElement('button') ;
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  // append list to the itemsList
  items.appendChild(li);

}
function removeItem(e){
  if(e.target.classList.contains('delete')){
    let li = e.target.parentElement;
    items.removeChild(li);
  }
}
function filterItem(e){
  // convert to lowercase
  let text = e.target.value.toLowerCase();
  // get itms from list
  let itemList = items.getElementsByTagName('li');
  // convert to array the list
  Array.from(itemList).forEach(item =>{
    let itmName = item.firstChild.textContent;
    if(itmName.toLowerCase().indexOf(text)!= -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })

}