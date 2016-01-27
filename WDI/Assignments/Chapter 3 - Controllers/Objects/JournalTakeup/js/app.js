function Journal() {
    this.entries = [];
}

function Entry(title,content,author){
    this.title = title;
    this.content = content;
    this.author = author;
}

Journal.prototype.addEntry = function(){
    
}

var myJournal = new Journal();

entry = new Entry("myTitle", "myContent", "myAuthor");

myJournal.entries.push(entry);

console.log(myJournal.entries);
