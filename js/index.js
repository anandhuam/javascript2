document.getElementById('asd').addEventListener('submit',(e)=>{
e.preventDefault()
console.log("hai");
let fname=document.getElementById('fname').value;
let lname=document.getElementById('lname').value;
let dob=document.getElementById('dob').value;
let email=document.getElementById('email').value;
let pwd=document.getElementById('pwd').value;
let cpwd=document.getElementById('cpwd').value;

if(pwd!=cpwd)
{
    alert("Password not match!")
}
else{
    if(!(fname&&lname&&dob&&email&&pwd&&cpwd))
    {
        alert("Fields are empty")
    }
    else{
        alert('Successfully logedin')
    }

    }

   
})


