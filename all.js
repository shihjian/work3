var send = document.querySelector('.send');
send.addEventListener('click',signup,false);

function signup(){
    var emailStr=document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email=emailStr;
    account.password=passwordStr;
    
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data=JSON.stringify(account);
    xhr.send(data);
    xhr.onload=function(){
        console.log(xhr);
        var call = JSON.parse(xhr.responseText);
        var vertStr=call.message;
        if(vertStr=="帳號註冊成功"){
            document.querySelector('.verifiedInfoID').innerHTML ='<p class="text">帳號註冊成功</p>';

        }else{
            document.querySelector('.verifiedInfoID').innerHTML ='<p class="text">帳號註冊失敗</p>';
        }
    }
}