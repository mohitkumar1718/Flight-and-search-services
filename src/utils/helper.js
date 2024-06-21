function compareDateTime(dateTimeString1,dateTimeString2){
    const dateTime1=new Date(dateTimeString1);
    const dateTime2=new Date(dateTimeString2);

    return dateTime1.getTime()> dateTime2.getTime();
}

module.exports={
    compareDateTime
}