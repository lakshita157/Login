function myfun(){

    let a = document.getElementById("name").value;
    let b = document.getElementById("password").value;

    var nm = localStorage.getItem("username");
    var pw = localStorage.getItem("password");

    console.log(nm);
    console.log(pw);

    uname.push(nm);
    pass.push(pw);

    console.log(uname);
    console.log(pass)
    
    // localStorage.setItem("User",a);
    // localStorage.setItem("Pwd",b);

    
    // let al;
    // let uname=["Jai","Jas","Geet"];
    // let pass=["1234567890","helloWorld","worldHello"];


    for(let i=0;i<uname.length;i++)
    {
        if(a==uname[i] && b==pass[i]){
        alert("Success !");
        
        break;}
        else
        {document.getElementById("error").innerText="Enter Correct Password/UserName"+document.getElementById("fro").addEventListener("click", function(event){
            event.preventDefault()
          });}   
             
        
    }
    
}
