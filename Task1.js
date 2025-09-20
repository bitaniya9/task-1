class NotificationChannel{
    create(type){
        switch(type){
            case "email":
                return new Email;
                
            case "Sms":
                return new Sms;
                

            case "telegram":
                return new Telegram;
                
            default:
                throw new Error("Unknown notification type");

        }
    }
}



function EmailValidator(message,email){
    if(!email) throw new Error(`Email required`);

}

function SmsValidator(message,phoneNumber){
    if(!phoneNumber) throw new Error(`Phone number required`);

}

function TelgramValidator(message,telegramId){
    if(!telegramId) throw new Error(`Telegram ID required`);

}


class Email{
    sendEmail(message,email){
        console.log(`Seding Email to ${email}: ${message}`);

    }
}
class Sms{
    sendSms(message,phoneNumber){
        console.log(`Sending SMS to ${phoneNumber}:${message}`);

    }
}

class Telegram{
    sendTelegram(message,telegramId){
        console.log(`Sending Telegram to ${telegramId}:${message}`);

    }

}


let message="Hello";
const n1=new NotificationChannel();
const n2=n1.create("email");
EmailValidator(message,'nexus@gmail.com');
n2.sendEmail(message,'nexus@gmail.com');

message="Hi";
const n3=new NotificationChannel();
const n4=n3.create("Sms");
SmsValidator(message,"1234567890");
n4.sendSms(message,"1234567890");

message='Yo!';
const n5=new NotificationChannel();
const n6=n5.create("telegram");
TelgramValidator(message,'telegram_user_42');
n6.sendTelegram('Yo!','telegram_user_42');




