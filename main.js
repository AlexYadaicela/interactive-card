const form = document.querySelector('form');

// change card image information 
const frontCardNumber = document.querySelector('.card_number'); 
const frontCardName = document.querySelector('.card_name'); 
const frontCardDateMonth = document.querySelector('#date_month'); 
const frontCardDateYear = document.querySelector('#date_year');
const backCardCVC = document.querySelector('.card_cvc'); 

// form information
const userName = document.getElementById('username'); 
const cardNumber = document.getElementById('cardnumber'); 
const dateMonth = document.getElementById('date');
const dateYear =  document.getElementById('year');
const cardCVC = document.getElementById('cvc'); 


// handle user name

const __name = document.querySelector('.__name'); 
userName.addEventListener('input', () => {
    const strValue = userName.value; 
    if(strValue == ''){
        frontCardName.textContent = 'Jane Applessed'; 
    }else{
        frontCardName.textContent = strValue; 
    }
}); 

// handle card number

cardNumber.addEventListener('input', () => {
    
    if(cardNumber.value === ''){
        frontCardNumber.textContent = '1234 5678 9123 0000';
    }else{
        if(!isNaN(cardNumber.value)){
            cardNumber.value.replace(/\s/g, ''); 
            const formattedValue = cardNumber.value.replace(/(.{4})(?!$)/g, '$1 ');
            frontCardNumber.textContent = formattedValue; 
        }
    }
}) 

// handle card experation date
dateMonth.addEventListener('input', () => {
    if(dateMonth.value === ''){
        frontCardDateMonth.textContent = '00';
        console.log('working');
    }else{
        if(!isNaN(dateMonth.value)){
            frontCardDateMonth.textContent = dateMonth.value; 
        }
    }
});

dateYear.addEventListener('input', () => {
    if(dateYear.value === ''){
        frontCardDateYear.textContent = '00';
    }else{
        if(!isNaN(dateYear.value)){
            frontCardDateYear.textContent = dateYear.value; 
        } 
    }
});

// handle card cvc
cardCVC.addEventListener('input', () => {
    if(cardCVC.value === ''){
        backCardCVC.textContent = '000'; 
    }else{
        if(!isNaN(cardCVC.value)){
            backCardCVC.textContent = cardCVC.value; 
        }
    }
});



form.addEventListener('submit', (e) => {
    e.preventDefault(); 
})