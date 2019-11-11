const app = require("./App");
const PORT = process.env.PORT || 5000;

// LAUNCH ##############################################################################################################
app.listen(PORT, () => {
	console.log(
		`==================App listening on port ${PORT}!==================`
	);
});
