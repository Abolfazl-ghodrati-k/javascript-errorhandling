function returnRejectedPromise() {
    return Promise.reject(new Error("This is an asynchronous error"));
}

// Without handling
returnRejectedPromise();

// Properly handling
returnRejectedPromise().catch(error => {
    console.error("Caught an asynchronous error:", error.message);
});
