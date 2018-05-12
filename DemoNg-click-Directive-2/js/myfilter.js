
/*

Syntax of the Custome Filter
app.filter("customeFilterName",function(){
    return function(inputDataList,OptionalParm1,Optionalparm2){
    var output;
                                                             //////Cutome filter code here Note: inputDataList is Compulsory paramenter
    return output;
    
    }
});

Discription:

where inputDataList (name) given below in Desing View
{{ name | CustomeFilterNmae:parm1:parm2}}

*/

app.filter("myFilter",function(){
    return function(input){
        return input.substring(0,1).toUpperCase();
    }
});
app.filter("myFilter1",function(){
    return function(input,option){
        return input.substring(0,option).toUpperCase();
    }
});
app.filter("myFilter2",function(){
    return function(input,option){
        if(isNaN(option) || option== ""){
            return input;
        }
        else
        {
             return input.substring(0,option).toUpperCase();
           // return input.substring(input,option).toUpperCase();
        }    
    }
});
app.filter("idFilter",function(){
    return function(input){
        var output=[];
        angular.forEach(input,function(value,key){
            if(value.id>2)
                {
                    output.push(value);
                }
        });
        return output;
    }
});
app.filter("idFilter1",function(){
    return function(input,option){
        var output=[];
        if(isNaN(option)|| option=="")
        {
            return input;
        }
        else{
            angular.forEach(input,function(value,key){
            if(value.id>option)
            {
                output.push(value);
            }
            });
            return output;
        }
        
    }
});
