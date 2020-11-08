const var1Start = $('.aha1');
const var2Start = $('.aha2');
const var3Start = $('.aha3');
const var4Start = $('.aha4');
const var5Start = $('.aha5');
const var6Start = $('.aha6');
const speachStart = $('.speech');

const button1 = $('.js_knopka');
const button2 = $('.js_knopka2');
const textStart = $('.js-text');

const textStart2 = {
  "text":[
    "Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speech}"
  ]
}

button1.click(function(){
  textStart.html(textStart2.text);
  })

button2.click(function(){
  const var1 = var1Start.val();    
  const var2 = var2Start.val();
  const var3 = var3Start.val();
  const var4 = var4Start.val();
  const var5 = var5Start.val();
  const var6 = var6Start.val();
  const speech = speachStart.val();
  
  const NEWTEXT ={
     "text": [
       `Жили-были ${var1} да ${var2}`,
       `Была у них ${var3}`,
       `Снесла ${var3} ${var4}, не простое - золотое`,
       `${var1} бил, бил - не разбил`,
       `${var2} била, била - не разбила`,
       `${var5} бежала, ${var6} задела, ${var4} упало и разбилось`,
       `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
       `${speech}`,
     ]};
  
textStart.html(NEWTEXT.text);
  });  

