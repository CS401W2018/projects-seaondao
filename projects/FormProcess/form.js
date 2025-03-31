const form = document.getElementById("form");



function declairVariable(){
    const email = document.getElementById("email");
    const pass = document.getElementById("password");

 
    //AGE add .cheked to get ture/false
    const underTeen = document.getElementById("underTeen");
    const teen = document.getElementById("teen");
    const over20 = document.getElementById("over20");
     
    // const ages = [underTeen,teen,over20];
    // let age = 0;

    // for(var i =0; i<ages.length;i++){
    //     if(ages[i].checked){
    //         age = ages[i].value
    //         break
    //     }
    // }
//after all of that.. it was this simple..
   const age = document.querySelector("input[name='age']:checked");
    const review = document.getElementById("review");
    const num = document.getElementById("num");

    const values = {
        email:email.value,
        pass:pass.value,
        num:num.value,
        age:age.value,
        review:review.value,
    }

    return values;
}



form.addEventListener("submit", function(e){
    e.preventDefault();//this will prevent from redirecting you to (submitted web)

    const values = declairVariable();

    for (const Key in values){
        console.log(`${Key} : ${values[Key]} `);
    }

    if(values.num < 0 || values.num >10){
        alert("Invalid Number type 0-10");
        return;
    }


    const xhr = new XMLHttpRequest();
    xhr.open("Get","mock.json",true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            alert('Form submitted successfully');
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("form").innerHTML = "";
        }else if (xhr.readyState === 4){
            alert("Error Submitted form")
        }
    };

    xhr.send(JSON.stringify(values));
    alert(`Success: ${values.email}`);
    
})
