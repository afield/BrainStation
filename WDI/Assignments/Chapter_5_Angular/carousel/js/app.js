var app = angular.module('carousel', []);

function CarouselCtrl() {
    this.max = false;
    this.min = true;
    this.images = [
    'http://imgur.com/9itd49u.png',
    'http://imgur.com/n19BXfZ.png',
    'http://imgur.com/VBwQmzA.png',
    'http://imgur.com/nawDxVv.png'
  ];
    this.image = 0;
}


/*TODO #1: register CarouselCtrl as a controller*/
app.controller('CarouselCtrl', CarouselCtrl)
    
/*TODO #4: clicking next should show the next image*/
CarouselCtrl.prototype.next = function() {
 if(this.image < this.images.length) {
        this.image++;
     if(this.image == this.images.length-1){
         this.max = true;        
     }
      if(this.image !== 0){
            this.min = false;
      }

 }
}

/*TODO #4: clicking previous should show the previous image*/
CarouselCtrl.prototype.previous = function() {
    if(this.image > 0){
      this.image--;
       if(this.image == 0){
           this.min = true;
       }
  }
    
}



