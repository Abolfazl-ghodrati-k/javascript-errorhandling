function levelOne() {
    throw new Error("Low-level error");
}

function levelTwo() {
    try {
        levelOne();
    } catch (error) {
        throw new Error(`Error in levelTwo: ${error.message}`);
    }
}

function levelThree() {
    try {
        levelTwo();
    } catch (error) {
        console.error("Error caught at top level:", error.message);
    }
}

levelThree();
