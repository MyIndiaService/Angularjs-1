
/*app.filter("myFilter3",function(){
    return function(input,city){
        console.log(input);
        console.log(city);
      /*  if(isNaN(option) || city== ""){
            return input;
        }
        else
        {
             return input.toUpperCase();
           // return input.substring(input,option).toUpperCase();
        }  */   
 /*   } 
}); */

app.filter("idFilter1",function(){
    return function(input,option){
        console.log(option);
        console.log(input);
        var output=[];
        if(option)
        {
            angular.forEach(input,function(value,key){
            if(value.City==option)
            {
                output.push(value);
            }
            });
            return output;
        }
        else
        {
            return input;
        }
    }
});
