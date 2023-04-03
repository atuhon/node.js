import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

async  function sendEmail(subject,text) {
  const message = {
    from: "nodetesting1@gmail.com",
    to:"nodetesting1@gmail.com",
    subject: subject,//省略できる
    text: text,
  };

  const smtpConfig = {  //メール送信のためのプロトコル
        host: 'smtp.gmail.com',//Gmail
    port: 465,
    secure: true, // SSL
    auth: {
      user:"nodetesting1@gmail.com",
      //googleアカウントのアプリパスワードを設定
      // see https://support.google.com/accounts/answer/185833?hl=ja
      pass: "gvftnsahiteeaxcq",
    },
  };

  const transporter = nodemailer.createTransport(smtpConfig);

  transporter.sendMail(message, function (err, response) {
    console.log(err || response);
  });
};
export{sendEmail}