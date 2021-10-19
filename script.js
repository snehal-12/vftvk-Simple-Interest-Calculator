function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var term = document.getElementById("years");
    
    
    var p=parseFloat(principal.value)||0;
    var r=parseFloat(rate.value)||0;
    var t=parseInt(term.value)||0;
    //Update the current year to the year of recieving the interest amount
    var updateYear=new Date().getFullYear()+t;

       
    //Check if amount entered is not $0 and is positive number
    if(p==""||p<=0)
        {
            alert("Enter some positive $ amount!");
            document.getElementById("principal").focus();
        }
    
    else{
        var interest=p*r*t/100;
        var result = document.getElementById("result");
         
        result.innerHTML = "If you deposit " + "<span class='highlight'>$" + p + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + r + "%</span>," + "<br> you will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + updateYear + "</span>";
    }
    
}
//Dislpay slider value for rate of interest
function displayvalue(value)
{
    document.getElementById("ratevalue").innerHTML=value + "%";
}
        