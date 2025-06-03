document.addEventListener('DOMContentLoaded', function() {
    // Данные товаров
    const products = [
        // Холодильники
        {
            id: 1,
            title: "Холодильник Samsung RF48A4000B4",
            brand: "Samsung",
            price: 189999,
            image: "images/samsung-rf48a4000b4.jpg",
            description: "4-дверный холодильник с технологией Twin Cooling Plus",
            specs: {
                "Тип": "4-дверный",
                "Общий объем": "486 л",
                "Система разморозки": "No Frost",
                "Класс энергопотребления": "A++",
                "Цвет": "Черный"
            }
        },
        {
            id: 2,
            title: "Холодильник LG DoorCooling+ GC-B247SVDC",
            brand: "LG",
            price: 159990,
            image: "images/lg-gc-b247svdc.jpg",
            description: "Двухдверный холодильник с инверторным компрессором",
            specs: {
                "Тип": "Двухдверный",
                "Общий объем": "384 л",
                "Система разморозки": "No Frost",
                "Класс энергопотребления": "A++",
                "Цвет": "Серебристый"
            }
        },
        // Стиральные машины
        {
            id: 3,
            title: "Стиральная машина Bosch WAV28L90ME",
            brand: "Bosch",
            price: 129990,
            image: "images/bosch-wav28l90me.jpg",
            description: "Стиральная машина с технологией i-DOS и Home Connect",
            specs: {
                "Загрузка": "9 кг",
                "Скорость отжима": "1400 об/мин",
                "Класс энергопотребления": "A+++",
                "Технологии": "i-DOS, Home Connect",
                "Цвет": "Белый"
            }
        },
        {
            id: 4,
            title: "Стиральная машина Miele WWG 660 WCS",
            brand: "Miele",
            price: 159990,
            image: "images/miele-wwg660wcs.jpg",
            description: "Стиральная машина с технологией TwinDos",
            specs: {
                "Загрузка": "9 кг",
                "Скорость отжима": "1400 об/мин",
                "Класс энергопотребления": "A+++",
                "Технологии": "TwinDos, PowerWash",
                "Цвет": "Белый"
            }
        },
        // Телевизоры
        {
            id: 5,
            title: "Телевизор LG OLED65G3",
            brand: "LG",
            price: 299990,
            image: "images/lg-oled65g3.jpg",
            description: "65-дюймовый OLED телевизор с процессором α9 Gen6",
            specs: {
                "Диагональ": "65 дюймов",
                "Разрешение": "4K (3840x2160)",
                "Технология": "OLED evo",
                "HDR": "Dolby Vision IQ",
                "Частота": "120 Гц"
            }
        },
        {
            id: 6,
            title: "Телевизор Samsung QE75QN900C",
            brand: "Samsung",
            price: 849990,
            image: "images/samsung-qe75qn900c.jpg",
            description: "75-дюймовый Neo QLED 8K телевизор",
            specs: {
                "Диагональ": "75 дюймов",
                "Разрешение": "8K (7680x4320)",
                "Технология": "Neo QLED",
                "HDR": "HDR10+",
                "Частота": "120 Гц"
            }
        },
        // Кухонная техника
        {
            id: 7,
            title: "Кофемашина De'Longhi ECAM650.85.MS",
            brand: "De'Longhi",
            price: 199990,
            image: "images/delonghi-ecam650-85ms.jpg",
            description: "Автоматическая кофемашина с системой LatteCrema",
            specs: {
                "Тип": "Автоматическая",
                "Давление": "19 бар",
                "Объем контейнера для зерен": "400 г",
                "Дисплей": "Цветной сенсорный",
                "Цвет": "Серебристый"
            }
        },
        {
            id: 8,
            title: "Посудомоечная машина Bosch SMS8ZDI48R",
            brand: "Bosch",
            price: 129990,
            image: "images/bosch-sms8zdi48r.jpg",
            description: "Посудомоечная машина с системой PerfectDry",
            specs: {
                "Вместимость": "14 комплектов",
                "Расход воды": "9.5 л",
                "Уровень шума": "42 дБ",
                "Программы": "8 программ",
                "Цвет": "Нержавеющая сталь"
            }
        },
        // Климатическая техника
        {
            id: 9,
            title: "Кондиционер Daikin FTXZ50N/RXZ50N",
            brand: "Daikin",
            price: 199990,
            image: "images/daikin-ftxz50n.jpg",
            description: "Инверторный кондиционер с технологией Ururu Sarara",
            specs: {
                "Мощность охлаждения": "5 кВт",
                "Энергоэффективность": "A+++",
                "Уровень шума": "19 дБ",
                "Режимы": "Охлаждение, обогрев, осушение",
                "Площадь помещения": "до 50 м²"
            }
        },
        {
            id: 10,
            title: "Очиститель воздуха Dyson Pure Humidify+Cool PH03",
            brand: "Dyson",
            price: 69990,
            image: "images/dyson-ph03.jpg",
            description: "Очиститель воздуха с функцией увлажнения и охлаждения",
            specs: {
                "Площадь очистки": "до 81 м²",
                "Фильтрация": "HEPA H13",
                "Уровень шума": "от 35 дБ",
                "Управление": "Пульт ДУ, приложение",
                "Цвет": "Белый/Серебристый"
            }
        },
        // Пылесосы
        {
            id: 31,
            title: "Пылесос Dyson V15 Detect Absolute",
            brand: "Dyson",
            price: 69990,
            image: "images/dyson-v15-detect.jpg",
            description: "Беспроводной пылесос с лазерным детектором пыли и умным дисплеем",
            specs: {
                "Тип": "Вертикальный беспроводной",
                "Мощность": "660 Вт",
                "Время работы": "до 60 минут",
                "Объем контейнера": "0.76 л",
                "Фильтрация": "HEPA",
                "Вес": "3.1 кг"
            }
        },
        {
            id: 32,
            title: "Пылесос Samsung Jet Bot AI+ VR50T95735W",
            brand: "Samsung",
            price: 129990,
            image: "images/samsung-jetbot-ai.jpg",
            description: "Робот-пылесос с искусственным интеллектом и автоматической станцией очистки",
            specs: {
                "Тип": "Робот-пылесос",
                "Мощность всасывания": "5W (30W турбо)",
                "Время работы": "до 90 минут",
                "Объем контейнера": "0.3 л",
                "Навигация": "LiDAR + AI",
                "Особенности": "Автоматическая станция очистки"
            }
        },
        // Микроволновые печи
        {
            id: 33,
            title: "Микроволновая печь Panasonic NN-GD38HS",
            brand: "Panasonic",
            price: 34990,
            image: "images/panasonic-nn-gd38hs.jpg",
            description: "Микроволновая печь с грилем и инверторной технологией",
            specs: {
                "Объем": "23 л",
                "Мощность": "1000 Вт",
                "Гриль": "1100 Вт",
                "Управление": "Электронное",
                "Программы": "18 автоматических",
                "Особенности": "Инверторная технология"
            }
        },
        {
            id: 34,
            title: "Микроволновая печь Samsung MC35R8088LC",
            brand: "Samsung",
            price: 49990,
            image: "images/samsung-mc35r8088lc.jpg",
            description: "Умная микроволновая печь с конвекцией и грилем",
            specs: {
                "Объем": "35 л",
                "Мощность": "1250 Вт",
                "Конвекция": "1900 Вт",
                "Гриль": "1500 Вт",
                "Управление": "Сенсорное",
                "Особенности": "Hot Blast технология"
            }
        },
        // Кухонные комбайны
        {
            id: 35,
            title: "Кухонный комбайн Kenwood Cooking Chef XL KCL95.424SI",
            brand: "Kenwood",
            price: 199990,
            image: "images/kenwood-kcl95-424si.jpg",
            description: "Многофункциональный кухонный комбайн с функцией приготовления и индукционным нагревом",
            specs: {
                "Мощность": "1500 Вт",
                "Объем чаши": "6.7 л",
                "Температура нагрева": "20-180°C",
                "Скорости": "13",
                "Программы": "24",
                "Особенности": "Весы, таймер, WiFi"
            }
        },
        {
            id: 36,
            title: "Кухонный комбайн Bosch OptiMUM MUM9AX5S00",
            brand: "Bosch",
            price: 89990,
            image: "images/bosch-mum9ax5s00.jpg",
            description: "Мощный кухонный комбайн с автоматическими программами и весами",
            specs: {
                "Мощность": "1500 Вт",
                "Объем чаши": "5.5 л",
                "Скорости": "7",
                "Программы": "15",
                "Особенности": "SensorControl Plus",
                "Комплектация": "Более 10 насадок"
            }
        },
        // Обогреватели
        {
            id: 37,
            title: "Обогреватель Dyson Pure Hot+Cool HP07",
            brand: "Dyson",
            price: 54990,
            image: "images/dyson-hp07.jpg",
            description: "Умный обогреватель с функцией очистки воздуха и охлаждения",
            specs: {
                "Мощность": "2000 Вт",
                "Площадь обогрева": "до 35 м²",
                "Фильтрация": "HEPA H13 + Угольный",
                "Управление": "Пульт ДУ + WiFi",
                "Режимы": "Обогрев, охлаждение, очистка",
                "Особенности": "Мониторинг качества воздуха"
            }
        },
        {
            id: 38,
            title: "Обогреватель Ballu BEP/EXT-2000",
            brand: "Ballu",
            price: 19990,
            image: "images/ballu-bep-ext-2000.jpg",
            description: "Инфракрасный обогреватель с защитой от перегрева",
            specs: {
                "Мощность": "2000 Вт",
                "Площадь обогрева": "до 20 м²",
                "Тип обогрева": "Инфракрасный",
                "Монтаж": "Настенный/потолочный",
                "Защита": "IP55",
                "Особенности": "Для внутреннего и внешнего использования"
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

    // Добавляем функцию фильтрации товаров
    function filterProducts(category) {
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => {
                switch(category) {
                    case 'refrigerators':
                        return product.title.toLowerCase().includes('холодильник');
                    case 'washers':
                        return product.title.toLowerCase().includes('стиральная');
                    case 'tvs':
                        return product.title.toLowerCase().includes('телевизор');
                    case 'vacuum':
                        return product.title.toLowerCase().includes('пылесос');
                    case 'microwave':
                        return product.title.toLowerCase().includes('микроволнов');
                    case 'food_processors':
                        return product.title.toLowerCase().includes('комбайн');
                    case 'coffee_machines':
                        return product.title.toLowerCase().includes('кофемашин');
                    case 'dishwashers':
                        return product.title.toLowerCase().includes('посудомоечн');
                    case 'air_conditioners':
                        return product.title.toLowerCase().includes('кондиционер');
                    case 'air_purifiers':
                        return product.title.toLowerCase().includes('очиститель');
                    case 'heaters':
                        return product.title.toLowerCase().includes('обогреватель');
                    default:
                        return true;
                }
            });

        displayFilteredProducts(filteredProducts);
    }

    // Функция отображения отфильтрованных товаров
    function displayFilteredProducts(filteredProducts) {
        productGrid.innerHTML = '';
        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<div class="no-products">Товары не найдены</div>';
            return;
        }
        
        filteredProducts.forEach(product => {
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

        // Обновляем обработчики кнопок
        attachProductButtonHandlers();
    }

    // Функция прикрепления обработчиков к кнопкам товаров
    function attachProductButtonHandlers() {
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

    // Модифицируем функцию init
    function init() {
        // Добавляем обработчики для навигационных кнопок
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Проверяем, является ли это ссылкой на контакты
                if (link.getAttribute('href') === '#contacts') {
                    const contactsSection = document.getElementById('contacts');
                    if (contactsSection) {
                        contactsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    return;
                }
                
                // Удаляем активный класс у всех ссылок
                document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
                // Добавляем активный класс к нажатой ссылке
                e.target.classList.add('active');

                // Определяем категорию
                const category = e.target.getAttribute('data-category') || 'all';
                filterProducts(category);
            });
        });

        // Добавляем обработчики для боковой панели категорий
        document.querySelectorAll('.categories ul li a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Удаляем активный класс у всех ссылок
                document.querySelectorAll('.categories ul li a').forEach(l => l.classList.remove('active'));
                // Добавляем активный класс к нажатой ссылке
                e.target.classList.add('active');

                // Определяем категорию
                const category = e.target.getAttribute('data-category') || 'all';
                filterProducts(category);
            });
        });

        displayProducts();
        updateCartCount();

        // Остальные обработчики из оригинальной функции init
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