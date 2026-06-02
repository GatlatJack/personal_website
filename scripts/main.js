// ---- Analytics (Google Analytics 4) ----
// Set your Measurement ID here or before this script loads:
// Option A: Replace the placeholder 'G-ABC123XYZ' below.
// Option B: Define window.GA_MEASUREMENT_ID in a small inline script in the HTML head.
(function initAnalytics() {
    var MEASUREMENT_ID = window.GA_MEASUREMENT_ID || 'G-ABC123XYZ';
    if (!MEASUREMENT_ID || MEASUREMENT_ID === 'G-ABC123XYZ') {
        // Not configured yet; skip initialization to avoid errors
        return;
    }

    // Load gtag.js
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    document.head.appendChild(gaScript);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} // eslint-disable-line no-inner-declarations
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID);
})();

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Blog feed (renders posts from data/blog-posts.json)
    (function initBlogFeed() {
        const feed = document.getElementById('blog-feed');
        if (!feed) return;

        fetch('data/blog-posts.json')
            .then(r => r.json())
            .then(posts => {
                posts.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));
                feed.innerHTML = posts.map(p => {
                    const imgHtml = p.image
                        ? `<img src="${p.image}" alt="${p.title}">`
                        : `<i class="fas fa-heart"></i>`;
                    const tags = (p.tags || []).map(t => `<span class="blog-tag">${t}</span>`).join('');
                    return `
                        <article class="blog-card ${p.class || ''}">
                            <div class="blog-image">
                                <div class="blog-placeholder">${imgHtml}</div>
                                <div class="blog-date">${p.date}</div>
                            </div>
                            <div class="blog-content">
                                <h3>${p.title}</h3>
                                <p>${p.excerpt}</p>
                                <div class="blog-tags">${tags}</div>
                                <div class="blog-meta">
                                    <span class="read-time">${p.readTime}</span>
                                    <a href="${p.link}" class="blog-link">Read More</a>
                                </div>
                            </div>
                        </article>`;
                }).join('');
            })
            .catch(() => {
                feed.innerHTML = '<p style="opacity:0.7">Could not load blog posts.</p>';
            });
    })();

    // Quick Updates feed & composer
    (function initUpdates() {
        const feed = document.getElementById('updates-feed');
        if (!feed) return;

        let pendingImageBase64 = null;

        const imageInput = document.getElementById('post-image-input');
        if (imageInput) {
            imageInput.addEventListener('change', function() {
                const file = this.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function(e) {
                    pendingImageBase64 = e.target.result;
                    const preview = document.getElementById('post-image-preview');
                    const img = document.getElementById('post-preview-img');
                    if (preview && img) { img.src = pendingImageBase64; preview.style.display = 'block'; }
                };
                reader.readAsDataURL(file);
            });
        }

        window.clearImage = function() {
            pendingImageBase64 = null;
            const preview = document.getElementById('post-image-preview');
            const input = document.getElementById('post-image-input');
            if (preview) preview.style.display = 'none';
            if (input) input.value = '';
        };

        window.submitPost = function() {
            const textarea = document.getElementById('post-text');
            const text = textarea ? textarea.value.trim() : '';
            if (!text && !pendingImageBase64) return;
            const post = {
                id: Date.now(),
                body: text,
                image: pendingImageBase64 || null,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            };
            const posts = loadPosts();
            posts.unshift(post);
            savePosts(posts);
            if (textarea) textarea.value = '';
            window.clearImage();
            renderFeed(posts);
        };

        window.deletePost = function(id) {
            const posts = loadPosts().filter(p => p.id !== id);
            savePosts(posts);
            renderFeed(posts);
        };

        function loadPosts() {
            try { return JSON.parse(localStorage.getItem('quickPosts') || '[]'); }
            catch(e) { return []; }
        }

        function savePosts(posts) {
            localStorage.setItem('quickPosts', JSON.stringify(posts));
        }

        function renderFeed(posts) {
            if (!posts.length) {
                feed.innerHTML = '<p style="opacity:0.6; text-align:center; margin-top:10px;">No updates yet — share something above.</p>';
                return;
            }
            feed.innerHTML = posts.map(p => `
                <div style="background:#fff; border-radius:14px; box-shadow:0 2px 12px rgba(0,0,0,0.08); overflow:hidden;">
                    ${p.image ? `<img src="${p.image}" alt="" style="width:100%; max-height:340px; object-fit:cover; display:block;">` : ''}
                    <div style="padding:14px 16px;">
                        ${p.body ? `<p style="margin:0 0 10px; font-size:0.97rem; color:#333; white-space:pre-wrap;">${p.body}</p>` : ''}
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:0.8rem; color:#999;">${p.date}</span>
                            <button onclick="deletePost(${p.id})" style="background:none; border:none; color:#cc4444; cursor:pointer; font-size:0.8rem;">Delete</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        renderFeed(loadPosts());
    })();

    // Writings & Publications feed
    (function initWritings() {
        const grid = document.getElementById('writings-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        if (!grid) return;

        fetch('data/writings.json')
            .then(resp => resp.json())
            .then(posts => renderWritings(posts))
            .catch(() => {
                grid.innerHTML = '<p style="opacity:0.7">Could not load writings right now.</p>';
            });

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                fetch('data/writings.json')
                    .then(resp => resp.json())
                    .then(posts => {
                        const filtered = filter === 'all' ? posts : posts.filter(p => (p.type || '').toLowerCase() === filter);
                        renderWritings(filtered);
                    })
                    .catch(() => {
                        grid.innerHTML = '<p style="opacity:0.7">Could not load writings right now.</p>';
                    });
            });
        });

        function renderWritings(posts) {
            if (!Array.isArray(posts) || posts.length === 0) {
                grid.innerHTML = '<p style="opacity:0.7">No writings yet. Add some in data/writings.json.</p>';
                return;
            }

            const cards = posts
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map(post => writingCard(post))
                .join('');
            grid.innerHTML = cards;
        }

        function writingCard(post) {
            const title = post.title || 'Untitled';
            const date = post.date || '';
            const blurb = post.blurb || '';
            const cover = post.cover || '';
            const type = (post.type || '').toLowerCase();
            const link = post.link || '#';

            const typeColor = {
                article: '#8b4513',
                poetry: '#9b59b6',
                story: '#2980b9',
                comic: '#16a085',
                book: '#d35400'
            }[type] || '#8b4513';

            const coverHtml = cover
                ? `<div class="blog-image"><div class="blog-placeholder"><img src="${cover}" alt="${title}"></div><div class="blog-date">${date}</div></div>`
                : `<div class="blog-image"><div class="blog-placeholder" style="display:flex;align-items:center;justify-content:center;font-size:42px;color:${typeColor};"><i class="fas fa-book-open"></i></div><div class="blog-date">${date}</div></div>`;

            return `
                <article class="blog-card">
                    ${coverHtml}
                    <div class="blog-content">
                        <h3>${title}</h3>
                        <p>${blurb}</p>
                        <div class="blog-tags">
                            <span class="blog-tag" style="background:${typeColor}; color:white;">${post.type || 'writing'}</span>
                        </div>
                        <div class="blog-meta">
                            <span class="read-time">${date}</span>
                            ${link && link !== '#' ? `<a href="${link}" class="blog-link" target="_blank" rel="noopener noreferrer">Open</a>` : ''}
                        </div>
                    </div>
                </article>
            `;
        }
    })();


    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If the link contains '../index.html', allow normal navigation
            if (href.includes('../index.html') || href.startsWith('http') || href.startsWith('mailto')) {
                return; // Allow default behavior
            }
            
            // Only prevent default for same-page anchors
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic form validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });

    // Blog subscribe form handling
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = subscribeForm.querySelector('.subscribe-input');
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Please enter your email address', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate subscription
            showNotification('Thank you for subscribing! You\'ll receive updates about new blog posts.', 'success');
            subscribeForm.reset();
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        if (type === 'success') {
            notification.style.backgroundColor = '#10b981';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#ef4444';
        }
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add notification to DOM
        document.body.appendChild(notification);
        
        // Remove notification after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
                if (style.parentNode) {
                    style.parentNode.removeChild(style);
                }
            }, 300);
        }, 4000);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .about-stats, .blog-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });

    // Typing animation for hero subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        const typingTexts = [
            'Computer Science Student',
            'Web Developer',
            'Problem Solver'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeAnimation() {
            const currentText = typingTexts[textIndex];
            
            if (isDeleting) {
                subtitle.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                subtitle.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
            }

            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(typeAnimation, typingSpeed);
        }

        // Start typing animation after a short delay
        setTimeout(typeAnimation, 1000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add scroll-to-top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #8b4513;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Theme toggle functionality (optional enhancement)
    function createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.className = 'theme-toggle';
        themeToggle.style.cssText = `
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #374151;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        `;
        
        document.body.appendChild(themeToggle);
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const icon = this.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            } else {
                icon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.querySelector('i').className = 'fas fa-sun';
        }
    }
    
    // Uncomment to enable theme toggle
    // createThemeToggle();

    // Ancient Clock Animation
    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();
        
        const hourDegrees = (hours * 30) + (minutes * 0.5);
        const minuteDegrees = (minutes * 6) + (seconds * 0.1);
        const secondDegrees = (seconds * 6) + (milliseconds * 0.006);
        
        const hourHand = document.querySelector('.hour-hand');
        const minuteHand = document.querySelector('.minute-hand');
        const secondHand = document.querySelector('.second-hand');
        
        if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        if (minuteHand) minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        if (secondHand) secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    }
    
    // Update clock immediately and then every 50ms for smooth animation
    updateClock();
    setInterval(updateClock, 50);
});
