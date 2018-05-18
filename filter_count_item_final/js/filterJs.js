//display item with filter
app.filter("idFilter1",function(){
    return function(input,option){
        var output=[];
        if(option)
        {
            angular.forEach(input,function(value,key){
            if(value.type==option)
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


// display with years

app.filter("yearsFilter",function(){
    return function(ProYear,option){
        var output=[];
		console.log(ProYear);
		console.log(option);
        if(option)
        {
            angular.forEach(ProYear,function(value,key){
            if(value.year==option)
            {
                output.push(value);
            }
            });
            return output;
        }
        else
        {
            return ProYear;
        }
    }
});

