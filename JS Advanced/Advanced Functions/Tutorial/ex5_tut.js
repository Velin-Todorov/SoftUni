function add(n){

    const inner = function(a) {
        n += a;
        return inner;
    };
    
    inner.toString = function(){
        return n;
    }
    
    return inner;

}
