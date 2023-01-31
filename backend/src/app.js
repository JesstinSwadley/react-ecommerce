const express = require("express");

// App Config
const app = express();

// Variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is on Port: ${PORT}`);
});