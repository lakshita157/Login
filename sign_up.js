function SignUp(){
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var cpassword = document.getElementById("confpass").value;


    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    localStorage.setItem("cpassword",cpassword);


    // let uname=["Jai","Jas","Geet"];
    // let mail=["jaivardhan436.be22@chitkara.edu.in","jasmeet449.be22@chitakra.edu.in","jashan436.be22@chitkara.edu.in"];
    // let pass=["1234567890","helloWorld","worldHello"];
    // let cpass=["1234567890","helloWorld","worldHello"];


    if(password=="" || username=="" || cpassword=="" || email=="")
    {
        document.getElementById("error").innerHTML= "**Fill all feilds !";
        // alert("fill all fields!");
        /*+ window.location.replace("sign_up.html");*/
        return false;       
    }
    else if(uname.includes(username)){
        document.getElementById("error").innerHTML= "**Username Already exists !";
        // alert("Username already exists !");
        return false;
    }
    else if(password.length<6){
        // alert("Password should be more than 6 characters");
        document.getElementById("error").innerHTML= "**Password should be more than 6 characters";
        return false;
    }
    else if(password!=cpassword){
        // alert("Passwords don't match !");
        document.getElementById("error").innerHTML= "**Passwords don't match !";
        return false;
    }
    else{
        alert("Success !");
        uname.push(username);
        mail.push(email);
        pass.push(password);
        cpass.push(cpass);

        console.log(uname);
        console.log(mail);
        console.log(pass);
    }
}
