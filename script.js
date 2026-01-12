const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Dostęp zabroniony. Strona tylko dla osób 18+");
  window.close();
  window.location.href = "https://www.google.pl";
});


// Mobile Menu Toggle
const warmup = document.querySelector('.warn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    warmup.classList.toggle('active');

});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        warmup.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
         warmup.classList.remove('active');
    }
});



// // Массив ссылок на элементы в порядке: Лево, Центр, Право
// let currentOrder = [item1, item2, item3];

// // Присваиваем начальные классы
// function applyClasses() {
//     // Чистим все классы
//     item1.className = 'carousel-item';
//     item2.className = 'carousel-item';
//     item3.className = 'carousel-item';
    
//     // Присваиваем классы согласно текущему порядку
//     currentOrder[0].classList.add('is-left');
//     currentOrder[1].classList.add('is-active');
//     currentOrder[2].classList.add('is-right');
// }

// // ➡️ Сдвиг вправо: 
// // 1 -> 3, 3 -> 2, 2 -> 1
// function rotateRight() {
//     // Новый порядок: [Правый, Левый, Активный]
//     // 0 (Левый) уходит на 2 (Правый)
//     // 1 (Активный) уходит на 0 (Левый)
//     // 2 (Правый) уходит на 1 (Активный)
    
//     // Берем последний элемент (Правый) и ставим его первым
//     const lastItem = currentOrder.pop(); 
//     currentOrder.unshift(lastItem);      
    
//     applyClasses();
// }

// // ⬅️ Сдвиг влево: 
// // 3 -> 1, 1 -> 2, 2 -> 3
// function rotateLeft() {
//     // Берем первый элемент (Левый) и ставим его последним
//     const firstItem = currentOrder.shift(); 
//     currentOrder.push(firstItem);
    
//     applyClasses();
// }

// // Инициализация
// applyClasses();


// let touchStartX = 0;
// let touchEndX = 0;



function handleSwipe() {
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - next
        nextBtn.click();
    }

    if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - previous
        prevBtn.click();
    }
}

// Auto-rotate carousel (optional - can be enabled)
let autoRotate = false;
let rotateInterval;

if (autoRotate) {
    rotateInterval = setInterval(() => {
        nextBtn.click();
    }, 4000);

    // Pause auto-rotation on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(rotateInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        rotateInterval = setInterval(() => {
            nextBtn.click();
        }, 4000);
    });
}



// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.products, .features, .newsletter').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialize carousel on page load
// updateCarousel();


const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");

city.addEventListener("click", toggleCont);
function toggleCont() {
  city.classList.toggle("active");
  Array.from(cont).forEach((el) => {
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
}


document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const modal = document.getElementById('myModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-button');

    // Функция для открытия модального окна
    openBtn.onclick = function() {
        modal.classList.add('active');
    }

    // Функция для закрытия по кнопке X
    closeBtn.onclick = function() {
        modal.classList.remove('active');
    }

    // Функция для закрытия по клику вне окна
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    }
});

 // Image carousel logic
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    let currentIndex = 0;
    const transitionInterval = 4000; // 4 seconds

    function switchImage() {
      // Remove active class from current image
      imageWrappers[currentIndex].classList.remove('active');
      
      // Move to next image
      currentIndex = (currentIndex + 1) % imageWrappers.length;
      
      // Add active class to next image
      imageWrappers[currentIndex].classList.add('active');
    }

    // Start the automatic image switching
    setInterval(switchImage, transitionInterval);

    // Console log for debugging (optional)
    console.log('[v0] Floating image carousel initialized with ' + imageWrappers.length + ' images');


const carouselPrev = document.querySelector('.carousel-btn-prev');
const carouselNext = document.querySelector('.carousel-btn-next');
const carouselTrack = document.querySelector('.carousel-track');
const carouselCards = document.querySelectorAll('.carousel-card');

if (carouselPrev && carouselNext && carouselTrack && carouselCards.length > 0) {
    let currentIndex = Math.floor(carouselCards.length / 2); // Start with center card
    const totalSlides = carouselCards.length;

    // Touch/drag state
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let dragDistance = 0;
    let isTouching = false;  // verjin
    let suppressClickUntil = 0; //vetjin
    let startY = 0;      //նորավելացրած
    let lockedDirection = null; // 'x' or 'y' nորավելացրած
    // let startTranslate = 0;  //նորավելացրած
    const DRAG_THRESHOLD = 10;  // Minimum pixels to consider it a drag vs click
    const SWIPE_THRESHOLD = 50; // Minimum pixels to trigger slide change

    // Update carousel - assign position classes
    const updateCarousel = () => {
        carouselCards.forEach((card, index) => {
            // Remove all position classes
            card.classList.remove('active', 'left-1', 'left-2', 'right-1', 'right-2');

            // Calculate relative position to active card
            let diff = index - currentIndex;

            // Handle wraparound
            if (diff > totalSlides / 2) diff -= totalSlides;
            if (diff < -totalSlides / 2) diff += totalSlides;

            // Assign classes based on position
            if (diff === 0) {
                card.classList.add('active');
            } else if (diff === -1) {
                card.classList.add('left-1');
            } else if (diff === -2) {
                card.classList.add('left-2');
            } else if (diff === 1) {
                card.classList.add('right-1');
            } else if (diff === 2) {
                card.classList.add('right-2');
            }
        });
    };

    // Navigate to next slide
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    };

    // Navigate to previous slide
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    };

    // Button click handlers
    carouselNext.addEventListener('click', nextSlide);
    carouselPrev.addEventListener('click', prevSlide);

    //Touch event handlers


    const handleTouchStart = (e) => {
        isTouching = true;
        suppressClickUntil = Date.now() + 450;

       isDragging = true;
       lockedDirection = null;
       startX = e.touches[0].clientX;
       startY = e.touches[0].clientY;
       currentX = startX;
        dragDistance = 0;
        };



    const handleTouchMove = (e) => {
  if (!isDragging) return;

  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  const dx = x - startX;
  const dy = y - startY;

  currentX = x;
  dragDistance = Math.abs(dx);

  if (!lockedDirection && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
    lockedDirection = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
  }

  if (lockedDirection === 'x' && e.cancelable) {
    e.preventDefault();
  }
};





    const handleTouchEnd = () => {
  if (!isDragging) return;

  const deltaX = currentX - startX;

  if (lockedDirection === 'x' && Math.abs(deltaX) > SWIPE_THRESHOLD) {
    deltaX > 0 ? prevSlide() : nextSlide();
  }

  isDragging = false;
  lockedDirection = null;
    setTimeout(() => {
    isTouching = false;
  }, 0);
};

    // Mouse event handlers for desktop
    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.clientX;
        currentX = startX;
        dragDistance = 0;
        startTranslate = -currentIndex * 100;
        carouselTrack.style.transition = 'none';
        carouselTrack.style.cursor = 'grabbing';
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        currentX = e.clientX;
        constdeltaX = currentX - startX;
        dragDistance = Math.abs(deltaX);

        if (dragDistance > DRAG_THRESHOLD) {
            // Calculate drag percentage
            const containerWidth = carouselTrack.offsetWidth / totalSlides;
            const dragPercent = (deltaX / containerWidth) * 100;
            const newTranslate = startTranslate + dragPercent;

            carouselTrack.style.transform = `translateX(${newTranslate}%)`;
        }
    };

    const handleMouseUp = (e) => {
        if (!isDragging) return;

        const deltaX = currentX - startX;

        // Check if drag was significant enough
        if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
            if (deltaX > 0) {
                prevSlide(); // Dragged right
            } else {
                nextSlide(); // Dragged left
            }
        } else {
            updateCarousel(); // Snap back to current slide
        }

        isDragging = false;
        carouselTrack.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            updateCarousel(); // Snap back if mouse leaves
            isDragging = false;
            carouselTrack.style.cursor = 'grab';
        }
    };

    // Add event listeners for touch
    carouselTrack.addEventListener('touchstart', handleTouchStart, { passive: false });
    carouselTrack.addEventListener('touchmove', handleTouchMove, { passive: false });
    carouselTrack.addEventListener('touchend', handleTouchEnd);

    // Add event listeners for mouse
    carouselTrack.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    carouselTrack.addEventListener('mouseleave', handleMouseLeave);




carouselCards.forEach((card, index) => {
  card.addEventListener('click', (e) => {
    // եթե touch է եղել կամ swipe է եղել → click-ը անտեսել
    if (isTouching || dragDistance > DRAG_THRESHOLD) {
      e.preventDefault();
      return;
    }

    // tap ոչ ակտիվ card-ի վրա → դարձնում ենք active
    if (index !== currentIndex) {
      e.preventDefault();
      currentIndex = index;
      updateCarousel();
    }
  });
});

    // Set initial cursor
    carouselTrack.style.cursor = 'grab';

    // Initialize on load
    updateCarousel();

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

const warn = document.querySelector(".warn");
if (warn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      warn.style.display = "none";
    } else {
      warn.style.display = "";
    }
  });
}