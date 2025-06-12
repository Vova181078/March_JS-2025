// #HmvAfRQM
// - взяти https://dummyjson.com/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const divMain = document.createElement('div');

fetch('https://dummyjson.com/carts')
      .then(response => response.json())
      .then(cartsObject => {
          const {carts} = cartsObject;
          for (const cart of carts) {
              const divBlock = document.createElement('div');
            divBlock.classList.add('cart-block');
            const divInfo = document.createElement('div');
            divInfo.innerText = `
              "id": ${cart.id},
              "total": ${cart.total},
              "discountedTotal": ${cart.discountedTotal},
              "userId": ${cart.userId},
              "totalProducts": ${cart.totalProducts},
              "totalQuantity": ${cart.totalQuantity}
        
         `
          const ol = document.createElement('ol');
          for (const product of cart.products) {
              const li = document.createElement('li');
              li.innerText = `
              "id": ${product.id},
              "title": ${product.name},
              "price": ${product.price},
              "quantity": ${product.quantity}, 
              "total': ${product.total},
              "discountPercentage": ${product.discountPercentage},
              "discountedTotal": ${product.discountedTotal},
              
              `
              const img = document.createElement('img');
              img.src = product.thumbnail;
              li.appendChild(img);
              ol.appendChild(li);

          }
              divBlock.append(ol,divInfo);
              divMain.appendChild(divBlock);
          }

          document.body.appendChild(divMain);




      });