app.filter('my_currency', MyCurrencyFilter);
function MyCurrencyFilter(){
    return function(inputString,symbol,decimal){
        if(symbol == undefined){symbol = "$"}
        if(decimal == undefined){decimal = 2}
        return symbol + inputString.toFized(decimal);
    }
}