const getDate = document.getElementById("getDate");
const setDate = document.getElementById("ageChange");
setDate.style.display = "none";
function findAge(){
    const birthDate = new Date(getDate.value);
    if(getDate.value === ""){
        alert("Please Enter the Date!");
        return;
    }
    const today = new Date();
    let age =  Math.abs(today.getFullYear() - birthDate.getFullYear());
    if(age <= 0){
        alert("Invalid date ");
        alertinnerHTML="Invalid date";
        return;
    }
    setDate.style.display = "block";
    setDate.textContent = "You are "+ age +" years old" ;
}