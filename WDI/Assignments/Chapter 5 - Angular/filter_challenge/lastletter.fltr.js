function lastLetterFilter() {
   return function(input_string) {

   		//write your filter here
        var tempString = input_string.substring(0,input_string.length-1);
        var tempChar = input_string.substring(input_string.length-1).toUpperCase();
       
        return tempString + tempChar;
        
        }
    };


app.filter('lastLetterFilter', lastLetterFilter);

