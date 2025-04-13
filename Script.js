// ==================== Loader ====================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});

// ==================== Mobile Menu ====================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ==================== Custom Cursor ====================
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// ==================== ScrollSpy (Highlight Menu) ====================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('href') === '#' + current) {
      li.classList.add('active');
    }
  });
});

// ==================== Particles.js ====================
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    },
    "color": {
      "value": "#00ffd0"
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffd0",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});



particlesJS("particles-mission", {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    },
    "color": {
      "value": "#00ffd0"
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffd0",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});

particlesJS("particles-career", {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    },
    "color": {
      "value": "#00ffd0"
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffd0",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});

particlesJS("particles-contact", {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    },
    "color": {
      "value": "#00ffd0"
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffd0",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});