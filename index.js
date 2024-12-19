let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let myChars = []

function generateRandomPass(){
    let numsCheck = document.getElementsByName("choice-num")
    let numCheckInd = null
    let specCheck = document.getElementsByName("choice-spec")
    let specCheckInd = null
    
    for(let i = 0;i<numsCheck.length;i++){
        if(numsCheck[i].checked){
                numCheckInd = numsCheck[i].value
            }
    }
    for(let i = 0;i<specCheck.length;i++){
        if(specCheck[i].checked){
                specCheckInd = specCheck[i].value
        }
    }
    console.log(characters.length)
    if (numCheckInd === "No") {
    characters = characters.filter(char => 
        !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(char)
    );
}
    console.log(characters.length)
    
    if(specCheckInd==="No"){
        characters = characters.filter(char => !["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"].includes(char));
    }
    
    for(let i = 0;i<characters.length;i++){
        console.log(characters[i])
    }
    
    let randomPass1=""
    let randomPass2=""
    let firstPassPara = document.getElementById("first-password-para")
    let secondPassPara = document.getElementById("second-password-para")
    let limit = document.getElementById("limit").value
    for(let i = 0;i<limit;i++){
        randomPass1+=characters[Math.floor(Math.random()*characters.length)]
        randomPass2+=characters[Math.floor(Math.random()*characters.length)]
    }
    firstPassPara.textContent = randomPass1
    secondPassPara.textContent = randomPass2
  
    
}


document.getElementById("first-password-para").addEventListener("click", function () {
            // Text to copy
            const text = this.textContent;

            // Copy to clipboard using Clipboard API
            navigator.clipboard.writeText(text).then(() => {
                alert("Text copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
        
document.getElementById("second-password-para").addEventListener("click", function () {
            // Text to copy
            const text = this.textContent;

            // Copy to clipboard using Clipboard API
            navigator.clipboard.writeText(text).then(() => {
                alert("Text copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });