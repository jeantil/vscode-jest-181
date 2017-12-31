function called(a) {
    if (a === true) {
        console.log('yes')
    } else {
        console.log('no')
    }

    const type = a === true ? 'yes' : 'no'

    if (true) {
        console.log('always hit')
    }

    if (1 === a) {
        console.log()
    } else {
        console.log()
    }

    switch (1) {
        case 1:
            return 5
        case 2:
            return 10
        default:
            return 20
    }

    switch(false) {
    }
/*
    if (false) {
        console.log(1 + 1)
    } else {
        console.error('Uh oh')
        console.log('always')
    }

    if (true) {
        return 'value';
    } else if (1 === 2) {
        return 'never';
    }
    else {
        return 'default';
    }

    return null;
*/
}
/*
function notCalled() {
    1+2+3
}

const alsoNotCalled = () => {
    1+2+3
}
*/
module.exports = called;

called(1)
