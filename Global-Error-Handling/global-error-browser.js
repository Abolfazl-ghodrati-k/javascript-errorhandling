window.onerror = function (message, source, lineno, colno, error) {
    console.error("Global error caught in browser:", message, source, lineno, colno, error);
};

// Simulate an error
throw new Error("Simulated error in browser");
