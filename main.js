document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        home: document.getElementById('home-section'),
        products: document.getElementById('products-section'),
        dashboard: document.getElementById('dashboard-section'),
        cart: document.getElementById('cart-section')
    };
    const productsGrid = document.getElementById('products-grid');
    const authModal = document.getElementById('auth-modal');
    const paymentModal = document.getElementById('payment-modal');
    const successModal = document.getElementById('success-modal');

    // ✅ 20 cards list
    const products = [
        {id:1,title:"Mastercard Platinum",price:35,image:"images/mastercard_platinum.jpg"},
        {id:2,title:"Visa Infinite",price:50,image:"images/visa_infinite.jpg"},
        {id:3,title:"Amex Gold",price:40,image:"images/amex_gold.jpg"},
        {id:4,title:"Amex Platinum",price:60,image:"images/amex_platinum.jpg"},
        {id:5,title:"Chase Sapphire Reserve",price:55,image:"images/chase_sapphire_reserve.jpg"},
        {id:6,title:"Citi Prestige",price:45,image:"images/citi_prestige.jpg"},
        {id:7,title:"HSBC Premier",price:38,image:"images/hsbc_premier.jpg"},
        {id:8,title:"Barclays Black",price:42,image:"images/barclays_black.jpg"},
        {id:9,title:"Capital One Venture X",price:37,image:"images/capitalone_venturex.jpg"},
        {id:10,title:"Discover IT Chrome",price:28,image:"images/discover_it_chrome.jpg"},
        {id:11,title:"Revolut Metal",price:30,image:"images/revolut_metal.jpg"},
        {id:12,title:"N26 Black",price:32,image:"images/n26_black.jpg"},
        {id:13,title:"Curve Metal",price:29,image:"images/curve_metal.jpg"},
        {id:14,title:"Monzo Premium",price:31,image:"images/monzo_premium.jpg"},
        {id:15,title:"Wirex Crypto",price:27,image:"images/wirex_crypto.jpg"},
        {id:16,title:"Crypto.com Ruby",price:33,image:"images/crypto_ruby.jpg"},
        {id:17,title:"Crypto.com Obsidian",price:65,image:"images/crypto_obsidian.jpg"},
        {id:18,title:"Payoneer Business",price:36,image:"images/payoneer_business.jpg"},
        {id:19,title:"Wise Borderless",price:34,image:"images/wise_borderless.jpg"},
        {id:20,title:"US Bank Altitude Reserve",price:52,image:"images/usbank_altitude_reserve.jpg"}
    ];

    // ✅ Persistent cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    function saveCart(){ localStorage.setItem('cart', JSON.stringify(cart)); }
    function updateCartCount(){ document.querySelector('.cart-count').textContent = cart.length; }

    // ✅ Show section
    function showSection(name){
        Object.values(sections).forEach(s => s.style.display = 'none');
        sections[name].style.display = 'block';
        window.scrollTo(0,0);
    }

    // ✅ Render products dynamically
    function renderProducts(){
        productsGrid.innerHTML = '';
        products.forEach(p => {
            productsGrid.innerHTML += `
                <div class="product-card">
                    <img src="${p.image}" alt="${p.title}">
                    <h3>${p.title}</h3>
                    <p>$${p.price}</p>
                    <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
                </div>`;
        });
    }

    // ✅ Render cart with stored products
    function renderCart(){
        const container = document.getElementById('cart-items');
        if(cart.length===0){ container.innerHTML='<p>Your cart is empty.</p>'; return; }
        container.innerHTML='';
        cart.forEach(item => {
            const product = products.find(p=>p.id===item.id);
            container.innerHTML += `<div class="cart-item">${product.title} - $${product.price}</div>`;
        });
        updateCartCount();
    }

    // ✅ Modals
    function showModal(modal){ modal.classList.add('active'); }
    function hideModal(modal){ modal.classList.remove('active'); }
    document.addEventListener('click', e => { if(e.target.classList.contains('close-modal')) hideModal(e.target.closest('.modal-overlay')); });

    // ✅ Add-to-cart logic
    document.addEventListener('click', e => {
        if(e.target.classList.contains('add-to-cart')){
            const id = parseInt(e.target.dataset.id);
            if(!cart.find(i=>i.id===id)){
                cart.push({id}); saveCart(); updateCartCount();
                alert('✅ Card added to cart!');
            } else { alert('⚠️ This card is already in your cart.'); }
        }
    });

    // ✅ Navigation events
    document.querySelectorAll('.home-link').forEach(el=>el.onclick=e=>{e.preventDefault();showSection('home');});
    document.querySelectorAll('.products-link').forEach(el=>el.onclick=e=>{e.preventDefault();renderProducts();showSection('products');});
    document.querySelectorAll('.dashboard-link').forEach(el=>el.onclick=e=>{e.preventDefault();showSection('dashboard');});
    document.querySelectorAll('.cart-link').forEach(el=>el.onclick=e=>{e.preventDefault();renderCart();showSection('cart');});

    // ✅ Login & Register triggers
    document.getElementById('login-btn').onclick=()=>showModal(authModal);
    document.getElementById('register-btn').onclick=()=>showModal(authModal);

    // ✅ Initial load
    renderProducts();
    updateCartCount();
    showSection('home');
});
