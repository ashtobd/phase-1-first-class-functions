function receivesAFunction(something) {
    return something();
}

function returnsANamedFunction() {
    return function named() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}