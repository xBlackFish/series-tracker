const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "kubawaks@gmail.com",
    subject: `Welcome ${name}!`,
    text: `Thank you for join ${name}!`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "kubawaks@gmail.com",
    subject: `Bye ${name}!`,
    text: `Thank you for using our service ${name}!`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
