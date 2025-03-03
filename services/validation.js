export function validateForm(data)
{
    const errors = [];

    //validate first name
    if(!data.fname || data.fname.trim() === "")
    {
        errors.push("First name is required");
    }
    if(!data.lname || data.lname.trim() === "")
    {
        errors.push("Last name is required");
    }
    if(!data.email || data.email.trim() === "" || data.email.indexOf("@") === -1 || data.email.indexOf(".") === -1)
    {
        errors.push("email is required");
    }

    //Method Validation
    if(!data.method)
    {
        errors.push("Select pickup or delivery")
    }
    else
    {
        const validOptions = ["pickup", "delivery"];
        if(!validOptions.includes(data.method))
        {
            errors.push("Go away, evildoer");
        }
    }

    //Size Validation
    if(data.size === "none")
    {
        errors.push("Select a size")
    }
    else
    {
        const validOptions = ["small", "med", "large"];
        if(!validOptions.includes(data.size))
        {
            errors.push("Go away, evildoer");
        }
    }


    return {
        isValid: errors.length === 0,
        errors
    }
}
