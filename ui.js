/**
 * UI UTILITIES
 * Helper functions for common UI operations
 */

class UIUtils {
  /**
   * Show a modal
   * @param {string} modalId - Modal element ID
   */
  static openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Focus management
      const closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }
  }

  /**
   * Close a modal
   * @param {string} modalId - Modal element ID
   */
  static closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /**
   * Toggle modal state
   * @param {string} modalId - Modal element ID
   */
  static toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      if (modal.classList.contains('active')) {
        this.closeModal(modalId);
      } else {
        this.openModal(modalId);
      }
    }
  }

  /**
   * Show toast notification
   * @param {string} message - Message to show
   * @param {string} type - Toast type (info, success, error, warning)
   * @param {number} duration - Duration in milliseconds
   */
  static showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    
    const colors = {
      info: '#26f9ff',
      success: '#67ff8a',
      error: '#ff006e',
      warning: '#ffb100'
    };

    toast.innerHTML = `
      <div style="padding: 1rem; background: rgba(0, 0, 0, 0.8); border-left: 4px solid ${colors[type]}; 
        border-radius: 8px; color: white; font-weight: 500;">
        ${message}
      </div>
    `;

    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 10000;
      animation: slideInUp 0.3s ease-out;
      max-width: 400px;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  /**
   * Show confirmation dialog
   * @param {string} message - Confirmation message
   * @returns {Promise<boolean>} User choice
   */
  static async showConfirm(message) {
    return new Promise((resolve) => {
      const modal = document.createElement('div');
      modal.className = 'modal active';
      modal.setAttribute('role', 'alertdialog');
      modal.setAttribute('aria-modal', 'true');

      modal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
          <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">${message}</p>
          <div style="display: flex; gap: 1rem; justify-content: flex-end;">
            <button class="btn cancel-btn" style="background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.2);">Cancel</button>
            <button class="btn confirm-btn btn-primary">Confirm</button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const confirmBtn = modal.querySelector('.confirm-btn');
      const cancelBtn = modal.querySelector('.cancel-btn');

      const cleanup = () => {
        modal.remove();
        document.body.style.overflow = '';
      };

      confirmBtn.addEventListener('click', () => {
        cleanup();
        resolve(true);
      });

      cancelBtn.addEventListener('click', () => {
        cleanup();
        resolve(false);
      });

      // Close on backdrop click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          cleanup();
          resolve(false);
        }
      });

      document.body.style.overflow = 'hidden';
      confirmBtn.focus();
    });
  }

  /**
   * Set up modal close handlers
   */
  static setupModalHandlers() {
    // Close modal on close button click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-close')) {
        const modal = e.target.closest('.modal');
        if (modal) modal.classList.remove('active');
      }
    });

    // Close modal on backdrop click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
      }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) activeModal.classList.remove('active');
      }
    });
  }

  /**
   * Set up navigation active states
   */
  static setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Set up mobile menu toggle
   */
  static setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });

      // Close menu when link is clicked
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
        });
      });
    }
  }

  /**
   * Animate elements on scroll
   */
  static setupScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = `${entry.target.dataset.animate} 0.8s ease-out forwards`;
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
    } else {
      // Fallback for browsers without IntersectionObserver
      elements.forEach(el => {
        el.style.animation = `${el.dataset.animate} 0.8s ease-out forwards`;
      });
    }
  }

  /**
   * Format date to readable string
   * @param {string|Date} date - Date to format
   * @returns {string} Formatted date
   */
  static formatDate(date) {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return d.toLocaleDateString('en-US', options);
  }

  /**
   * Copy text to clipboard
   * @param {string} text - Text to copy
   * @returns {Promise<void>}
   */
  static async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      this.showToast('Copied to clipboard!', 'success');
    } catch (error) {
      console.error('Failed to copy:', error);
      this.showToast('Failed to copy', 'error');
    }
  }

  /**
   * Debounce function
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  static debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function
   * @param {Function} func - Function to throttle
   * @param {number} limit - Limit time in milliseconds
   * @returns {Function} Throttled function
   */
  static throttle(func, limit = 300) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Create loading spinner
   * @returns {HTMLElement} Spinner element
   */
  static createSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'loading';
    spinner.innerHTML = '<div style="display: inline-block; width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.2); border-top: 2px solid var(--neon-cyan); border-radius: 50%; animation: spin 0.8s linear infinite;"></div>';
    return spinner;
  }

  /**
   * Initialize all UI components
   */
  static initializeAll() {
    this.setupModalHandlers();
    this.setupNavigation();
    this.setupMobileMenu();
    this.setupScrollAnimations();
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIUtils;
}
