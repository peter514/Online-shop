const email= document.getElementById('email')
const password = document.getElementById('password')
const loginBtn= document.getElementById('login')

const user = JSON.parse(localStorage.getItem('user')) 

//loging function
loginBtn.addEventListener('click',function(e){
    e.preventDefault();
   //console.log(user)  
   
    
    if(email.value==null|| email.value=='', password.value==null ||password.value==''){
        alert("Password and email are required!!")
    }else if(user==null){
       alert("No user found!! ")
    }
    else{
        
     if(password.value===user.password && email.value===user.email ){
        alert("correct details")
        location.replace('./dashboard.html')
     }else{
        alert(`Incorrect login details!!` )
     }


    }


})