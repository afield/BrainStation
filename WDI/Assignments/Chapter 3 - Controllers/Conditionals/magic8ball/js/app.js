/* This program will wait for a user to enter a question and click the "Ask Question" button. When a user clicks the button, it will check if the user has entered anything in the textbox and display an answer */

var number_of_conditions = 2;

function show_answer(option){
 
	var answer;

	// write conditions here
    if (option == 1){
        answer="yo dog";
    }else if(option==2){
        answer="YO DAWG";
    }

	display_answer(answer);

}

