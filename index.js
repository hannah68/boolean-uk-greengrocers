// const stores = [
//   {
//     id: "001-beetroot",
//     name: "beetroot",
//     price: 0.35,
//     category: 'veg',
//     quantity: 1
//   },
//   {
//     id: "002-carrot",
//     name: "carrot",
//     price: 0.39,
//     category: 'veg',
//     quantity: 1
//   },
//   {
//     id: "003-apple",
//     name: "apple",
//     price: 1.35,
//     category: 'fruit',
//     quantity: 1
//   },
//   {
//     id: "004-apricot",
//     name: "apricot",
//     price: 0.75,
//     category: 'fruit',
//     quantity: 1
//   },
//   {
//     id: "005-avocado",
//     name: "avocado",
//     price: 0.99,
//     category: 'veg',
//     quantity: 1
//   },
//   {
//     id: "006-bananas",
//     name: "bananas",
//     price: 0.89,
//     category: 'fruit',
//     quantity: 1

//   },
//   {
//     id: "007-bell-pepper",
//     name: "bell-pepper",
//     price: 1.75,
//     category: 'veg',
//     quantity: 1
    
//   },
//   {
//     id: "008-berry",
//     name: "berry",
//     price: 0.95,
//     category: 'fruit',
//     quantity: 1
//   },
//   {
//     id: "009-blueberry",
//     name: "blueberry",
//     price: 1.85,
//     category: 'fruit',
//     quantity: 1
//   },
//   {
//     id: "0010-eggplant",
//     name: "eggplant",
//     price: 0.99,
//     category: 'veg',
//     quantity: 1
//   }
// ]
// =======================

// function renderStore(eachItem){
//   const itemList = document.querySelector('.store--item-list');
//   const li = document.createElement('li');
//   const storeeItemDiv = document.createElement("div");
//   const image = document.createElement("img");
//   const addToCartButton = document.createElement("button");
//   storeeItemDiv.setAttribute("class", "store--item-icon");
//   image.src = `assets/icons/${eachItem.id}.svg`;
//   addToCartButton.innerText = "Add to cart";

//   addToCartButton.addEventListener("click", (e) => {
//     addToCart(eachItem);
//   });

//   storeeItemDiv.appendChild(image);
//   li.append(storeeItemDiv, addToCartButton);
//   itemList.appendChild(li);
// }

// const cart = {
//   items: []
// };

// function addToCart(item){
//   cartItemsArr = cart.items;
//   for(let i=0; i< cartItemsArr.length; i++){
//     if(cartItemsArr[i].name === item.name){
//       cartItemsArr[i].quantity +=1
//     }
//   }
// }

// console.log(cart);

// function createStore(stores){
//   for(let i=0; i<stores.length; i++){
//     renderStore(stores[i])
//   }
// }

// function createCart() {
//   for (let i = 0; i < cart.items.length; i++) {
//     renderCartItem(cart.items[i]);
//   }
// }





// const emptyStore = () => {
//   const itemList = document.querySelector('.store--item-list');
//   const list = itemList.querySelectorAll('li');

//   for(let i=0; i<list.length; i++){
//     list[i].remove();
//   }
// }

// const filterMenu = document.querySelector('.filter-menu');
// // Show items in store
// const filteredItemsFn = (stores) => {
//   filterMenu.addEventListener('change', () => {
//     emptyStore();
    
//     if(filterMenu.value === 'item-veg'){
//       const vegiArr = stores.filter(item => item.category === 'veg');
//       createStore();
//     }
//     if(filterMenu.value === 'item-fruit'){
//       const fruitiArr = stores.filter(item => item.category === 'fruit');
//       createStore()
//     }
//     if(filterMenu.value === 'item-default'){
//       const allItems = stores.map(item => item);
//       createStore()
//     }
//   })
  
// }


// // // sort================================================

// // // Show items in store
// const sortMenuFn = (stores) => {
//   const sortMenu = document.querySelector('.sort-menu');
//   sortMenu.addEventListener('change', () => {
//     emptyStore();

//     if(sortMenu.value === 'item-lowest'){
//       const lowestArr = stores.sort((a,b) => a.price - b.price);
//       createStore()
//     }
//     if(sortMenu.value === 'item-highest'){
//       const highestArr = stores.sort((a,b) => b.price - a.price);
//       createStore()
//     }
//     if(sortMenu.value === 'item-A'){
//       const highestArr = stores.sort((a,b) =>{
//         if(a.name < b.name) { return -1; }
//         if(a.name > b.name) { return 1; }
//         return 0;
//       });
//       createStore()
//     }
//     if(sortMenu.value === 'item-B'){
//       const highestArr = stores.sort((a,b) =>{
//         if(a.name > b.name) { return -1; }
//         if(a.name < b.name) { return 1; }
//         return 0;
//       });
//       createStore()
//     }
//   })
// }


// function init(){
//   filteredItemsFn(stores);
//   sortMenuFn(stores);
// }

// init();



// my changed code====================================


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
// =======================


// /====================================
const cartitem = {
  items: [

  ]
}

const total = document.querySelector('.total-number');
// =======================================
const updateTotal = () => {
  const cartItemArr = cartitem.items
  console.log(cartItemArr);
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


// remove============================
const removeItemFromCart = (eachObj) => {
  const removeItem = document.querySelectorAll('.remove-btn');
  const quantity = document.querySelectorAll('.quantity-text');

  removeItem.forEach(btn => {
      btn.addEventListener('click', e => {
          if(e.target.parentNode.attributes[0].value === eachObj.name){
            if(eachObj.quantity > 1){
              eachObj.quantity -=1
              // updateTotal();

              quantity.forEach(qty => {
                if(qty.id === eachObj.name){
                  qty.innerText = eachObj.quantity;
                  
                }
              })

              updateTotal();
            }
            else if(eachObj.quantity <= 1){
              const idx = cartitem.items.indexOf(eachObj);
              // console.log(idx);
              cartitem.items.splice(idx,1);
              console.log(cartitem.items);
              e.target.parentNode.remove();
              updateTotal();
              
            }
          }
      })  
  })
}


// add function================================
function addItemToCart(eachObj){
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


// ==================================================

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
  addItemToCart(eachObj)
  removeItemFromCart(eachObj);
}

// card function====================================
const cart = (arr) => {
  const addBtns = document.querySelectorAll('.add-button');
  addBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.id  === arr.name && !cartitem.items.includes(arr)){
          cartitem.items.push(arr);
          displayCart(arr);
        }
        // if(cartitem.items.includes(arr)){
        //   const me = cartitem.items.find(el => {
        //     return el.name === arr.name
        //   })
        //   console.log(me);
        // }
    })
  })
}

// display =====================================
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

console.log(cartitem.items);































// const stores = [
//   {
//     id: "001-beetroot",
//     name: "beetroot",
//     price: 0.35,
//     category: 'veg',
//     quantity: 1
//   },
//   {
//     id: "002-carrot",
//     name: "carrot",
//     price: 0.39,
//     category: 'veg',
//     quantity: 1
//   },
//   {
//     id: "003-apple",
//     name: "apple",
//     price: 1.35,
//     category: 'fruit',
//     quantity: 1
//   },
//   {
//     id: "004-apricot",
//     name: "apricot",
//     price: 0.75,
//     category: 'fruit',
//     quantity: 1
//   },
//   {
//     id: "005-avocado",
//     name: "avocado",
//     price: 0.99,
//     category: 'veg',
//     quantity: 1
//   },
//   {
//     id: "006-bananas",
//     name: "bananas",
//     price: 0.89,
//     category: 'fruit',
//     quantity: 1

//   },
//   {
//     id: "007-bell-pepper",
//     name: "bell-pepper",
//     price: 1.75,
//     category: 'veg',
//     quantity: 1
    
//   },
//   {
//     id: "008-berry",
//     name: "berry",
//     price: 0.95,
//     category: 'fruit',
//     quantity: 1
//   },
//   {
//     id: "009-blueberry",
//     name: "blueberry",
//     price: 1.85,
//     category: 'fruit',
//     quantity: 1
//   },
//   {
//     id: "0010-eggplant",
//     name: "eggplant",
//     price: 0.99,
//     category: 'veg',
//     quantity: 1
//   }
// ]
// // =======================

// const updateTotal = (arr) => {
//   console.log(arr);
//   const total = document.querySelector('.total-number');
//   const totalArr = arr.map(item => (item.price * item.quantity));
//   console.log(totalArr);
//   const sum = totalArr.reduce((curr, acc) => {
//     return (curr + acc)
//   })
//   total.innerText = `£${sum.toFixed(2)}`;
// }
// // =======================================

// function add(card){
//   const addItem = document.querySelectorAll('.add-btn');
//   const quantity = document.querySelectorAll('.quantity-text');

//   addItem.forEach(btn => {
//       btn.addEventListener('click', e => {
//         for(let c of card){
//           if(e.target.parentNode.attributes[0].value === c.name){
//             quantity.forEach(qty => {
//               if(qty.id === c.name){
//                 qty.innerText = Number(qty.innerText) + 1;
//                 c.quantity +=1
//                 console.log(qty.innerText);
//                 updateTotal(card);
//               }

//             })
//           }
//         }
//       })
//   })
// }  
    

// // remove============================
// const removeItemFromCart = (arr) => {
//   const removeItem = document.querySelectorAll('.remove-btn');
//   const quantity = document.querySelectorAll('.quantity-text');
//   console.log(arr);
//   removeItem.forEach(btn => {
//     btn.addEventListener('click', e => {
//       for(let a of arr){
//         if(e.target.parentNode.attributes[0].value === a.name){
//           if(a.quantity > 1){
//             a.quantity -=1
//             console.log(a.quantity);
//             quantity.forEach(qty => {
//               if(qty.id === a.name){
//                 qty.innerText = a.quantity
//               }
//               else if(a.quantity <= 1){
//                 const idx = arr.indexOf(a);
//                 console.log(idx);
//                 arr.splice(idx,1);
//                 e.target.parentNode.remove(); 

//               }
//             })
//           }
//         }
//       }
//     })
//   })
// }

// // /====================================
// const cartitem = {
//   items: [

//   ]
// }


// console.log(cartitem);
// const cart = (arrays) => {
//   const addBtns = document.querySelectorAll('.add-button');
//   addBtns.forEach(btn => {
//     btn.addEventListener('click', e => {
//       for(let arr of arrays){
//         if(e.target.id  === arr.name){
//           cartitem.items.push(arr);
//           addItemToCart(cartitem.items);
//         }
//       }
//       // cartitem.items.push(arrays[0]);
//       // addItemToCart(cartitem.items);
      
//     })
//   })
// }





// // 
// // ==================================================

// const addItemToCart = (items) => {
//   const cartList = document.querySelector('.cart--item-list');
//   const li = document.createElement('li');
//   cartList.appendChild(li);

//   for(let item of items){
//     li.innerHTML = `
//     <img class="cart--item-icon" src="assets/icons/${item.id}.svg" alt="${item.name}"/>
//     <p>${item.name}</p>
//     <button class="quantity-btn remove-btn center">-</button>
//     <span class="quantity-text center" id=${item.name}>${item.quantity}</span>
//     <button class="quantity-btn add-btn center">+</button>
//     `;
//     li.setAttribute('listId', `${item.name}`)

//   }
 
//   add(items)
//   removeItemFromCart(items);
// }

// // display =====================================
// const displayStore = (arrays) => {
//   console.log(arrays);
//   for(let arr of arrays){
//     const itemList = document.querySelector('.store--item-list');
//     const li = document.createElement('li');
//     itemList.appendChild(li);

//     li.innerHTML = `
//     <div class="store--item-icon">
//         <img src="assets/icons/${arr.id}.svg" alt="${arr.name}" />
//     </div>
//     <button class='add-button' id=${arr.name}>Add to cart</button>
//     `
//   }
//   cart(arrays);
// }


// // empty my store===========================
// const emptyStore = () => {
//   const itemList = document.querySelector('.store--item-list');
//   const list = itemList.querySelectorAll('li');

//   for(let i=0; i<list.length; i++){
//     list[i].remove();
//   }
// }



// // filter items in store====================
// const filterMenu = document.querySelector('.filter-menu');
// const filteredItemsFn = (stores) => {
//   filterMenu.addEventListener('change', () => {
//     emptyStore();
    
//     if(filterMenu.value === 'item-veg'){
//       const vegiArr = stores.filter(item => item.category === 'veg');
//       displayStore(vegiArr);
//     }
//     if(filterMenu.value === 'item-fruit'){
//       const fruitiArr = stores.filter(item => item.category === 'fruit');
//       displayStore(fruitiArr);
//     }
//     if(filterMenu.value === 'item-default'){
//       const allItems = stores.map(item => item);
//       displayStore(allItems);
//     }
//   })
  
// }



// // sort items in store
// const sortMenuFn = (stores) => {
//   const sortMenu = document.querySelector('.sort-menu');
//   sortMenu.addEventListener('change', () => {
//     emptyStore();

//     if(sortMenu.value === 'item-lowest'){
//       const lowestArr = stores.sort((a,b) => a.price - b.price);
//       displayStore(lowestArr);
//     }
//     if(sortMenu.value === 'item-highest'){
//       const highestArr = stores.sort((a,b) => b.price - a.price);
//       displayStore(highestArr);
//     }
//     if(sortMenu.value === 'item-A'){
//       const highestArr = stores.sort((a,b) =>{
//         if(a.name < b.name) { return -1; }
//         if(a.name > b.name) { return 1; }
//         return 0;
//       });
//       displayStore(highestArr);
//     }
//     if(sortMenu.value === 'item-B'){
//       const highestArr = stores.sort((a,b) =>{
//         if(a.name > b.name) { return -1; }
//         if(a.name < b.name) { return 1; }
//         return 0;
//       });
//       displayStore(highestArr);
//     }
//   })
// }

// // init the app=========================
// function init(){
//   filteredItemsFn(stores);
//   sortMenuFn(stores);
// }

// init();


