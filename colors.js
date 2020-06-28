var Link = {
  setColor:function (color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //     alist[i].style.color = color;
  //     i = i + 1;
  // }
  $('a').css('color', color);
}
}

var Body = {
  setColor:function (color){
    //  document.querySelector('body').style.color= color;
    $('body').css('color',color);
  },
  setBackColor:function (color){
  //  document.querySelector('body').style.backgroundColor= color;
  $('body').css('backgroundColor',color);
  }
}
function ndh(self){
var target = document.querySelector('body');
if(self.value === 'night'){
Body.setBackColor('black');
Body.setColor('white');
self.value = 'day';

Link.setColor('powderblue');

} else {
Body.setBackColor('white');
Body.setColor('black');
self.value = 'night';

Link.setColor('blue');
}
}
