
const texts = ['Namaste,','Hello,','Welcome,'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.namaste').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 300);

}());


$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per + '%');
    $({animatedValue: 0}).animate({animatedValue: per},{
        duration:1000,
        stop:function(){
            $this.attr('per',Math.floor(this.animatedValue) + '%');
        },
        complete:function(){
            $this.attr('per',Math.floor(this.animatedValue) + '%');
        }
    });
});