function Journal(Entry){
	this.entries = [];
}

function Entry(title,content,author,date){
	this.title = title;
	this.content = content;
	this.author = author;
	this.date = date

}
function displayJournal(journal){
		console.log(journal.entries);
	
}
var currentDate = new Date();
var journal1 = new Journal();
var journal2 = new Journal();
var entry1 = new Entry('myTitle','myContent','myAuthor', currentDate);
var entry2 = new Entry('title2', 'content2', 'author2', currentDate);
var entry3 = new Entry('title3', 'content3', 'author3', currentDate);
var entry4 = new Entry('title4', 'content4', 'author4', currentDate);
journal1.entries.push(entry1,entry2,entry3);
journal2.entries.push(entry4);

displayJournal(journal2);
