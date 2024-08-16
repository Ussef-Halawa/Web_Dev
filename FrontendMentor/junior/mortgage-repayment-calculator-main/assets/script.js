function repayments(amount,term,rate) {
    let r = (rate / 100)/12 , n = term*12;
    let monthlypayment = (amount * r * Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
    let totalpayment = monthlypayment * n ;
    document.getElementById("monthly").innerHTML = "&pound;" + monthlypayment.toFixed(2);
    document.getElementById("total").innerHTML = "&pound;" + totalpayment.toFixed(2);


}

function InterestOnly(amount,term,rate) {
    let r = rate /100 , n = 12;
    let monthlypayment =  amount * r / n;
    let totalpayment = parseInt(amount) + (amount * r * term);
    document.getElementById("monthly").innerHTML = "&pound;" + monthlypayment.toFixed(2);
    document.getElementById("total").innerHTML = "&pound;" + totalpayment.toFixed(2);
}

function submithandler(){
    event.preventDefault();
    let input =  {
        mortgage_amount : document.querySelector("#mortgage_amount").value,
        mortgage_term : document.querySelector("#mortgage_term").value,
        interest_rate : document.querySelector("#interest_rate").value,
        type : document.querySelector("#repayment").checked
    };
    if(input.type){
        repayments(input.mortgage_amount,input.mortgage_term,input.interest_rate);
    }
    else{
        InterestOnly(input.mortgage_amount,input.mortgage_term,input.interest_rate);
    }
}

