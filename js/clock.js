function Clock(timespan){
    var date1=new Date(timespan);
    var totalSecs=(new Date()-date1)/1000;
    var days=Math.floor(totalSecs/3600/24);
    var hours=Math.floor((totalSecs-days*24*3600)/3600);
    var mins=Math.floor((totalSecs-days*24*3600-hours*3600)/60);
    var secs=Math.floor((totalSecs-days*24*3600-hours*3600-mins*60));
    document.getElementById("Clock").innerText=+days+"天"+hours+"小时"+mins+"分钟"+secs+"秒";
   }
   var clock;
   window.onload=function(){
    clock=self.setInterval("Clock('2018/1/20')", 500);
   }