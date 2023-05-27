const nodemailer = require('nodemailer');
const fs = require('fs');

fs.readFile('application.md', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
      
    // Go to your Gmail account settings.
    // Navigate to the "Security" tab.
    // Look for the "Less secure app access" section.
    // Enable the "Allow less secure apps" option.
  let trans = nodemailer.createTransport({
    // host: 'gmail',
    // port: 465,
    // secure: true,
    service: "gmail",
    auth: {
      user: 'abc123@gmail.com',
      pass: 'abc123'
    }
  });

  let mailOptions = {
    from: 'abc123@gmail.com',
    to: 'xyz@gmail.com',
    subject: 'Here you can get your stage',
    text: `Hope you are well`,
    attachments: [
        {
          filename: 'application.md',
          content: data,
        },
      ],
  
  };

  trans.sendMail(mailOptions, (err)=> {
    if (err){
        console.log("error",err)
    }
    else{
    console.log("Email sent successfully");
    }
  });
});

