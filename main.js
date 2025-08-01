document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById('home-section');
    const productsSection = document.getElementById('products-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const cartSection = document.getElementById('cart-section');
    const productsGrid = document.getElementById('products-grid');

    // ✅ Full list of 20 cards restored from original db.js
    const products = [
        { id: 1, title: "Mastercard Platinum", price: 35, image: "images/mastercard_platinum.jpg" },
        { id: 2, title: "Visa Infinite", price: 50, image: "images/visa_infinite.jpg" },
        { id: 3, title: "Amex Gold", price: 40, image: "images/amex_gold.jpg" },
        { id: 4, title: "Amex Platinum", price: 60, image: "images/amex_platinum.jpg" },
        { id: 5, title: "Chase Sapphire Reserve", price: 55, image: "images/chase_sapphire_reserve.jpg" },
        { id: 6, title: "Citi Prestige", price: 45, image: "images/citi_prestige.jpg" },
        { id: 7, title: "HSBC Premier", price: 38, image: "images/hsbc_premier.jpg" },
        { id: 8, title: "Barclays Black", price: 42, image: "images/barclays_black.jpg" },
        { id: 9, title: "Capital One Venture X", price: 37, image: "images/capitalone_venturex.jpg" },
        { id: 10, title: "Discover IT Chrome", price: 28, image: "images/discover_it_chrome.jpg" },
        { id: 11, title: "Revolut Metal", price: 30, image: "images/revolut_metal.jpg" },
        { id: 12, title: "N26 Black", price: 32, image: "images/n26_black.jpg" },
        { id: 13, title: "Curve Metal", price: 29, image: "images/curve_metal.jpg" },
        { id: 14, title: "Monzo Premium", price: 31, image: "images/monzo_premium.jpg" },
        { id: 15, title: "Wirex Crypto", price: 27, image: "images/wirex_crypto.jpg" },
        { id: 16, title: "Crypto.com Ruby", price: 33, image: "images/crypto_ruby.jpg" },
        { id: 17, title: "Crypto.com Obsidian", price: 65, image: "images/crypto_obsidian.jpg" },
        { id: 18, title: "Payoneer Business", price: 36, image: "images/payoneer_business.jpg" },
        { id: 19, title: "Wise Borderless", price: 34, image: "images/wise_borderless.jpg" },
        { id: 20, title: "U.S. Bank Altitude Reserve", price: 52, image: "images/usbank_altitude_reserve.jpg" }
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
                    <img src="${p.image}" alt="${p.title}" style="width:100%;border-radius:8px;">
                    <h3>${p.title}</h3>
                    <p>$${p.price}</p>
                </div>`;
        });
    }

    document.querySelectorAll('.home-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); showSection(homeSection); }));
    document.querySelectorAll('.products-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); renderProducts(); showSection(productsSection); }));
    document.querySelectorAll('.dashboard-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); showSection(dashboardSection); }));
    document.querySelectorAll('.cart-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); showSection(cartSection); }));

    document.getElementById('login-btn').addEventListener('click', e => { e.preventDefault(); alert('Login modal opens'); });
    document.getElementById('register-btn').addEventListener('click', e => { e.preventDefault(); alert('Register modal opens'); });

    renderProducts();
    showSection(homeSection);
});
