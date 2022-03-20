const usernameField = document.querySelector('#usernameField');
const feedbackArea = document.querySelector(".invalid-feedback");
const emailField = document.querySelector('#emailField');
const emailFeedbackArea = document.querySelector(".emailFeedbackArea");
const usernameSuccessOutput = document.querySelector('.usernameSuccessOutput');
const emailSuccessOutput = document.querySelector('.emailSuccessOutput');
const showPasswordToggle = document.querySelector('.showPasswordToggle');


emailField.addEventListener('keyup',(e)=>{

    const emailVal = e.target.value;
    emailSuccessOutput.style.display='block';
    emailSuccessOutput.textContent = `Checking ${emailVal}`;
    

    emailField.classList.remove('is-invalid');
    emailFeedbackArea.style.display = 'none';

    //api call using fetch
    if(emailVal.length > 0){
        fetch('/authentication/validate-email',{
            body: JSON.stringify({email: emailVal}),
            method: "POST",
        }).then(res=>res.json()).then(data=>{
            console.log('data', data);
            emailSuccessOutput.style.display='none';
            if(data.email_error){
                emailField.classList.add('is-invalid');
                emailFeedbackArea.style.display = 'block';
                emailFeedbackArea.innerHTML = `<p>${data.email_error}</p>`;
            }
        }); //post request
    }

})


usernameField.addEventListener('keyup',(e)=>{
    //pickup wat the user is typing
    const usernameVal = e.target.value;

    usernameSuccessOutput.style.display='block';
    usernameSuccessOutput.textContent = `Checking ${usernameVal}`;

    usernameField.classList.remove('is-invalid');
    feedbackArea.style.display = 'none';

    //api call using fetch
    if(usernameVal.length > 0){
        fetch('/authentication/validate-username',{
            body: JSON.stringify({username: usernameVal}),
            method: "POST",
        }).then(res=>res.json()).then(data=>{
            console.log('data', data);
            usernameSuccessOutput.style.display='none';
            if(data.username_error){
                usernameField.classList.add('is-invalid');
                feedbackArea.style.display = 'block';
                feedbackArea.innerHTML = `<p>${data.username_error}</p>`;
            }
        }); //post request
    }
});