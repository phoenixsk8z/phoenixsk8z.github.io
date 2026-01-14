document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-right');

    // Diagnostic check
    if (!menuToggle) {
        console.error("Error: Could not find the .menu-toggle button. Check your HTML class name.");
        return;
    }
    if (!navLinks) {
        console.error("Error: Could not find the .nav-right menu. Check your HTML class name.");
        return;
    }

    menuToggle.addEventListener('click', () => {
        console.log("Button clicked! Toggling active class...");
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        // Debugging: Force a background color so we see it's working
        if (navLinks.classList.contains('active')) {
            console.log("Menu is now ACTIVE");
        } else {
            console.log("Menu is now HIDDEN");
        }
    });

    document.querySelectorAll('.nav-right a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.toggle('active');
        });
    });
});

// Single Source of Truth for Certificate Modals
document.querySelectorAll('.cert-item').forEach(item => {
  item.addEventListener('click', function(e) {
    // 1. Only run on mobile
    if (window.innerWidth > 768) return;

    // 2. If clicking the "Verify" link, don't close the modal!
    if (e.target.classList.contains('cert-verify-link')) {
      e.stopPropagation(); // Stops the click from bubbling up to the cert-item
      return; 
    }

    // 3. Logic for Opening/Closing
    const isOpen = this.classList.contains('modal-active');

    if (isOpen) {
      // CLOSE logic
      this.classList.remove('modal-active');
      document.body.style.overflow = ''; 
    } else {
      // OPEN logic
      // First, close any other certificate that might be open
      document.querySelectorAll('.cert-item.modal-active').forEach(openItem => {
        openItem.classList.remove('modal-active');
      });
      
      this.classList.add('modal-active');
      document.body.style.overflow = 'hidden';
    }
  });
});

document.querySelectorAll('.skills-title').forEach(title => {
  title.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      const parent = title.parentElement;
      
      // Optional: Close other open categories first
      document.querySelectorAll('.skills-grid > div').forEach(item => {
        if (item !== parent) item.classList.remove('active');
      });

      parent.classList.toggle('active');
    }
  });
});