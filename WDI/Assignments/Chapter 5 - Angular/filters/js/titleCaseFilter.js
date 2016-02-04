function TitleCaseFilter() {
    return function (input_string) {
        
        //Get an array of each word in our insult string
        var eachWord = input_string.split(" ");
        
        //loop through and capitalize each letter of each word
        for (var i = 0; i < eachWord.length; i++) {
           
            //Grab the first letter of each word
            var firstLetter1 = eachWord[i].substring(0, 1).toUpperCase();
           
            //concatinate the (first letter) + (original word without first letter)
            eachWord[i] = firstLetter1 + eachWord[i].substring(1);
           
            //if the word I am on has a dash
            
            if (eachWord[i].indexOf("-") !== -1) {
                
                //grab the index of the letter after the dash
                var n = eachWord[i].indexOf("-") + 1;
                
                //grab the character of that index in the world
                var char = eachWord[i].charAt(n);
                
                //make it uppercase
                var upperCaseChar = char.toUpperCase()
                
                //concatinate beginning of word up to dash + uppercase letter + end of word after caps letter
                eachWord[i] = eachWord[i].substring(n, 0) + upperCaseChar + eachWord[i].substring(n + 1, eachWord[i].length);
            
            }//end of if statement
        
        }//end of for loop
        
        //join all of the words in our array of separate words together with a space in between!
        return eachWord.join(" ");
        
    }//end of anon function
    
}//end of TitleCaseFilter

//....FIN

angular.module('insultApp').filter('title_case_filter', TitleCaseFilter);