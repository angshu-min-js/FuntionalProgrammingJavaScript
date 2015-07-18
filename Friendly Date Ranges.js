function friendly(str) {
  var fromDate=str[0].split("-"),
      toDate=str[1].split("-"),
      months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"],
        result = [],
        fromDay = parseInt(fromDate[2]),
        fromMonth = parseInt(fromDate[1]),
        fromYear = parseInt(fromDate[0]),
       toDay = parseInt(toDate[2]),
        toMonth = parseInt(toDate[1]),
        toYear = parseInt(toDate[0]);
  
  function dayconvert(day){
    if (day === 1) {
        return(day + "st");
    } else if (day === 2) {
        return(day + "nd");
    } else if (day === 3) {
        return (day+ "rd");
    } else {
        return (day + "th");
    }
  }
    //end converting day
    fromDay = dayconvert(fromDay);
    toDay= dayconvert(toDay);
  
    if (fromDay === toDay && fromMonth === toMonth && fromYear === toYear) { 
        result.push(months[fromMonth - 1] + " " + fromDay + ", " + toYear);
        
    } else if (fromMonth === toMonth && fromYear === toYear) {
        result.push(months[fromMonth - 1] + " " + fromDay, toDay);
        
    } else if (fromYear === toYear) {
        result.push(months[fromMonth - 1] + " " + fromDay, months[toMonth - 1] + " " + toDay + ", " + toYear);
    } else if (new Date().getFullYear() === fromYear && fromYear === toYear) {
        result.push(months[fromMonth - 1] + " " + fromDay, months[toMonth - 1] + " " + toDay);
       
    } else if (toYear - new Date().getFullYear() < 2 &&  toYear - fromYear <=1 && toYear - fromYear >0 ) {
        result.push(months[fromMonth - 1] + " " + fromDay, months[toMonth - 1] + " " + toDay);}
  else{
  	result.push(months[fromMonth - 1] + " " + fromDay + ", " + fromYear, months[toMonth - 1] + " " + toDay + ", " + toYear);
        }
console.log(result);
return result;
}

friendly(['2015-07-01', '2015-07-04']);
