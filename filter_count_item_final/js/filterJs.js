
//display item with filter
app.filter("filterAll",function(){
    return function(input, displayProList, selectedYear, selectCheckBox,scope)
    {
      var output=[],allitem;
      console.log(displayProList);
      console.log(selectedYear.yearList);
      console.log(selectCheckBox);
    // Year Filter begain 
        if(selectedYear){
            angular.forEach(input,function(value,key){
            if(value.year == selectedYear.yearList){
                console.log(value.year);
                output.push(value);
            }
            });
     // Year filter end         
           
             //display produch list related to college start here
                 var CollageOutput=[]
                 if(displayProList){
                    angular.forEach(output,function(value,key){
                    if(value.type == displayProList){
                        console.log(value.year);
                        CollageOutput.push(value);
                    }
                    });
                    scope.allitem=output.length;  // Get total Length according to year after filter 
                    return CollageOutput;  
                 }
                
                else{
                    scope.allitem=output.length;  // Get total Length according to year after filter 
                    
                    return output;
                } 
            
                //display produch list related to college start here
            
        }
    }
});