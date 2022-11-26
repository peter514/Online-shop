const user = JSON.parse(localStorage.getItem('user'));
document.getElementById('fullName').defaultValue=user.fullName;

const checkoutBtn = document.getElementById('checkoutBtn')
const fullName = document.getElementById('fullName')
const delivery = document.getElementById('delivery')
const cardNo = document.getElementById('cardNo')

const cardType = document.getElementById('cardType')

const expiry = document.getElementById('expiry')

const cvv = document.getElementById('cvv')

//checkout function 
checkoutBtn.addEventListener('click', function (e){
    e.preventDefault()
    console.log(cardNo.value)
if(fullName.value==''||fullName.value==null,delivery.value==''||delivery.value==null,cardNo.value==''||cardNo.value==null,cardType.value==''||cardType.value==null, expiry.value==''||expiry.value==null, cvv.value==''||cvv.value==null ){

alert("All fields are required!! ")

}else{
    alert(`Order is being processed. Delivery will be made to:  ${delivery.value}`)
    localStorage.removeItem('cartItems')
    location.href='./dashboard.html'
}
})

