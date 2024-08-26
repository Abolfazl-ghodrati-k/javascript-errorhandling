class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = "DatabaseError";
        this.query = query;
    }
}

function executeQuery(query) {
    try {
        // Simulate a database query failure
        throw new Error("Connection lost");
    } catch (error) {
        throw new DatabaseError(`Failed to execute query: ${error.message}`, query);
    }
}

try {
    executeQuery("SELECT * FROM users");
} catch (error) {
    if (error instanceof DatabaseError) {
        console.error(`Database error on query '${error.query}': ${error.message}`);
    }
}
