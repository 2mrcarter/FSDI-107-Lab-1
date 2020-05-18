module.exports = {
    isEven: function(num){
        var res= num % 2;
        return(res == 0);
    },
    isOdd: function(num){
        var res= num % 2;
        return(res !== 0);
    },
    sum: function (num1, num2){
        return num1 + num2;
    },
    greater: function(num1,num2){
        if(num1 >num2){
            return num1;
        }
            return num2;
    },
    smaller: function(num1,num2){
        if(num1  < num2);
            return num1;
        
            return num2;
    },

    divide: function(num1, num2){
    //else return result
        if(num2 == 0);
        console.log('error');
            return 0;

        //return result
        return num1 / num2; 
    }
};