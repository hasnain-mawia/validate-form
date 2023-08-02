

let username = document.getElementById('username');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let submit = 1;

let validateForm = () =>{
    if(username.value == ""){
        document.getElementById('userErr').innerHTML = 'Username Must required';
        submit = 0;
    }
    else if(username.value.length < 8 ){
    document.getElementById('userErr').innerHTML = 'Username required minimum 8 charecters';
    submit = 0;
    }
    else{
        document.getElementById('userErr').innerHTML = '';
        submit = 1;
    }
    if(phone.value == ""){
        document.getElementById('phoneErr').innerHTML = 'Phone Number Must required';
        submit = 0;
    }else if(phone.value.length < 11 ){
        document.getElementById('phoneErr').innerHTML = 'Phone Number required minimum 11 charecters';
        submit = 0;
    }else{
        document.getElementById('phoneErr').innerHTML = '';
        submit = 0;
    }

    if(password.value == ""){
        document.getElementById('passErr').innerHTML = 'Password Must required';
        submit = 0;
    }else if(password.value.length < 8 ){
        document.getElementById('passErr').innerHTML = 'Password required minimum 8 charecters';
        submit = 0;
    }
    else{
        document.getElementById('passErr').innerHTML = '';
        submit = 1;
    }
   if (submit){
    return true;
    }
    else{
        return false;   
    }
}