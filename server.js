const app = require("./App");
const chalk = require('./server/chalk');
const PORT = process.env.PORT || 5000;

// LAUNCH ##############################################################################################################
app.listen(PORT, () => {
	console.log(chalk.info(`==================App listening on port ${PORT}!==================`));
});