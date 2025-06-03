document.addEventListener('DOMContentLoaded', function() {
    // Данные товаров
    const products = [
        {
            id: 1,
            title: "Холодильник Samsung RB37A52N0SA",
            brand: "Samsung",
            price: 54990,
            image: "images/1.jpg",
            description: "Двухкамерный холодильник с системой No Frost, объемом 367 л (холодильная камера - 272 л, морозильная камера - 95 л). Класс энергопотребления A+, уровень шума - 38 дБ.",
            specs: {
                "Тип": "Двухкамерный",
                "No Frost": "Да",
                "Общий объем": "367 л",
                "Энергопотребление": "A+",
                "Уровень шума": "38 дБ",
                "Цвет": "Серебристый",
                "Гарантия": "3 года"
            }
        },
        {
            id: 2,
            title: "Стиральная машина LG F2J3NS0W",
            brand: "LG",
            price: 42990,
            image: "images/2.jpg",
            description: "Стиральная машина с фронтальной загрузкой, вместимостью 6 кг, класс энергопотребления A+++, максимальная скорость отжима - 1200 об/мин. Технология Direct Drive для тихой работы.",
            specs: {
                "Тип загрузки": "Фронтальная",
                "Вместимость": "6 кг",
                "Энергопотребление": "A+++",
                "Отжим": "1200 об/мин",
                "Габариты": "85x60x45 см",
                "Цвет": "Белый",
                "Гарантия": "2 года"
            }
        },
        {
            id: 3,
            title: "Телевизор Sony KD-55X81J",
            brand: "Sony",
            price: 79990,
            image: "images/3.jpg",
            description: "Телевизор с диагональю 55 дюймов, разрешение 4K UHD, технология HDR, процессор X1, операционная система Android TV. Поддержка Dolby Vision и Dolby Atmos.",
            specs: {
                "Диагональ": "55 дюймов",
                "Разрешение": "3840x2160 (4K UHD)",
                "HDR": "Да",
                "Smart TV": "Android TV",
                "Частота": "100 Гц",
                "Гарантия": "3 года"
            }
        },
        {
            id: 4,
            title: "Посудомоечная машина Bosch SMS6ECI01E",
            brand: "Bosch",
            price: 45990,
            image: "images/4.jpg",
            description: "Встраиваемая посудомоечная машина с вместимостью 13 комплектов посуды, класс энергопотребления A++, уровень шума - 44 дБ. 6 программ мойки, включая интенсивную и эко-программы.",
            specs: {
                "Тип": "Встраиваемая",
                "Вместимость": "13 комплектов",
                "Энергопотребление": "A++",
                "Уровень шума": "44 дБ",
                "Программы": "6",
                "Гарантия": "2 года"
            }
        },
        {
            id: 5,
            title: "Микроволновая печь Panasonic NN-ST34HZRU",
            brand: "Panasonic",
            price: 12990,
            image: "images/5.jpg",
            description: "Микроволновая печь с объемом 23 л, мощность 800 Вт, гриль, инверторная технология, 5 уровней мощности, автоматические программы приготовления.",
            specs: {
                "Объем": "23 л",
                "Мощность": "800 Вт",
                "Гриль": "Да",
                "Автопрограммы": "Да",
                "Цвет": "Серебристый",
                "Гарантия": "1 год"
            }
        },
        {
            id: 6,
            title: "Пылесос Dyson V11 Absolute",
            brand: "Dyson",
            price: 59990,
            image: "images/6.jpg",
            description: "Беспроводной пылесос с технологией Hyperdymium, время работы до 60 минут, 3 режима мощности, ЖК-дисплей, насадки для разных типов уборки.",
            specs: {
                "Тип": "Беспроводной",
                "Время работы": "до 60 мин",
                "Пылесборник": "0.76 л",
                "Режимы": "3",
                "Вес": "2.97 кг",
                "Гарантия": "2 года"
            }
        },
        {
            id: 7,
            title: "Кофемашина DeLonghi Eletta Explore ECAM 45.760.W",
            brand: "DeLonghi",
            price: 89990,
            image: "images/7.jpg",
            description: "Автоматическая кофемашина с возможностью приготовления капучино, технология LatteCrema System, 13 уровней помола, 4 пользовательских профиля.",
            specs: {
                "Тип": "Автоматическая",
                "Капучинатор": "Да",
                "Помол": "13 уровней",
                "Емкость воды": "1.8 л",
                "Емкость зерен": "300 г",
                "Гарантия": "2 года"
            }
        },
        {
            id: 8,
            title: "Кондиционер Ballu BSEI-12HN1",
            brand: "Ballu",
            price: 34990,
            image: "images/8.jpg",
            description: "Инверторный кондиционер с мощностью охлаждения 3.5 кВт, площадь обслуживания до 35 кв.м, класс энергопотребления A++, уровень шума - 19 дБ.",
            specs: {
                "Тип": "Инверторный",
                "Мощность": "3.5 кВт",
                "Площадь": "до 35 кв.м",
                "Энергопотребление": "A++",
                "Уровень шума": "19 дБ",
                "Гарантия": "3 года"
            }
        }
    ];

    // Элементы DOM
    const productGrid = document.getElementById('product-grid');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.querySelector('.cart-count');
    const productModal = document.getElementById('product-modal');
    const modalProductDetails = document.getElementById('modal-product-details');
    const closeModalButtons = document.querySelectorAll('.close');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutForm = document.getElementById('checkout-form');
    const orderSuccessModal = document.getElementById('order-success-modal');
    const orderNumber = document.getElementById('order-number');
    const continueShoppingBtn = document.querySelector('.continue-shopping-btn');

    // Корзина
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Отображение товаров
    function displayProducts() {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x300?text=Изображение+недоступно'">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-price">${product.price.toLocaleString()} ₽</p>
                    <div class="product-actions">
                        <button class="details-btn" data-id="${product.id}">Подробнее</button>
                        <button class="add-to-cart-btn" data-id="${product.id}">В корзину</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Обработчики кнопок
        document.querySelectorAll('.details-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                showProductDetails(productId);
            });
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }

    // Показать детали товара
    function showProductDetails(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        modalProductDetails.innerHTML = `
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x300?text=Изображение+недоступно'">
            </div>
            <div class="modal-product-info">
                <h2 class="modal-product-title">${product.title}</h2>
                <p class="modal-product-brand">${product.brand}</p>
                <p class="modal-product-price">${product.price.toLocaleString()} ₽</p>
                <p class="modal-product-description">${product.description}</p>
                <div class="modal-product-specs">
                    <h4>Характеристики:</h4>
                    ${Object.entries(product.specs)
                        .map(([key, value]) => `
                            <div class="spec-item">
                                <span class="spec-name">${key}:</span>
                                <span class="spec-value">${value}</span>
                            </div>
                        `).join('')}
                </div>
                <div class="modal-product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}">Добавить в корзину</button>
                </div>
            </div>
        `;

        // Добавляем обработчик для кнопки в модальном окне
        modalProductDetails.querySelector('.add-to-cart-btn').addEventListener('click', () => {
            addToCart(productId);
        });

        productModal.style.display = 'block';
    }

    // Добавить товар в корзину
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                brand: product.brand,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        updateCart();
        showNotification('Товар добавлен в корзину');
    }

    // Удалить товар из корзины
    function removeFromCart(productId) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCart();
            showNotification('Товар удален из корзины');
        }
    }

    // Обновить количество товара
    function updateQuantity(productId, newQuantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, newQuantity);
            updateCart();
        }
    }

    // Обновить корзину
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        if (cartModal.style.display === 'block') {
            renderCartItems();
        }
    }

    // Обновить счетчик корзины
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Показать уведомление
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Отобразить товары в корзине
    function renderCartItems() {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Ваша корзина пуста</p>';
            cartTotal.textContent = 'Итого: 0 ₽';
            return;
        }

        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-brand">${item.brand}</p>
                    <p class="cart-item-price">${item.price.toLocaleString()} ₽</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-total">${itemTotal.toLocaleString()} ₽</div>
                <button class="remove-item-btn" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = `Итого: ${total.toLocaleString()} ₽`;

        // Добавляем обработчики для кнопок в корзине
        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item && item.quantity > 1) {
                    updateQuantity(productId, item.quantity - 1);
                }
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateQuantity(productId, item.quantity + 1);
                }
            });
        });

        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const newQuantity = parseInt(e.target.value) || 1;
                updateQuantity(productId, newQuantity);
            });
        });

        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }

    // Оформить заказ
    function checkout() {
        if (cart.length === 0) {
            showNotification('Ваша корзина пуста');
            return;
        }

        checkoutModal.style.display = 'block';
    }

    // Отправить заказ
    function submitOrder(event) {
        event.preventDefault();
        
        // В реальном приложении здесь была бы отправка данных на сервер
        const orderData = {
            customer: {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value
            },
            delivery: document.querySelector('input[name="delivery"]:checked').value,
            payment: document.querySelector('input[name="payment"]:checked').value,
            comments: document.getElementById('comments').value,
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            date: new Date().toISOString(),
            orderNumber: Math.floor(100000 + Math.random() * 900000) // Генерируем случайный номер заказа
        };

        // Очищаем корзину
        cart = [];
        updateCart();
        
        // Закрываем модальные окна
        checkoutModal.style.display = 'none';
        
        // Показываем окно успешного оформления
        orderNumber.textContent = orderData.orderNumber;
        orderSuccessModal.style.display = 'block';
        
        // В реальном приложении здесь можно сохранить заказ в localStorage или отправить на сервер
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    // Инициализация
    function init() {
        displayProducts();
        updateCartCount();

        // Обработчики модальных окон
        cartIcon.addEventListener('click', () => {
            renderCartItems();
            cartModal.style.display = 'block';
        });

        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                productModal.style.display = 'none';
                cartModal.style.display = 'none';
                checkoutModal.style.display = 'none';
                orderSuccessModal.style.display = 'none';
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target === productModal) {
                productModal.style.display = 'none';
            }
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
            if (e.target === checkoutModal) {
                checkoutModal.style.display = 'none';
            }
            if (e.target === orderSuccessModal) {
                orderSuccessModal.style.display = 'none';
            }
        });

        // Обработчики кнопок
        checkoutBtn.addEventListener('click', checkout);
        checkoutForm.addEventListener('submit', submitOrder);
        continueShoppingBtn.addEventListener('click', () => {
            orderSuccessModal.style.display = 'none';
        });
    }

    init();
});

const style = document.createElement('style');
style.textContent = `
.notification {
position: fixed;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
background-color: #2ecc71;
color: white;
padding: 15px 25px;
border-radius: 4px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
opacity: 0;
transition: opacity 0.3s ease;
z-index: 1001;
}

.notification.show {
    opacity: 1;
}
`;
document.head.appendChild(style);

const notification = document.createElement('div');
notification.className = 'notification';
notification.textContent = 'Товар успешно добавлен в корзину!';
document.body.appendChild(notification); 