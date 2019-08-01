
let parent = document.body;
parent.setAttribute("onload", "clik()");


let q=document.createElement('div');
q.setAttribute("onclick", "cd()");
q.id="qwe";

let a=document.createElement('a');
a.className ="aa";
a.setAttribute("href", "constructor.html");

let d=document.createElement('div');
d.className ="ss";
d.innerHTML="Создать";

a.appendChild(d);

let ttt = document.createElement('table');
ttt.id="t";
ttt.className ="table_blur";


parent.appendChild(q);
parent.appendChild(a);
parent.appendChild(ttt);





var clik = () =>
{
let clik=document.getElementById('qwe');
clik.click();
}


// function clik()
// {
// let clik=document.getElementById('qwe');
// clik.click();
// }

let j=document.getElementById("qwe");

const myData = JSON.parse(localStorage.getItem("objectToPass"));//localStorage['objectToPass'];
//localStorage.removeItem( 'objectToPass' ); 

function cd()
{

if (myData.length !=0) 
{

//j.innerHTML=myData[1]["dolg"];

//////////////////////////////////////////////////////////////////////////////////////////
 
//var del;

let stroka0 = document.createElement('tr');
let stolbb0 = document.createElement('td');
stolbb0.innerHTML="№";
let stolbb1 = document.createElement('td');
stolbb1.innerHTML="Должность";
let stolbb2 = document.createElement('td');
stolbb2.innerHTML="Фамилия";
let stolbb3 = document.createElement('td');
stolbb3.innerHTML="Имя";
let stolbb4 = document.createElement('td');
 stolbb4.innerHTML="Отчество";
let stolbb5 = document.createElement('td');
 stolbb5.innerHTML="Возраст, лет";
let stolbb6 = document.createElement('td');
 stolbb6.innerHTML="Наличие детей";
let stolbb7 = document.createElement('td');
 stolbb7.innerHTML="Общий трудовой стаж, лет";
let stolbb8 = document.createElement('td');
 stolbb8.innerHTML="Образование";
let stolbb9 = document.createElement('td');
 stolbb9.innerHTML="Адрес";
let stolbb10 =document.createElement('td');
 stolbb10.innerHTML="Телефон";
let stolbb11 =document.createElement('td');
 stolbb11.innerHTML="Е-маил";
let stolbb12 =document.createElement('td');
 stolbb12.innerHTML="Наличие автомобиля";
let stolbb13 = document.createElement('td');
 stolbb13.innerHTML="Примечание";

document.getElementById("t").appendChild(stroka0);

document.getElementById("t").appendChild(stolbb0);
document.getElementById("t").appendChild(stolbb1);
document.getElementById("t").appendChild(stolbb2);
document.getElementById("t").appendChild(stolbb3);
document.getElementById("t").appendChild(stolbb4);
document.getElementById("t").appendChild(stolbb5);
document.getElementById("t").appendChild(stolbb6);
document.getElementById("t").appendChild(stolbb7);
document.getElementById("t").appendChild(stolbb8);
document.getElementById("t").appendChild(stolbb9);
document.getElementById("t").appendChild(stolbb10);
document.getElementById("t").appendChild(stolbb11);
document.getElementById("t").appendChild(stolbb12);
document.getElementById("t").appendChild(stolbb13);


//let{[dolg, family, name, otch, age, child, staj, educat, address, phone, mail, auto]}=myData;
//console.log(dolg);


for (var i = 0; i <=myData.length; i++) 
{
	
let stroka = document.createElement('tr');
let stolb0 = document.createElement('td');
stolb0.innerHTML=i+1;
let stolb1 = document.createElement('td');
stolb1.innerHTML=myData[i]["dolg"];
let stolb2 = document.createElement('td');
stolb2.innerHTML=myData[i]["family"];//noviRabotnik.getFamily();
let stolb3 = document.createElement('td');
stolb3.innerHTML=myData[i]["name"];//noviRabotnik.getName();
let stolb4 = document.createElement('td');
stolb4.innerHTML=myData[i]["otch"];//noviRabotnik.getOtch();
let stolb5 = document.createElement('td');
stolb5.innerHTML=myData[i]["age"];//noviRabotnik.getAge();
let stolb6 = document.createElement('td');
stolb6.innerHTML=myData[i]["child"];//noviRabotnik.getChild();
let stolb7 = document.createElement('td');
stolb7.innerHTML=myData[i]["staj"];//noviRabotnik.getStaj();
let stolb8 = document.createElement('td');
stolb8.innerHTML=myData[i]["educat"];//noviRabotnik.getEducat();
let stolb9 = document.createElement('td');
stolb9.innerHTML=myData[i]["address"];//noviRabotnik.getAddress();
let stolb10 =document.createElement('td');
stolb10.innerHTML=myData[i]["phone"];//noviRabotnik.getPhone();
let stolb11 =document.createElement('td');
stolb11.innerHTML=myData[i]["mail"];//noviRabotnik.getMail();
let stolb12 = document.createElement('td');
stolb12.innerHTML=myData[i]["auto"];//noviRabotnik.getAuto();

let stolb13 = document.createElement('td');
stolb13.innerHTML="<div  class="+"redcl"+" id="+"red"+i+">Редактировать</div><div class="+"delcl"+" id="+"del"+i+">Удалить</div>";
//stolb13.innerHTML="<div  class="+"redcl"+" id="+"red"+i+">Редактировать</div><div class="+"delcl"+" id="+"del"+i+">Удалить</div><div class="+"detcl"+" id="+"det"+i+"><u>Подробнее</u></div>";



//document.getElementById("t").appendChild(stroka0);
document.getElementById("t").appendChild(stroka);
document.getElementById("t").appendChild(stolb0);
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
document.getElementById("t").appendChild(stolb13);

}

} 
else 
{
let fs=document.getElementById("tab");
fs.style.display="none";
}

}

//Обработка нажатия кнопок
document.querySelector('#t').addEventListener('click', function(e){ 
  let id = e.target.id; // Получили ID, т.к. в e.target содержится элемент по которому кликнули
let ida = id.substring(0, 3); 
// document.querySelector('#qwe').innerHTML = ida; 
if (ida=="del") // Удалить
{

let str = id.substring(3, id.length);

myData.splice(str,1);
localStorage.removeItem('objectToPass');
localStorage.setItem('objectToPass',JSON.stringify(myData));
location.replace("glavnaya.html");	

}

if (ida=="red") // Редактировать
{

let str = id.substring(3, id.length);

localStorage.setItem('idRec', str);
localStorage.setItem('objectToPass',JSON.stringify(myData));
location.replace("redact.html");

}

});
