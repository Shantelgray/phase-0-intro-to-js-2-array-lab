const cats = []
cats.push("Milo","Otis", "Garfield" );
console.log(cats.length);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyRemoveLastCat(name) { 
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    cats.unshift(3);
}



    


