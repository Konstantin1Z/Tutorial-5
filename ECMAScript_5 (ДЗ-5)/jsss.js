let body=document.body;
let h=document.createElement('h2');
h.innerHTML="Подробная информация";
h.setAttribute("align","center");

let c=document.createElement('center');
let t=document.createElement('table');
t.id="tt";

/////////////////////////////////////////////////////////////////////
let tr1=document.createElement('tr'); // 1-stroka
let td1=document.createElement('td'); // таблица
td1.innerHTML="Должность";
let td2=document.createElement('td');

let sel1=document.createElement('select');
sel1.setAttribute("name", "dolg");
sel1.id="dolg";
let opt1=document.createElement('option');
opt1.setAttribute("value", "0");
opt1.innerHTML="Выберите должность";
let opt2=document.createElement('option');
opt2.setAttribute("value", "1");
opt2.innerHTML="Рабочий";
let opt3=document.createElement('option');
opt3.setAttribute("value", "2");
opt3.innerHTML="Уборщик";
let opt4=document.createElement('option');
opt4.setAttribute("value", "3");
opt4.innerHTML="Грузчик";
let opt5=document.createElement('option');
opt5.setAttribute("value", "4");
opt5.innerHTML="Охранник";
let opt6=document.createElement('option');
opt6.setAttribute("value", "5");
opt6.innerHTML="Инженер";
let opt7=document.createElement('option');
opt7.setAttribute("value", "6");
opt7.innerHTML="Технолог";
let opt8=document.createElement('option');
opt8.setAttribute("value", "7");
opt8.innerHTML="Водитель";
let opt9=document.createElement('option');
opt9.setAttribute("value", "8");
opt9.innerHTML="Вахтёр";
let opt10=document.createElement('option');
opt10.setAttribute("value", "9");
opt10.innerHTML="Системный администратор";
let opt11=document.createElement('option');
opt11.setAttribute("value", "10");
opt11.innerHTML="Начальник транспортного цеха";
//////////////////////////////////////////////////////////////// Фамилия
let tr2=document.createElement('tr'); 
let td3=document.createElement('td'); 
td3.innerHTML="Фамилия";
let td4=document.createElement('td');
let inp1=document.createElement('input');
inp1.setAttribute("type","text");
inp1.setAttribute("name","fam");
inp1.setAttribute("placeholder","Фамилия");
inp1.setAttribute("required","");
inp1.id="fam";
//////////////////////////////////////////////////////////////// Имя
let tr3=document.createElement('tr'); 
let td5=document.createElement('td'); 
td5.innerHTML="Имя";
let td6=document.createElement('td');
let inp2=document.createElement('input');
inp2.setAttribute("type","text");
inp2.setAttribute("name","im");
inp2.setAttribute("placeholder","Имя");
inp2.setAttribute("required","");
inp2.id="im";
//////////////////////////////////////////////////////////////// Отчество
let tr4=document.createElement('tr'); 
let td7=document.createElement('td'); 
td7.innerHTML="Отчество";
let td8=document.createElement('td');
let inp3=document.createElement('input');
inp3.setAttribute("type","text");
inp3.setAttribute("name","otch");
inp3.setAttribute("placeholder","Отчество");
inp3.setAttribute("required","");
inp3.id="otch";
//////////////////////////////////////////////////////////////// birthday
let tr5=document.createElement('tr'); 
let td9=document.createElement('td'); 
td9.innerHTML="Возраст, лет";
let td10=document.createElement('td');
let inp4=document.createElement('input');
inp4.setAttribute("type","text");
inp4.setAttribute("name","date");
inp4.setAttribute("placeholder","Лет");
inp4.setAttribute("required","");
inp4.id="date";
//////////////////////////////////////////////////////////////// childrens
let tr6=document.createElement('tr'); 
let td11=document.createElement('td'); 
td11.innerHTML="Наличие детей";
let td12=document.createElement('td');
let inp5=document.createElement('input');
inp5.setAttribute("type","checkBox");
inp5.setAttribute("name","child");
inp5.id="child";
//////////////////////////////////////////////////////////////// staj
let tr7=document.createElement('tr'); 
let td13=document.createElement('td'); 
td13.innerHTML="Стаж";
let td14=document.createElement('td');
let inp6=document.createElement('input');
inp6.setAttribute("type","number");
inp6.setAttribute("name","staj");
inp6.setAttribute("placeholder","Стаж");
inp6.setAttribute("required","");
inp6.setAttribute("min","0");
inp6.setAttribute("max","100");
inp6.id="staj";
//////////////////////////////////////////////////////////////// education
let tr8=document.createElement('tr'); 
let td15=document.createElement('td'); 
td15.innerHTML="Образование";
let td16=document.createElement('td');

let sel2=document.createElement('select');
sel2.setAttribute("name", "educat");
sel2.id="educat";
let opta1=document.createElement('option');
opta1.setAttribute("value", "0");
opta1.innerHTML="Базавое";
let opta2=document.createElement('option');
opta2.setAttribute("value", "1");
opta2.innerHTML="Среднее";
let opta3=document.createElement('option');
opta3.setAttribute("value", "2");
opta3.innerHTML="Высшее";
//////////////////////////////////////////////////////////////// adress
let tr9=document.createElement('tr'); 
let td17=document.createElement('td'); 
td17.innerHTML="Адрес";
let td18=document.createElement('td');
let inp7=document.createElement('input');
inp7.setAttribute("type","text");
inp7.setAttribute("name","address");
inp7.setAttribute("placeholder","Адрес");
inp7.setAttribute("required","");
inp7.id="address";
//////////////////////////////////////////////////////////////// tel
let tr10=document.createElement('tr'); 
let td19=document.createElement('td'); 
td19.innerHTML="Телефон";
let td20=document.createElement('td');
let inp8=document.createElement('input');
inp8.setAttribute("type","tel");
inp8.setAttribute("name","tel");
inp8.setAttribute("placeholder","Телефон");
inp8.setAttribute("required","");
//inp8.setAttribute("pattern","[\+]\d{3}\d{2}\d{3}\d{2}\d{2}");
inp8.setAttribute("minlength","13");
inp8.setAttribute("maxlength","13");
inp8.id="tel";
//////////////////////////////////////////////////////////////// mail
let tr11=document.createElement('tr'); 
let td21=document.createElement('td'); 
td21.innerHTML="E-mail";
let td22=document.createElement('td');
let inp9=document.createElement('input');
inp9.setAttribute("type","email");
inp9.setAttribute("name","mail");
inp9.setAttribute("placeholder","E-mail");
inp9.setAttribute("required","");
inp9.id="mail";
//////////////////////////////////////////////////////////////// auto
let tr12=document.createElement('tr'); 
let td23=document.createElement('td'); 
td23.innerHTML="Наличие автомобиля";
let td24=document.createElement('td');
let inp10=document.createElement('input');
inp10.setAttribute("type","checkBox");
inp10.setAttribute("name","auto");
inp10.id="auto";
//////////////////////////////////////////////////////////////// buttons
let tr13=document.createElement('tr'); 
let td25=document.createElement('td'); 
td25.setAttribute("colspan","2");
td25.setAttribute("align","center");

let b1=document.createElement('button');
b1.setAttribute("type","submit");
b1.id="saveee";
b1.innerHTML="Сохранить";

let b2=document.createElement('button');
b2.setAttribute("onclick","clear");
b2.id="clear";
b2.innerHTML="Очистить";

let b3=document.createElement('button');
b3.setAttribute("onclick","glav()");
b3.innerHTML="На главную";

let b4=document.createElement('button');
b4.setAttribute("onclick","constr()");
b4.innerHTML="В конструктор";

body.appendChild(h);
c.appendChild(t);
body.appendChild(c);

t.appendChild(tr1);
tr1.appendChild(td1);
tr1.appendChild(td2);
sel1.appendChild(opt1);
sel1.appendChild(opt2);
sel1.appendChild(opt3);
sel1.appendChild(opt4);
sel1.appendChild(opt5);
sel1.appendChild(opt6);
sel1.appendChild(opt7);
sel1.appendChild(opt8);
sel1.appendChild(opt9);
sel1.appendChild(opt10);
sel1.appendChild(opt11);
td2.appendChild(sel1);
//fam
t.appendChild(tr2);
tr2.appendChild(td3);
tr2.appendChild(td4);
td4.appendChild(inp1);
//im
t.appendChild(tr3);
tr3.appendChild(td5);
tr3.appendChild(td6);
td6.appendChild(inp2);
//otch
t.appendChild(tr4);
tr4.appendChild(td7);
tr4.appendChild(td8);
td8.appendChild(inp3);
//date
t.appendChild(tr5);
tr5.appendChild(td9);
tr5.appendChild(td10);
td10.appendChild(inp4);
//child
t.appendChild(tr6);
tr6.appendChild(td11);
tr6.appendChild(td12);
td12.appendChild(inp5);
//staj
t.appendChild(tr7);
tr7.appendChild(td13);
tr7.appendChild(td14);
td14.appendChild(inp6);
//educat
sel2.appendChild(opta1);
sel2.appendChild(opta2);
sel2.appendChild(opta3);
t.appendChild(tr8);
tr8.appendChild(td15);
tr8.appendChild(td16);
td16.appendChild(sel2);
//adress
t.appendChild(tr9);
tr9.appendChild(td17);
tr9.appendChild(td18);
td18.appendChild(inp7);
//tel
t.appendChild(tr10);
tr10.appendChild(td19);
tr10.appendChild(td20);
td20.appendChild(inp8);
//mail
t.appendChild(tr11);
tr11.appendChild(td21);
tr11.appendChild(td22);
td22.appendChild(inp9);
//auto
t.appendChild(tr12);
tr12.appendChild(td23);
tr12.appendChild(td24);
td24.appendChild(inp10);

t.appendChild(tr13);
tr13.appendChild(td25);
td25.appendChild(b1);
td25.appendChild(b2);

c.appendChild(b3);
c.appendChild(b4);










const id = localStorage.getItem("idRec");

const myData = JSON.parse(localStorage.getItem("objectToPass"));

//деструктуризация массива
let{dolg, family, name, otch, age, child, staj, educat, address, phone, ...others}=myData[id];
console.log(dolg);

document.getElementById("dolg").options[document.getElementById('dolg').selectedIndex].text=dolg;//myData[id]["dolg"];
document.getElementById("fam").value=family;//myData[id]["family"];
document.getElementById("im").value=name;//myData[id]["name"];
document.getElementById("otch").value=otch;//myData[id]["otch"];
document.getElementById("date").value=age;//myData[id]["age"];
if (child=="Есть") //myData[id]["child"]
document.getElementById("child").checked = true;
else
document.getElementById("child").checked = false;
document.getElementById("staj").value=staj;//myData[id]["staj"];
document.getElementById("educat").options[document.getElementById('educat').selectedIndex].text=educat;//myData[id]["educat"];
document.getElementById("address").value=address;//myData[id]["address"];
document.getElementById("tel").value=phone;//myData[id]["phone"];
document.getElementById("mail").value=others.mail;//myData[id]["mail"];
if (others.auto=="Есть") //myData[id]["auto"]
document.getElementById("auto").checked = true;
else
document.getElementById("auto").checked = false;


function glav()
{location.replace("glavnaya.html");}
function constr()
{location.replace("constructor.html");}

document.getElementById("clear").onclick = function(e) {

//document.getElementById("dolg").options[document.getElementById('dolg').selectedIndex].text="";
 document.getElementById("fam").value="";
 document.getElementById("im").value="";
 document.getElementById("otch").value="";
 document.getElementById("date").value="";
 document.getElementById("child").checked = false;
 document.getElementById("staj").value="";
 //document.getElementById("educat").options[1].text;
 document.getElementById("address").value="";
 document.getElementById("tel").value="";
 document.getElementById("mail").value="";
 document.getElementById("auto").checked = false;

}



document.getElementById("saveee").onclick = function(e) 
{

function rabotnik(dolg, family, name, otch, age, child, staj, educat, address, phone, mail, auto)
    {
      this.dolg = dolg;
      this.family = family;
      this.name = name;
      this.otch = otch;
	  this.age=age;
	  this.child=child;
	  this.staj=staj;
	  this.educat=educat;
	  this.address = address;
	  this.phone = phone;
	  this.mail=mail;    
      this.auto=auto;

this.getDolg = function(){return this.dolg;}  
this.getFamily = function(){return this.family;}
this.getName = function(){return this.name;}
this.getOtch = function(){return this.otch;}
this.getAge = function(){return this.age;}
this.getChild = function(){return this.child;}
this.getStaj = function(){return this.staj;}
this.getEducat = function(){return this.educat;}
this.getAddress = function(){return this.address;}
this.getPhone = function(){return this.phone;}
this.getMail = function(){return this.mail;}
this.getAuto = function(){return this.auto;}

    }

let d;
if (document.getElementById("child").checked == true) 
d="Есть"
else
d="Нет"

let a;
if (document.getElementById("auto").checked == true) 
a="Есть"
else
a="Нет"

const noviRabotnik = new rabotnik(document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text, document.getElementById("fam").value, document.getElementById("im").value, document.getElementById("otch").value, document.getElementById("date").value, d, document.getElementById("staj").value, document.getElementById('educat').options[document.getElementById('educat').selectedIndex].text, document.getElementById("address").value, document.getElementById("tel").value,document.getElementById("mail").value, a);

myData[id]=noviRabotnik;

localStorage.removeItem('objectToPass');
localStorage.setItem('objectToPass',JSON.stringify(myData));


}