const logForm = document.getElementById('logform')

logForm.onsubmit = (e) => {
    e.preventDefault();
    const userEmail =document.getElementById('userEmail').value;
    const userPassword =document.getElementById('userPassword').value;
    console.log(
        {
            userEmail,
            userPassword,
        }
    )
}