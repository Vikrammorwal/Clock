let hands=document.getElementsByTagName('img')

let hour=new Date().getHours()
let minutes=new Date().getMinutes()
let second=new Date().getSeconds()

hands[2].style.transform=`rotate(${second*6}deg)`
hands[1].style.transform=`rotate(${minutes*6}deg)`
hands[0].style.transform=`rotate(${hour*30+minutes*0.5}deg)`

setInterval(()=>{
    second=second+1
    minutes=minutes+(1/60)
    hour=hour+(1/3600)
    hands[2].style.transform=`rotate(${second*6}deg)`
    hands[1].style.transform=`rotate(${minutes*6}deg)`
    hands[0].style.transform=`rotate(${hour*30+minutes*0.5}deg)`
},900)