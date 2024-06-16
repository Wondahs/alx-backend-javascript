// displayMessage that prints in STDOUT the string argument.
function displayMessage(message) {
  process.stdout.write(message + '\n')
}

module.exports = displayMessage;
