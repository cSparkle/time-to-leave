const notifier = require('node-notifier');
const path = require('path');

/**
 * Notify user it's time to leave.
 */
function notifyUser() {
    notifier.notify(
        {
            title: 'Time to leave',
            message: 'Hey there! I think it\'s time to leave.',
            icon: path.join(__dirname, 'assets/timer.png'), // Absolute path (doesn't work on balloons)
            sound: true, // Only Notification Center or Windows Toasters
            wait: true // Wait with callback, until user action is taken against notification
        },
      );
}

function notify(msg) {
    notifier.notify(
        {
            title: 'Time to leave',
            message: msg,
            icon: path.join(__dirname, 'assets/timer.png'), // Absolute path (doesn't work on balloons)
            sound: true, // Only Notification Center or Windows Toasters
            wait: false // Wait with callback, until user action is taken against notification
        },
      );
}

module.exports = {
    notifyUser,
    notify
};