    // Отримуємо посилання на елементи DOM
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.getElementById('itemsList').querySelectorAll('.gallery-item');

    // Додаємо обробник подій для кожної кнопки
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Отримуємо значення фільтра з атрибута data-filter кнопки
            const selectedFilter = button.getAttribute('data-filter');

            // Перебираємо елементи списку і встановлюємо їм стиль відображення відповідно до вибору користувача
            for (let i = 0; i < galleryItems.length; i++) {
                const item = galleryItems[i];
                const photoSrc = item.querySelector('img').getAttribute('src');

                if (selectedFilter === 'all' || photoSrc.includes(selectedFilter)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
