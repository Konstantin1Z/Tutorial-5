let parent = document.body;

let q=document.createElement('div');
q.setAttribute("onclick", "gl()");
q.className="ss";
q.innerHTML="Главная";

let w=document.createElement('div');
w.id="save";

let e=document.createElement('div');// контейнер формы
e.className="form";

let h=document.createElement('h1');// Заголовок
h.innerHTML="Новый работник";

let f=document.createElement('form');// Форма
f.id="form";

let t=document.createElement('table'); // таблица
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
td9.innerHTML="Дата рождения";
let td10=document.createElement('td');
let inp4=document.createElement('input');
inp4.setAttribute("type","date");
inp4.setAttribute("name","date");
inp4.setAttribute("placeholder","Дата рождения");
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
//////////////////////////////////////////////////////////////// childrens
let tr12=document.createElement('tr'); 
let td23=document.createElement('td'); 
td23.innerHTML="Наличие автомобиля";
let td24=document.createElement('td');
let inp10=document.createElement('input');
inp10.setAttribute("type","checkBox");
inp10.setAttribute("name","auto");
inp10.id="auto";
//////////////////////////////////////////////////////////////// buttons
let c=document.createElement('center'); 
let b1=document.createElement('button');
b1.setAttribute("type","button");
b1.setAttribute("onclick","sssave()");
b1.id="save";
b1.innerHTML="Сохранить";
let b2=document.createElement('button'); 
b2.setAttribute("type","reset");
b2.innerHTML="Очистить";


parent.appendChild(q);//button
parent.appendChild(w);//div
parent.appendChild(e);//div
e.appendChild(h);
e.appendChild(f);
f.appendChild(t);
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
//errors
let er=document.createElement('div');
er.id="error";
f.appendChild(er);

c.appendChild(b1);
c.appendChild(b2);
f.appendChild(c);
//buttons
c.appendChild(b1);
c.appendChild(b2);
f.appendChild(c);

let c1=document.createElement('center');
let t1=document.createElement('table');
t1.setAttribute("border","1");
t1.id="t";
t1.style.marginTop="20px";
t1.style.marginBottom="20px";
c1.appendChild(t1);
parent.appendChild(c1);


var i=0;
const mas=[];
const errors=[];
function sssave()
{
	var error = document.getElementById("error");


if (document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="" || document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text=="Выберите должность") 
{
errors.push("Выберите должность");	
error.innerHTML="Выберите должность";
}


else if (document.getElementById("fam").value=="") 
{
errors.push("Введите фамилию");	
error.innerHTML="Введите фамилию";
}
else if (document.getElementById("im").value=="") 
{
errors.push("Введите имя");
error.innerHTML="Введите имя";
}

else if (document.getElementById("otch").value=="") 
{
errors.push("Введите отчество");
error.innerHTML="Введите отчество";
}

else if (document.getElementById("date").value=="") 
{
errors.push("Введите дату рождения");
error.innerHTML="Введите дату рождения";
}

else if (document.getElementById("staj").value=="") 
{
errors.push("Введите трудовой стаж");
error.innerHTML="Введите трудовой стаж";
}

else if (document.getElementById("address").value=="") 
{
errors.push("Введите адрес");
error.innerHTML="Введите адрес";
}

else if (document.getElementById("tel").value=="" || document.getElementById("tel").validity.valid==false) 
{
errors.push("Введите номер телефона");
error.innerHTML="Введите номер телефона";
}

else if (document.getElementById("mail").value=="" || document.getElementById("mail").validity.valid==false) 
{
errors.push("Введите адрес электронной почты");
error.innerHTML="Введите адрес электронной почты";
}


else 
if (document.getElementById("fam").value !="" && document.getElementById("im").value !="" && document.getElementById("otch").value !="" && document.getElementById("date").value !="" && document.getElementById("staj").value !="" && document.getElementById("educat").value !="" && document.getElementById("address").value !="" && document.getElementById("tel").value !="" && document.getElementById("mail").value !="") 
{
error.innerHTML="";
errors.length=0;


//------- вычисляем количество лет-(применяем стрелочную функцию)-------------------------------------------

let aage = () => 
{
let a = new Date(document.getElementById("date").value);
let b = new Date();

    let age = b.getFullYear() - a.getFullYear();
    let m = b.getMonth() - a.getMonth();
    if (m < 0 || (m === 0 && b.getDate() < a.getDate())) 
    {
        age--;
    }

return age;	
}

//console.log(aage());

//------- Считываем буливые значения чекбоксов и переводим в нормальные слова-(применяем стрелочную функцию)--------
// Дети

let childd = () =>
{
let c=document.getElementById("child").checked;
if(c==true)
c="Есть";
else
c="Нет";
return c;
}

// Авто
let auto = () =>
{
let d=document.getElementById("auto").checked;
if(d==true)
d="Есть";
else
d="Нет";	
return d;
}


//object

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


//var
const noviRabotnik = new rabotnik(document.getElementById('dolg').options[document.getElementById('dolg').selectedIndex].text, document.getElementById("fam").value, document.getElementById("im").value, document.getElementById("otch").value, aage(), childd(), document.getElementById("staj").value, document.getElementById('educat').options[document.getElementById('educat').selectedIndex].text, document.getElementById("address").value, document.getElementById("tel").value,document.getElementById("mail").value, auto());

mas.push(noviRabotnik);    

// диструктивное присвоение объекта
let{dolg, family, name, otch, age, child, staj, educat, address, phone, mail, ...other}=noviRabotnik;
//console.log(other);

let stroka = document.createElement('tr');
let stolb1 = document.createElement('td');
stolb1.innerHTML=dolg;//noviRabotnik.getDolg();
let stolb2 = document.createElement('td');
stolb2.innerHTML=family;//noviRabotnik.getFamily();
let stolb3 = document.createElement('td');
stolb3.innerHTML=name;//noviRabotnik.getName();
 let stolb4 = document.createElement('td');
 stolb4.innerHTML=otch;//noviRabotnik.getOtch();
 let stolb5 = document.createElement('td');
 stolb5.innerHTML=age;//noviRabotnik.getAge();
 let stolb6 = document.createElement('td');
 stolb6.innerHTML=child;//noviRabotnik.getChild();//document.getElementById("child").checked;
 let stolb7 = document.createElement('td');
 stolb7.innerHTML=staj;//noviRabotnik.getStaj();
 let stolb8 = document.createElement('td');
 stolb8.innerHTML=educat;//noviRabotnik.getEducat();
 let stolb9 = document.createElement('td');
 stolb9.innerHTML=address;//noviRabotnik.getAddress();
 let stolb10 = document.createElement('td');
 stolb10.innerHTML=phone;//noviRabotnik.getPhone();
 let stolb11 = document.createElement('td');
 stolb11.innerHTML=mail;//noviRabotnik.getMail();
 let stolb12 = document.createElement('td');
 stolb12.innerHTML=other.auto;//noviRabotnik.getAuto();//document.getElementById("auto").checked;

//document.tab.appendChild(head);
document.getElementById("t").appendChild(stroka);
document.getElementById("t").appendChild(stolb1);
document.getElementById("t").appendChild(stolb2);
document.getElementById("t").appendChild(stolb3);
document.getElementById("t").appendChild(stolb4);
document.getElementById("t").appendChild(stolb5);
document.getElementById("t").appendChild(stolb6);
document.getElementById("t").appendChild(stolb7);
document.getElementById("t").appendChild(stolb8);
document.getElementById("t").appendChild(stolb9);
document.getElementById("t").appendChild(stolb10);
document.getElementById("t").appendChild(stolb11);
document.getElementById("t").appendChild(stolb12);

i++;

}

}


function gl()
{

localStorage.setItem( 'objectToPass', JSON.stringify(mas));

location.replace("glavnaya.html");

}

