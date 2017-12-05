function called() {
    if (true) {
        return 'value';
    }

    return null;
}

function notCalled() {
}

module.exports = called;
