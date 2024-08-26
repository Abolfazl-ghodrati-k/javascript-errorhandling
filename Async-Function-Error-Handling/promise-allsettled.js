const promises = [
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2"),
    Promise.reject("Error 2")
];

Promise.allSettled(promises).then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log("Resolved:", result.value);
        } else {
            console.error("Rejected:", result.reason);
        }
    });
});
