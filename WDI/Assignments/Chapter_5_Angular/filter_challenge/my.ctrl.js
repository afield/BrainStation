//you dont need to change anything here, but can for testing purposes... if you please

function MyController () {
	var ctrl = this;

	ctrl.name = "AnGulAr RuElZ";

	ctrl.names=["John","Ned","Yigritte","Sansa","Maurice the Vengeful"];

	ctrl.items=[12,1,5,69,10,1000,9,111,67];
	
	ctrl.last_letter_name = "makemylastletteruppercase";
}


app.controller("MyController", MyController);

