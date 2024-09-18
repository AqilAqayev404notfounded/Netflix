document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios.get('https://localhost:7049/api/Users', ).then((data)=>{
        data.data.forEach(e => {
            if(e.email===email&&e.password===password){
            window.location.href = "index.html";
        }
        });
    })
    
});

    // console.log(email, password);
    
    // try {
    //   const response = await axios.post("https://localhost:7049/api/Users/Login?email=email&password", {
      
    //   });
  
    //   if (response && response.data) {
    //     console.log("Response received:", response.data); 
    //     if (response.data.success) {
    //       console.log("Login successful:", response.data);
    //       alert("Login successful");
    //       window.location.href = "home.html";
    //     } else {
    //       alert("Login failed. Please check your email and password.");
    //     }
    //   } else {
    //     alert("Login failed. No response from server.");
    //   }
    // } catch (error) {
    //   console.error("Login failed:", error);
    //   if (error.response) {
    //     alert(`Error: ${error.response.data.message || "Login failed. Please try again."}`);
    //   } else {
    //     alert("Login failed. Please check your email and password.");
    //   }
    // }
  //});
  