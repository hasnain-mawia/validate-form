

let username = document.getElementById('username');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let submit = 1;

let validateForm = () =>{
    if(username.value == ""){
        document.getElementById('userErr').innerHTML = 'Username Must required';
        username.style.border = '2px solid red'
        submit = 0;
    }
    else if(username.value.length < 8 ){
    document.getElementById('userErr').innerHTML = 'Username required minimum 8 charecters';
    username.style.border = '2px solid red'
    submit = 0;
    }
    else{
        document.getElementById('userErr').innerHTML = '';
        username.style.border = '2px solid transparent';
        submit = 1;
    }
    if(phone.value == ""){
        document.getElementById('phoneErr').innerHTML = 'Phone Number Must required';
        phone.style.border = '2px solid red'
        submit = 0;
    }else if(phone.value.length < 11 ){
        document.getElementById('phoneErr').innerHTML = 'Phone Number required minimum 11 charecters';
        phone.style.border = '2px solid red'
        submit = 0;
    }else{
        document.getElementById('phoneErr').innerHTML = '';
        phone.style.border = '2px solid transparent';
        submit = 0;
    }

    if(password.value == ""){
        document.getElementById('passErr').innerHTML = 'Password Must required';
        password.style.border = '2px solid red'
        submit = 0;
    }else if(password.value.length < 8 ){
        document.getElementById('passErr').innerHTML = 'Password required minimum 8 charecters';
        password.style.border = '2px solid red'
        submit = 0;
    }
    else{
        document.getElementById('passErr').innerHTML = '';
        password.style.border = '2px solid transparent';
        submit = 1;
    }
   if (submit){
    return true;
    }
    else{
        return false;   
    }
}
