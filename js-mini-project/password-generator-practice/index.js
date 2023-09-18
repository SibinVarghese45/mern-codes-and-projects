// imported all html elements to js file
const pswdDisplay = document.querySelector('#data-password-display');
const copyBtn = document.querySelector('[data-copy]');
const lengthDisplay = document.querySelector('[data-length-number]');
const checkboxforUppercase = document.querySelector('#uppercase');
const checkboxforLowercase = document.querySelector('#lowercase');
const checkboxforNumbers = document.querySelector('#numbers');
const checkboxforSymbols = document.querySelector('#symbols');
const slider = document.querySelector('[data-length-slider]');
const generatePswdBtn = document.querySelector('#generateBtn');
const allCheckBox = document.querySelectorAll('input[type="checkbox"]');
const tooltip = document.querySelector(".tooltip")
const symbols = '#$%@!';
let checkCount = 0;

let password = "";
let PasswordLength=10;
handleCheck();


function displayPassword(pswd){
    console.log(pswd);
    // input tag mein value set karna padhtha hai aur div mein yaa aur koi tag mein innerhtml yaa innertext chal jayega
    pswdDisplay.value = pswd;
}


async function copyText(){
    try{
        pswdDisplay.select();
        await navigator.clipboard.writeText(pswdDisplay.value);
        console.log("Successfull")

        tooltip.classList.add('active');
        tooltip.innerHTML = "Copied"

        setTimeout(()=>{
            tooltip.classList.remove('active')
        }, 2000)

    }
    catch(e){
        const error = new Error("Not copied")
        console.log(error)
        console.log("Unsuccessfull")
    }
}


function handleCheck(){
    slider.value = PasswordLength;
    lengthDisplay.innerHTML = PasswordLength;
}

function generateUpperCase(){

    let uppercase = Math.floor(Math.random()*(90-65+1))+65;
    return String.fromCharCode(uppercase);

}

function generateLowerCase(){

    let lowercase = Math.floor(Math.random()*(122-97+1))+97;
    return String.fromCharCode(lowercase);

}

function generateNumber(){

    let number = Math.floor(Math.random()*(9-0+1))+0;
    return number;

}

function generateSymbols(){

    let symbolsIndex = Math.floor(Math.random()*(4-0+1))+0;
    return symbols[symbolsIndex];

}

// generating for checked checkboxes
generatePswdBtn.addEventListener('click', () => {

    let funcArray = [];
    password=""
    

    if(checkboxforUppercase.checked){
        funcArray.push(generateUpperCase);
    }

    if(checkboxforLowercase.checked){
        funcArray.push(generateLowerCase);
    }

    if(checkboxforNumbers.checked){
        funcArray.push(generateNumber);
    }

    if(checkboxforSymbols.checked){
        funcArray.push(generateSymbols);
    }

    
        // generating for remaining items
        for(let i=0; i<PasswordLength; i++){
            let rndNum = Math.floor(Math.random()*((funcArray.length-1)-0+1))+0;
            password+=funcArray[rndNum]();
        }
        // console.log(password);

        displayPassword(password);
    
})

// taking input from slider
slider.addEventListener('input', (e)=>{
    PasswordLength = e.target.value;
    handleCheck();
})

// generatePswdBtn.addEventListener('click', generatePswdCheckboxCheck)
// checkboxforUppercase.addEventListener('change', ()=>{
//     if(this.checked){
        
//     }
// })

// checkboxforLowercase.addEventListener('change', ()=>{
//     if(this.checked){
//         password+=generateLowerCase();
//         checkCount+=1;
//     }
// })

// checkboxforNumbers.addEventListener('change', ()=>{
//     if(this.checked){
//         password+=generateNumber();
//         checkCount+=1;
//     }
// })

// checkboxforSymbols.addEventListener('change', ()=>{
//     if(this.checked){
//         password+=generateSymbols();
//         checkCount+=1;
//     }
// })
