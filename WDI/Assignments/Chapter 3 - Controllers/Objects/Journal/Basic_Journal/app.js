

$(document).ready(function () {
	//this is triggered by the button "submitting" the form
	$(".theform").submit(function (event) {
		event.preventDefault();
		//make sure the above is included so your form doesnt refresh your page!

		var frm = $(".theform");
		//grabs form and stores it in a variable

		myJournal.addEntry(frm);
		myJournal.displayEntries();
	});

});

function Entry (title, author, content, tags) {
	this.title = title;
	this.author = author;
	this.content = content;
    this.tags = tags;
}

//classes or constructor functions
function Journal(){
	this.entries = [];
}
//prototypes

Journal.prototype.addEntry = function(frm) {
	//grabs the input values from each form inpout field
	var title = frm.find("input[name='title']").val();
	var author = frm.find("input[name='author']").val();
	var content = frm.find("textarea[name='content']").val();
    var tags = frm.find("input[name='tags']").val();
	// makes new entry with inputs
	var entry = new Entry(title, author, content, tags);

	//adds entry to our Journal entries array
	this.entries.unshift(entry);

};


Journal.prototype.displayEntries = function() {
	
	var n = this.entries.length;
	var html = "";

	// this loop loops over the array and using "i" to access the index of thre array
	for(var i = 0; i < n ;i++){

		//check if the array index is even or odd and then adds a different style
		if(i%2){

			html+="<section>";
			html+=	"<div class='eachEntry2'>"

		} else {
			html+="<section>";
			html+=	"<div class='eachEntry'>"
		}

		//adds all of the html to a string
		html += "<h2> Title: " + this.entries[i].title + "</h2>";
		html += "<h3> Author:" + this.entries[i].author + "</h3>";
		html += "<p>" + this.entries[i].content + "</p>";
		html += "<p>" + this.entries[i].tags + "</p>";
		html += "</div></section><hr>"

	}
	//injects our string html into our index file at theJournal class element
	$(".theJournal").html(html);
    

};

    var nameKey = "bleh";
var search = function(nameKey, entries){
    for (var i=0; i < entries.length; i++) {
        if (entries[i] == nameKey) {
            console.log(entries[i].toString());
        }
    }
}
//variables
var myJournal = new Journal();

