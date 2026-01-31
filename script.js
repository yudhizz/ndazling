// Background Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.bg-slide');

function changeBackground() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(changeBackground, 5000);

// Card flip on click/tap
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Jangan flip jika yang diklik adalah tombol choose
        if (!e.target.classList.contains('choose-btn')) {
            this.classList.toggle('flipped');
        }
    });
});

// Date Selection
let selectedOption = null;

const dateOptions = {
    a: {
        title: 'Cafe Senja dengan Citylight',
        icon: '🌆☕',
        message: 'Liat citylight di cafe dan nikmatin waktu bersama. Perfect untuk ngobrol santai sambil menikmati suasana romantis! ✨'
    },
    b: {
        title: 'Museum & Photobooth',
        icon: '🎨📸',
        message: 'Kita ke museum jalan jalan lalu ke photobooth. Abadikan momen indah kita bersama! 💕'
    },
    c: {
        title: 'Main di Timezone',
        icon: '🎮🕹️',
        message: 'Main di Timezone! Kita bakal main berbagai game, adu skill, dan seru-seruan bareng. Let the games begin! 🎯'
    }
};

function selectDate(option) {
    selectedOption = option;
    const modal = document.getElementById('selectionModal');
    const data = dateOptions[option];
    
    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalMessage').textContent = data.message;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('selectionModal');
    modal.style.display = 'none';
    selectedOption = null;
}

function confirmSelection() {
    if (selectedOption) {
        closeModal();
        launchConfetti();
        
        setTimeout(() => {
            showFinalMessage(selectedOption);
        }, 2000);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('selectionModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Confetti Animation
function launchConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#FF1493', '#8B2FC9', '#FFD700', '#FF69B4', '#FF6347', '#00CED1'];

    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 8 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push(new ConfettiPiece());
    }

    let animationId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Stop confetti after 5 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
}

function showFinalMessage(option) {
    const data = dateOptions[option];
    const container = document.querySelector('.container');
    
    container.innerHTML = `
        <div class="final-message" style="text-align: center; padding: 60px 20px; animation: fadeInUp 1s ease-out;">
            <div style="font-size: 8rem; margin-bottom: 30px; animation: bounce 2s infinite;">
                ${data.icon}
            </div>
            <h1 style="font-size: 3rem; color: #fff; text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5); margin-bottom: 20px; font-weight: 700;">
                Great Choice! 🎉
            </h1>
            <h2 style="font-size: 2rem; color: #fff; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); margin-bottom: 30px;">
                ${data.title}
            </h2>
            <p style="font-size: 1.4rem; color: #fff; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); max-width: 700px; margin: 0 auto 40px; line-height: 1.8;">
                ${data.message}
            </p>
            <div style="margin-top: 50px;">
                <button onclick="location.reload()" style="
                    background: linear-gradient(135deg, #FF1493, #8B2FC9);
                    color: white;
                    border: none;
                    padding: 18px 40px;
                    font-size: 1.2rem;
                    border-radius: 50px;
                    cursor: pointer;
                    font-weight: 600;
                    box-shadow: 0 8px 20px rgba(255, 20, 147, 0.6);
                    transition: all 0.3s ease;
                " onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
                    Choose Another Date 💕
                </button>
            </div>
        </div>
    `;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('selectionModal');
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'Enter') {
            confirmSelection();
        }
    }
});
