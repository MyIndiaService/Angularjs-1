
//display item with filter
app.filter("filterAll",function(){
    return function(input, displayProList, selectedYear, selectCheckBox,scope)
    {
      var output=[],allitem;
        
 /////////// Pick the check box which one selected begain
      var chkItemList=[];
       for(i=0;i<selectCheckBox.length;i++)
        {
               if(selectCheckBox[i].status==true)
               {
                   chkItemList.push(selectCheckBox[i].type);
               }
        }
        console.log(chkItemList); // display selecet check box value which need to serach in collage array
 /////////// Pick the check box which one selected end
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
                     //// If There is Apply Collage name filter and check box both  then it apply the Same Filter for check box begain
                    if(chkItemList.length>0) 
                    {
                        var FinalOutputList=[];
                        angular.forEach(CollageOutput,function(value,key){
                            console.log("Collage Filter"+value.chktype);
                            angular.forEach(chkItemList,function(chkvalue,key){ // check each value which filter true value
                                console.log("Check box"+chkvalue);
                                if(value.chktype == chkvalue){
                                    FinalOutputList.push(value);
                                }
                                
                            });
                       
                        }); 
                        console.log(FinalOutputList);
                        return FinalOutputList;
                    }
                      //// If There is Apply Collage name filter and check box both  then it apply the Same Filter for check box End
                     else{
                        scope.allitem=output.length;  // Get total Length according to year after filter 
                        return CollageOutput;  
                     }
                   
                 } /// Display Product List If Close
                
                else{  
                    console.log("Display Collage Product List Else");
                    //// If There is not click on the Collage name  then it apply the Same Filter for check box begain
                    if(chkItemList.length>0) 
                    {
                        console.log("Display Collage Product List Else when check box Selected::: ");
                        var FinalOutputList=[];
                        // It filter the data On output array bcz it apply after year filter  
                        angular.forEach(output,function(value,key){
                            console.log("Collage Filter"+value);
                            angular.forEach(chkItemList,function(chkvalue,key){ // check each value which filter true value
                                console.log("Check box"+chkvalue);
                                if(value.chktype == chkvalue){
                                    FinalOutputList.push(value);
                                }
                                
                            });
                       
                        }); 
                        console.log(FinalOutputList);
                        return FinalOutputList;
                     //// If There is not click on the Collage name  then it apply the Same Filter for check box  end
                    }
                    else{
                        console.log("Display Collage Product List Else when check box not Selected ");
                        scope.allitem=output.length;  // Get total Length according to year after filter 
                        return output; 
                    }
                    
                   
                }  // Colloage dispaly Product list Close
            
                //display produch list related to college start here
            
        }
    }
});