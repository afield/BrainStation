//Chess board exercies

var grid = 8;

for(var i = 1; i <= grid ; i++){
    
    if( i % 3 == 0){
        console.log("# # # # ");
    }else{
        console.log(" # # # #"); 
    }
}


for(var i = 1; i <= grid; i++){
    var line="";
    
    for(var j = 1;j<=grid/2;j++){
        if(i % 2 ==0){
            line = line + " ";
            line = line + "#";
        }else{
            line = line + "#";
            line = line + " ";
        }
    }


console.log(line);

};