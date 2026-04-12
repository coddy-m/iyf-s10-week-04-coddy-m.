// ============================================
// UTILITY FUNCTIONS (Shared across projects)
// ============================================

// Format numbers with commas
function formatNumber(num) {
    return num.toLocaleString();
}

// Generate random integer
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Debounce function (for performance)
function debounce(func, wait) {
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

// Simple logger with timestamp
function log(message, type = "info") {
    const timestamp = new Date().toLocaleTimeString();
    const styles = {
        info: "color: #2196F3",
        success: "color: #4CAF50",
        warning: "color: #FF9800",
        error: "color: #F44336"
    };
    console.log(`%c[${timestamp}] ${message}`, styles[type] || styles.info);
}

// Export for Node.js
if (typeof module !== "undefined" && module.exports) {
    module.exports = { formatNumber, randomInt, debounce, log };
}