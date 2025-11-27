const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Your required details
const fullName = "SONGALIA, NINIELA";
const section = "BSIT SM 4102";
const quote = "ALL YOUR HARDWORK WILL PAY OFF";

app.get("/", (req, res) => {
  res.send(`
    <div style=" 
        text-align: center; 
        font-family: Arial, sans-serif; 
        margin-top: 100px; 
        background-color: #87CEEB; 
        padding: 50px; 
        border-radius: 15px;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    ">
      <h1>${fullName}</h1>
      <h2>${section}</h2>
      <p><em>"${quote}"</em></p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
