const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

const form = document.getElementById("form");



form.addEventListener("submit", function(e){
    e.preventDefault();//this will prevent from redirecting you to (submitted web)
    const fName = document.getElementById("fName");
    const lName = document.getElementById("lName");
    const email = document.getElementById("email");
    const where = document.getElementById("where");
    const text = document.getElementById("text");
    const values = {
        fName:fName.value,
        lName:lName.value,
        email:email.value,
        where:where.value,
        text:text.value,
    }

    const xhr = new XMLHttpRequest();
    xhr.open("Get","mock.json",true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            console.log('Form submitted successfully')
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("form").innerHTML = "";
        }else if (xhr.readyState === 4){
            alert("Error Submitted form")
        }
    };

    xhr.send(JSON.stringify(values));
    alert(`Success: ${values.fName}`);
    
})
