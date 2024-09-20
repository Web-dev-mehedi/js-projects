let number = "2742"
let pin = "1234"
let avaliableMoney = 45000;


// login page
document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();// auto reload na hoyar jonno
     const input1 = document.getElementById('number').value;
     const input2 = document.getElementById('pin').value;
     if(input1 === number && input2 === pin ){
      window.location.href ="./home.html";
         
     }
    else{
      alert('sthik pin and number din')
    }

 })




document.getElementById('log-out').addEventListener('click',function(){
    window.location.href ="./login.html";
})


// home-page


document.getElementById('hidden').style.display ='none';
document.getElementById('hidden1').style.display ='none';
document.getElementById('hidden2').style.display ='none';

//for add  money
document.getElementById('addmoney').addEventListener('click', function(){
    document.getElementById('hidden').style.display ='contents';
    document.getElementById('hidden1').style.display ='none';
    document.getElementById('hidden2').style.display ='none';
    //
    document.getElementById('addmoney').classList.add('click');
    document.getElementById('click-h3').classList.add('click-h3');
    //
    document.getElementById('addmoney1').classList.remove('click');
    document.getElementById('click-h3-1').classList.remove('click-h3');
  
    //
    document.getElementById('addmoney2').classList.remove('click');
    document.getElementById('click-h3-2').classList.remove('click-h3');
    //
    document.getElementById('addmoney3').classList.remove('click');
    document.getElementById('click-h3-3').classList.remove('click-h3');
    //
    document.getElementById('addmoney4').classList.remove('click');
    document.getElementById('click-h3-4').classList.remove('click-h3');
    //
    document.getElementById('addmoney5').classList.remove('click');
    document.getElementById('click-h3-5').classList.remove('click-h3');
    })


    //
    document.getElementById('submit').addEventListener('click', function(event){
        event.preventDefault()
       const inputAmount = document.getElementById('amount').value
      const inputAmountNum =  parseFloat(inputAmount);

       const inputPin = document.getElementById('pin').value
       if(inputPin !== pin){
           alert("Write a correct pin")
       }
    
       const addAmount = document.getElementById('total-amount');
        // = avaliableMoney + inputAmountNum ;
        let all = avaliableMoney += inputAmountNum;
        addAmount.innerText = all;
       
    })





   //cash out

   document.getElementById('addmoney1').addEventListener('click', function(){
    document.getElementById('hidden1').style.display ='contents';
    document.getElementById('hidden').style.display ='none';
    document.getElementById('hidden2').style.display ='none';
    

    document.getElementById('addmoney1').classList.add('click');
    document.getElementById('click-h3-1').classList.add('click-h3');
    //
    document.getElementById('addmoney').classList.remove('click');
    document.getElementById('click-h3').classList.remove('click-h3');
  
    //
    document.getElementById('addmoney2').classList.remove('click');
    document.getElementById('click-h3-2').classList.remove('click-h3');
    //
    document.getElementById('addmoney3').classList.remove('click');
    document.getElementById('click-h3-3').classList.remove('click-h3');
    //
    document.getElementById('addmoney4').classList.remove('click');
    document.getElementById('click-h3-4').classList.remove('click-h3');
    //
    document.getElementById('addmoney5').classList.remove('click');
    document.getElementById('click-h3-5').classList.remove('click-h3');
  
    })

    //
    document.getElementById('submit1').addEventListener('click', function(event){
        event.preventDefault();

      const agentNumber = document.getElementById('agent-number').value;
      if(11 !== agentNumber.length){
        alert('please Write Valid Number')
      }

       const inputAmount = document.getElementById('amount1').value
      const inputAmountNum =  parseFloat(inputAmount);

       const inputPin = document.getElementById('pin1').value
       if(inputPin !== pin){
           alert("Write a correct pin")
       }
    
       const addAmount = document.getElementById('total-amount');
        // = avaliableMoney + inputAmountNum ;
        let all = avaliableMoney -= inputAmountNum;
        addAmount.innerText = all;
       
    })


//transfer money

   document.getElementById('addmoney2').addEventListener('click', function(){
    document.getElementById('hidden2').style.display ='contents';
    document.getElementById('hidden').style.display ='none';
    document.getElementById('hidden1').style.display ='none';

    document.getElementById('addmoney2').classList.add('click');
    document.getElementById('click-h3-2').classList.add('click-h3');
    //
    document.getElementById('addmoney').classList.remove('click');
    document.getElementById('click-h3').classList.remove('click-h3');
    //
    document.getElementById('addmoney1').classList.remove('click');
    document.getElementById('click-h3-1').classList.remove('click-h3');
    //
    document.getElementById('addmoney3').classList.remove('click');
    document.getElementById('click-h3-3').classList.remove('click-h3');
    //
    document.getElementById('addmoney4').classList.remove('click');
    document.getElementById('click-h3-4').classList.remove('click-h3');
    //
    document.getElementById('addmoney5').classList.remove('click');
    document.getElementById('click-h3-5').classList.remove('click-h3');
   
    })


    //
    document.getElementById('submit2').addEventListener('click', function(event){
        event.preventDefault();

      const agentNumber = document.getElementById('user-number').value;
      if(11 !== agentNumber.length){
        alert('please Write Valid Number')
      }

       const inputAmount = document.getElementById('amount2').value
      const inputAmountNum =  parseFloat(inputAmount);

       const inputPin = document.getElementById('pin2').value
       if(inputPin !== pin){
           alert("Write a correct pin")
       }
    
       const addAmount = document.getElementById('total-amount');
        // = avaliableMoney + inputAmountNum ;
        let all = avaliableMoney -= inputAmountNum;
        addAmount.innerText = all;
       
    })

//get bonus

document.getElementById('addmoney3').addEventListener('click', function(){
    // document.getElementById('hidden2').style.display ='contents';
    document.getElementById('hidden').style.display ='none';
    document.getElementById('hidden1').style.display ='none';
    document.getElementById('hidden2').style.display ='none';

//
document.getElementById('addmoney3').classList.add('click');
document.getElementById('click-h3-3').classList.add('click-h3');
//
document.getElementById('addmoney').classList.remove('click');
document.getElementById('click-h3').classList.remove('click-h3');
//
document.getElementById('addmoney1').classList.remove('click');
document.getElementById('click-h3-1').classList.remove('click-h3');
//
document.getElementById('addmoney2').classList.remove('click');
document.getElementById('click-h3-2').classList.remove('click-h3');
//
document.getElementById('addmoney4').classList.remove('click');
document.getElementById('click-h3-4').classList.remove('click-h3');
//
document.getElementById('addmoney5').classList.remove('click');
document.getElementById('click-h3-5').classList.remove('click-h3');
    })


 //pay bill
 
 document.getElementById('addmoney4').addEventListener('click', function(){
    // document.getElementById('hidden2').style.display ='contents';
    document.getElementById('hidden').style.display ='none';
    document.getElementById('hidden1').style.display ='none';
    document.getElementById('hidden2').style.display ='none';

// 
document.getElementById('addmoney4').classList.add('click');
document.getElementById('click-h3-4').classList.add('click-h3');
//
document.getElementById('addmoney').classList.remove('click');
document.getElementById('click-h3').classList.remove('click-h3');
//
document.getElementById('addmoney1').classList.remove('click');
document.getElementById('click-h3-1').classList.remove('click-h3');
//
document.getElementById('addmoney2').classList.remove('click');
document.getElementById('click-h3-2').classList.remove('click-h3');
//
document.getElementById('addmoney3').classList.remove('click');
document.getElementById('click-h3-3').classList.remove('click-h3');
//
document.getElementById('addmoney5').classList.remove('click');
document.getElementById('click-h3-5').classList.remove('click-h3');
    })

//trasection

document.getElementById('addmoney5').addEventListener('click', function(){
    // document.getElementById('hidden2').style.display ='contents';
    document.getElementById('hidden').style.display ='none';
    document.getElementById('hidden1').style.display ='none';
    document.getElementById('hidden2').style.display ='none';

//
document.getElementById('addmoney5').classList.add('click');
document.getElementById('click-h3-5').classList.add('click-h3');
//
document.getElementById('addmoney').classList.remove('click');
document.getElementById('click-h3').classList.remove('click-h3');
//
document.getElementById('addmoney1').classList.remove('click');
document.getElementById('click-h3-1').classList.remove('click-h3');
//
document.getElementById('addmoney2').classList.remove('click');
document.getElementById('click-h3-2').classList.remove('click-h3');
//
document.getElementById('addmoney3').classList.remove('click');
document.getElementById('click-h3-3').classList.remove('click-h3');
//
document.getElementById('addmoney4').classList.remove('click');
document.getElementById('click-h3-4').classList.remove('click-h3');

    })
