let D1=document.getElementById("D1");
const  start=()=>{
let date=new Date();
let hh=date.getHours();
let mm=date.getMinutes();
let ss=date.getSeconds();
hh=hh==0? hh="12":hh;
hh=hh<10? hh="0"+hh:hh;
mm=mm<10? mm="0"+mm:mm;
ss=ss<10?  ss="0"+ss:ss;
D1.textContent=hh+":"+mm+":"+ss;
}
start();
setInterval(start,1000);