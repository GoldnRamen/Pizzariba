class PizzaHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar">
                <a href="index.html" class="logo">Pizzaribba</span></a>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <a href="menu.html" class="btn-order">Order Online</a>
            </nav>
        </header>
        `;
    }
}

class PizzaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="contact">
            <div class="footer-content">
                <div class="footer-col">
                    <h3>Pizzaribba</h3>
                    <p>Serving the best authentic wood-fired pizzas in town.</p>
                </div>
                <div class="footer-col">
                    <h3>Opening Hours</h3>
                    <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
                    <p>Fri - Sat: 11:00 AM - 11:30 PM</p>
                    <p>Sun: 12:00 PM - 9:30 PM</p>
                </div>
                <div class="footer-col">
                    <h3>Contact Us</h3>
                    <p>📍 123 Main Street, Foodville</p>
                    <p>📞 (555) 123-4567</p>
                    <p>✉️ info@pizzabella.com</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2026 Pizzaribba. All rights reserved.</p>
            </div>
        </footer>
        `;
    }
}

customElements.define('pizza-header', PizzaHeader);
customElements.define('pizza-footer', PizzaFooter);