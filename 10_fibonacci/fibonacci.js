const fibonacci = function(index){
    
    /*
        Excercise solution includes a argument check for index type.
        
        let count
        if(typeof countArg !== 'number'){
            count = parseInt(countArg)
        } else {
            count = countArg
        }  

        -- count is should substitute index.
    */


    if (index < 0){
        return "OOPS"
    }

    if (index == 0){
        return 0;
    }

    if (index == 1){
        return 1;
    }

    prev = 0;
    current = 1;

    for (let i = 2; i < index; i++){
        next = prev + current;
        prev = current;
        current = next;
    }

    return prev + current
};

// Do not edit below this line
module.exports = fibonacci;
