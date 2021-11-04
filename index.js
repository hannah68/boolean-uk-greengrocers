const stores = [
  {
    id: "001-beetroot",
    name: "beetroot",
    price: 0.35,
    category: 'veg',
    quantity: 1
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.39,
    category: 'veg',
    quantity: 1
  },
  {
    id: "003-apple",
    name: "apple",
    price: 1.35,
    category: 'fruit',
    quantity: 1
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.75,
    category: 'fruit',
    quantity: 1
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.99,
    category: 'veg',
    quantity: 1
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.89,
    category: 'fruit',
    quantity: 1

  },
  {
    id: "007-bell-pepper",
    name: "bell-pepper",
    price: 1.75,
    category: 'veg',
    quantity: 1
    
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.95,
    category: 'fruit',
    quantity: 1
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 1.85,
    category: 'fruit',
    quantity: 1
  },
  {
    id: "0010-eggplant",
    name: "eggplant",
    price: 0.99,
    category: 'veg',
    quantity: 1
  }
]

//create cart item====================================
const cartitem = {
  items: [

  ]
}

const total = document.querySelector('.total-number');
// update total =======================================
const updateTotal = () => {
  const cartItemArr = cartitem.items
  if(cartItemArr.length === 0){
    total.innerText = "£" + 0;
  }else{
    const totalArr = cartItemArr.map(item => (item.price * item.quantity));
    console.log(totalArr);
    const sum = totalArr.reduce((curr, acc) => {
      return (curr + acc)
    })
    total.innerText = `£${sum.toFixed(2)}`;
  }
}


// reduce the number of items from cart ============================
const removeItemFromCart = (eachObj) => {
  const removeItem = document.querySelectorAll('.remove-btn');
  const quantity = document.querySelectorAll('.quantity-text');

  removeItem.forEach(btn => {
      btn.addEventListener('click', e => {
          if(e.target.parentNode.attributes[0].value === eachObj.name){
            if(eachObj.quantity > 1){
              eachObj.quantity -=1

              quantity.forEach(qty => {
                if(qty.id === eachObj.name){
                  qty.innerText = eachObj.quantity;
                }
              })
              updateTotal();
            }
            else if(eachObj.quantity <= 1){
              const idx = cartitem.items.indexOf(eachObj);
              cartitem.items.splice(idx,1);
              console.log(cartitem.items);
              e.target.parentNode.remove();
              updateTotal();
            }
          }
      })  
  })
}


// add to the number of items in the cart ================================
const addItemToCart = (eachObj) => {
  const addItem = document.querySelectorAll('.add-btn');
  const quantity = document.querySelectorAll('.quantity-text');
  
  addItem.forEach(btn => {
      btn.addEventListener('click', e => {
          if(e.target.parentNode.attributes[0].value === eachObj.name){
            eachObj.quantity +=1
            
            quantity.forEach(qty => {
              if(qty.id === eachObj.name){
                qty.innerText = Number(qty.innerText) + 1;
                updateTotal();
              }
            })
        }
      })
  })
}  


// display cart (creating cart)==================================================
const displayCart = (eachObj) => {
  const cartList = document.querySelector('.cart--item-list');
  const li = document.createElement('li');
  cartList.appendChild(li);

  li.innerHTML = `
    <img class="cart--item-icon" src="assets/icons/${eachObj.id}.svg" alt="${eachObj.name}"/>
    <p>${eachObj.name}</p>
    <button class="quantity-btn remove-btn center">-</button>
    <span class="quantity-text center" id=${eachObj.name}>${eachObj.quantity}</span>
    <button class="quantity-btn add-btn center">+</button>
    `;
    li.setAttribute('listId', `${eachObj.name}`)

  
  updateTotal();
  addItemToCart(eachObj);
  removeItemFromCart(eachObj);
}

// Add to cart function====================================
const cart = (arr) => {
  const addBtns = document.querySelectorAll('.add-button');
  addBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.id  === arr.name && !cartitem.items.includes(arr)){
          cartitem.items.push(arr);
          displayCart(arr);
        }
        // check if there is an item in cart already=> Don't add it to card, just add quantity
        else if(e.target.id  === arr.name && cartitem.items.includes(arr)){
          arr.quantity += 1
          const quantity = document.querySelectorAll('.quantity-text');
          quantity.forEach(qty => {
            if(qty.id === arr.name){
              qty.innerText = Number(qty.innerText) + 1;
              updateTotal();
            }
          })
        }
    })
  })
}

// display store function=====================================
const displayStore = (arrays) => {
  const itemList = document.querySelector('.store--item-list');
  for(let arr of arrays){
    const li = document.createElement('li');
    itemList.appendChild(li);

    li.innerHTML = `
    <div class="store--item-icon">
        <img src="assets/icons/${arr.id}.svg" alt="${arr.name}" />
    </div>
    <button class='add-button' id=${arr.name}>Add to cart</button>
    `
    cart(arr);
  }
}


// empty my store===========================
const emptyStore = () => {
  const itemList = document.querySelector('.store--item-list');
  const list = itemList.querySelectorAll('li');

  for(let i=0; i<list.length; i++){
    list[i].remove();
  }
}


// filter items in store====================
const filterMenu = document.querySelector('.filter-menu');
const filteredItemsFn = (stores) => {
  filterMenu.addEventListener('change', () => {
    emptyStore();
    
    if(filterMenu.value === 'item-veg'){
      const vegiArr = stores.filter(item => item.category === 'veg');
      displayStore(vegiArr);
      sortMenuFn(vegiArr)
    }
    if(filterMenu.value === 'item-fruit'){
      const fruitiArr = stores.filter(item => item.category === 'fruit');
      displayStore(fruitiArr);
      sortMenuFn(fruitiArr)
    }
    if(filterMenu.value === 'item-default'){
      const allItems = stores.map(item => item);
      displayStore(allItems);
      sortMenuFn(allItems)
    }
  })
}


// sort items in store
const sortMenuFn = (stores) => {
  const sortMenu = document.querySelector('.sort-menu');
  sortMenu.addEventListener('change', () => {
    emptyStore();

    if(sortMenu.value === 'item-lowest'){
      const lowestArr = stores.sort((a,b) => a.price - b.price);
      displayStore(lowestArr);
    }
    if(sortMenu.value === 'item-highest'){
      const highestArr = stores.sort((a,b) => b.price - a.price);
      displayStore(highestArr);
    }
    if(sortMenu.value === 'item-A'){
      const highestArr = stores.sort((a,b) =>{
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      });
      displayStore(highestArr);
    }
    if(sortMenu.value === 'item-B'){
      const highestArr = stores.sort((a,b) =>{
        if(a.name > b.name) { return -1; }
        if(a.name < b.name) { return 1; }
        return 0;
      });
      displayStore(highestArr);
    }
  })
}

// init the app=========================
function init(){
  filteredItemsFn(stores);
  sortMenuFn(stores);
}

init();
