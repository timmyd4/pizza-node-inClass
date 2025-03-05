document.getElementById('pizza-form').onsubmit = () => {
    
    clearErrors();
    let isValid = true;
    //Validate First Name
    let fname = document.getElementById('fname').value.trim();
    let lname = document.getElementById('lname').value.trim();
    let email = document.getElementById('email').value.trim();
    if(fname === "" || lname === "" || email === "")
    {
        document.getElementById('errfname').style.display = "block";
        document.getElementById('errlname').style.display = "block";
        document.getElementById('erremail').style.display = "block";
        isValid = false;
    }

    let methodButtons = getElementsByName("method");
    let count = 0;
    for(let i = 0; i < methodButtons.length; i++)
    {
        if(methodButtons[i].checked)
        {
            count++;
        }
    }
    if(count === 0)
    {
        document.getElementById("errmethod").style.display = "block";
        isValid = false;
    }

    let size = document.getElementById("size").value
    if(size === "none")
    {
        document.getElementById("errsize").style.display = "block";
        isValid = false;
    }


    return isValid;
};

function clearErrors()
{
    let errors = document.getElementsByClassName("err");
    for(let i = 0; i < errors.length; i++)
    {
        errors[i].style.display = "none";
    }
}


