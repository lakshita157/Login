function forpass(){
    var name = document.getElementById("name").value;
    var eml = document.getElementById("email").value;


    let uname=["Jai","Jas","Geet"];
    let mail=["jaivardhan436.be22@chitkara.edu.in","jasmeet449.be22@chitakra.edu.in","jashan436.be22@chitkara.edu.in"];
    let pass=["1234567890","helloWorld","worldHello"];


    var nm = localStorage.getItem("username");
    var pw = localStorage.getItem("password");
    var em = localStorage.getItem("email");

    uname.push(nm);
    mail.push(em);
    pass.push(pw);

    console.log("array of username: " + uname);
    console.log("array of emails: " + mail);
    console.log("array of password: " + pass);
    console.log("input of user name: " + name);
    console.log("input of user email: " + eml);
    console.log("username in local storage: " + nm);
    console.log("password in local storage: " + pw);
    console.log("email in local storage: " + em);



    for (let i=0; i<uname.length; i++){
        if (name == uname[i] && eml == mail[i]){
            alert("Your password is " + pass[i]);
        }
        else{
            document.getElementById("error").innerHTML="Enter valid username/password!"
        }
    }

}