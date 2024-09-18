document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    console.log(email, password);
    
    try {
      const response = await axios.post("https://localhost:7049/api/Users/Login?email=email&password", {
      
      });
  
      if (response && response.data) {
        console.log("Response received:", response.data); 
        if (response.data.success) {
          console.log("Login successful:", response.data);
          alert("Login successful");
          window.location.href = "home.html";
        } else {
          alert("Login failed. Please check your email and password.");
        }
      } else {
        alert("Login failed. No response from server.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message || "Login failed. Please try again."}`);
      } else {
        alert("Login failed. Please check your email and password.");
      }
    }
  });
  