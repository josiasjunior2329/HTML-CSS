// Menu Filter Funcinando com Java Script

const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu.card')

filterButtons.forEach(button => {
    button.addEventListener ('click', () => {
        const filter = button.dataset.filter;

        //Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        //Filter menu cards
        menuCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.computedStyleMap.display = 'block';
            } else {
                card.computedStyleMap.display = 'none';
            }
        });
    });
});