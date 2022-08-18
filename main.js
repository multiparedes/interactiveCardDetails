const mainScene = document.querySelector(".form-section");
const acceptScene = document.querySelector(".showSuccess");
const submitButton = document.querySelector(".submit-button");


submitButton.addEventListener("click", () => {
    changeScene();
})

function changeScene() {
    if(validateFrom() == true) {
        mainScene.style.display = "none";
        acceptScene.style.display = "flex";
    } else {
        alert("Revise the from details, something is incorrect or missing ...")
    }
}

function validateFrom() {
    const inputsVal = document.getElementsByTagName("input");
    var formIsValid = true;
    for (let index = 0; index < inputsVal.length && formIsValid; index++) {
        formIsValid = false;
        if(inputsVal[index].value != "" && inputsVal[index].checkValidity()) {
            formIsValid = true;
        }
        
    }
    return formIsValid;
}


const thanksButton = document.getElementById("thanksButton");

thanksButton.addEventListener("click", () => {
    location.reload();
})

const nameInput = document.getElementById("cardHolder");
const nameCardText = document.querySelector(".card-name-text");

const cardCcvText = document.querySelector(".card-ccv-text");
const ccvInput = document.getElementById("cardCCV");

const cardNumberText = document.querySelector(".card-number-text");
const numberInput =  document.getElementById("cardNumber");

const nameCardExp = document.querySelector(".card-exp-text");
const inputExpMM = document.getElementById("expDateMM");
const inputExpYY = document.getElementById("expDateYY");


nameInput.addEventListener("keyup", () => {
    if(nameInput.value == "")  {
        nameCardText.innerHTML = "Please type a name"
    } else {
        nameCardText.innerHTML = nameInput.value;
    }
})

ccvInput.addEventListener("keyup", () => {
    if(ccvInput.value == "")  {
        cardCcvText.innerHTML = "000"
    } else {
        if(ccvInput.value.length <= 3) {
            cardCcvText.innerHTML = ccvInput.value;
        }
        
    }
})

numberInput.addEventListener("keyup", () => {
    if(numberInput.value == "")  {
        cardNumberText.innerHTML = "0000 0000 0000 0000"
    } else {
        cardNumberText.innerHTML = numberInput.value.slice(0,4) + ' ' + numberInput.value.slice(4,8) + ' ' + numberInput.value.slice(8,12) + ' ' +numberInput.value.slice(12,16);   
    }
})

inputExpMM.addEventListener("keyup", () => {
    if(inputExpMM.value == "")  {
        nameCardExp.innerHTML = "00" + nameCardExp.innerHTML.slice(2,6);
    } else {
        if(inputExpMM.value.length < 2) {
            nameCardExp.innerHTML = "0" + inputExpMM.value + nameCardExp.innerHTML.slice(2,6);
        } else if (inputExpMM.value.length == 2){ 
            nameCardExp.innerHTML = inputExpMM.value + nameCardExp.innerHTML.slice(2,6);
        }
    }
})

inputExpYY.addEventListener("keyup", () => {
    if(inputExpYY.value == "")  {
        nameCardExp.innerHTML = nameCardExp.innerHTML.slice(0,3) + "00";
    } else {
        if(inputExpYY.value.length < 2) {
            nameCardExp.innerHTML = nameCardExp.innerHTML.slice(0,3) + "0" + inputExpYY.value;
        } else if (inputExpYY.value.length == 2){ 
            nameCardExp.innerHTML = nameCardExp.innerHTML.slice(0,3) + inputExpYY.value;
        }
    }
})