process.on('unhandledRejection', (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on('uncaughtException', (error) => {
    console.error("Uncaught Exception:", error);
    process.exit(1); // Optional: exit the process after logging the error
});

// Simulate an unhandled promise rejection
Promise.reject("Simulated unhandled rejection");

// Simulate an uncaught exception
throw new Error("Simulated uncaught exception");
