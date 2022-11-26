const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const registerButton = document.getElementById('registerButton')

//submit 
registerButton.addEventListener('click', function submit (e){
    e.preventDefault()
 //check inputs 
 if( fullName.value==null|| fullName.value=='', email.value==null ||email.value=='', phone.value==null || phone.value=='', password.value==null ||  password.value=='' ){
    alert("All fields are required!! ")
     
 }else{
    const user = {
    fullName:fullName.value,
    email:email.value,
    phone:phone.value,
    password:password.value
 }
console.log(user)
localStorage.setItem('user', JSON.stringify(user))
document.getElementById('regForm').reset()
alert("Account created!!")
location.href='./login.html'

  
 }




})