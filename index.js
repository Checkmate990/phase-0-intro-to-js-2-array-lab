const cats = ["Milo","Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push('Ralph')
}

function destructivelyPrependCat(){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
}

function appendCat(){
    const broom = [...cats, 'Broom']
    return broom
}

function prependCat(){
    const arnold = ['Arnold', ...cats]
    return arnold
}

function removeLastCat(){
   const last =  [...cats]
   last.pop()
   return last
}

function removeFirstCat(){
    const first =  [...cats]
    first.shift()
    return first
}
