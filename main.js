document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById('home-section');
    const productsSection = document.getElementById('products-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const cartSection = document.getElementById('cart-section');
    const productsGrid = document.getElementById('products-grid');

    const products = [
        { id: 1, title: "Mastercard Platinum", price: 35, image: "" },
        { id: 2, title: "Visa Infinite", price: 50, image: "" }
    ];

    function showSection(section) {
        document.querySelectorAll('main > section').forEach(sec => sec.style.display = 'none');
        section.style.display = 'block';
        window.scrollTo(0, 0);
    }

    function renderProducts() {
        productsGrid.innerHTML = '';
        products.forEach(p => {
            productsGrid.innerHTML += `
                <div class="product-card">
                    <h3>${p.title}</h3>
                    <p>$${p.price}</p>
                </div>`;
        });
    }

    // ✅ Navigation events
    document.querySelectorAll('.home-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); showSection(homeSection); }));
    document.querySelectorAll('.products-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); renderProducts(); showSection(productsSection); }));
    document.querySelectorAll('.dashboard-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); showSection(dashboardSection); }));
    document.querySelectorAll('.cart-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); showSection(cartSection); }));

    // ✅ Login & Register button handlers
    document.getElementById('login-btn').addEventListener('click', e => { e.preventDefault(); alert('Login modal opens'); });
    document.getElementById('register-btn').addEventListener('click', e => { e.preventDefault(); alert('Register modal opens'); });

    // ✅ Initial page load
    renderProducts();
    showSection(homeSection);
});
