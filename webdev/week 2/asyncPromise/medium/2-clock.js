function updateTime(){
    const now=new Date();

    //Extract hours, minutes, seconds
    let hours=now.getHours();
    const minute=now.getMinutes();
    const second=now.getSeconds();

    //time 24 hours
    const time24=`${padZero(hours)}:: ${padZero(minute)}::${padZero(second)}`;

    //time 12 hrs
    const ampm=hours>12?'pm':'am';
    hours=hours%12 || 12;
    const time12=`${padZero(hours)}:: ${padZero(minute)}::${padZero(second)} ${ampm}`;

    console.log(time12);
    console.log(time24);

}

function padZero(num){
    return num<10?'0'+num:num;
}

setInterval(updateTime, 1000);