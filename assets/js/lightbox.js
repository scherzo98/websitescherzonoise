// assets/js/lightbox.js

class Lightbox {
    constructor() {
        this.lightbox = null;
        this.init();
    }

    init() {
        // Create lightbox element
        this.lightbox = document.createElement('div');
        this.lightbox.className = 'lightbox';
        this.lightbox.innerHTML = `
            <button class="lightbox-close">&times;</button>
            <img src="" alt="">
        `;
        document.body.appendChild(this.lightbox);

        // Close button
        this.lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            this.close();
        });

        // Click outside to close
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });

        // Attach to gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    this.open(img.src);
                }
            });
        });
    }

    open(src) {
        const img = this.lightbox.querySelector('img');
        img.src = src;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
});