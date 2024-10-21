export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email === "pratz@gmail.com" && password === "Pratik") {
        req.session.user_flag = true; // Store user flag in session
        console.log("Logged in successfully");
        res.status(200).json({ success: true, message: "Logged in successfully" });
        // res.redirect("/homepage");
      } else {
        req.session.user_flag = false;
        console.log("Invalid credentials");
        res.status(201).json({ success: false, message: "Invalid credentials" });
        // res.redirect("http/homepage");
      }
    } catch (error) {
      console.log("Error in login:", error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  export const homepage = async (req, res) => {
    if (req.session.user_flag) {
      res.send("user logged in");
    } else {
      res.send("user Not logged in");
    }
  };
  
  export const logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Logout failed" });
      }
      res.clearCookie("connect.sid"); // Clear session cookie
      res.status(200).json({ success: true, message: "Logged out successfully" });
    });
  };
  