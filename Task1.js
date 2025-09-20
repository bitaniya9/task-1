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



function EmailValidator(...args){
    for(let arg of args){
        if(!arg) throw new Error(`Email required`);
    } 
}

function SmsValidator(...args){
    for(let arg of args){
        if(!arg) throw new Error(`Phone number required`);
        
    }
    
}

function TelegramValidator(...args){
    for(let arg of args){
        if(!arg) throw new Error("Telegram ID required");
        
    }
    
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

const n1=new NotificationChannel();
const n2=n1.create("email");
n2.sendEmail('Hello','nexus@gmail.com');


const n3=new NotificationChannel();
const n4=n3.create("Sms");
n4.SmsValidator("Hi!","1234567890");
n4.sendSms("Hi!","1234567890");

const n5=new NotificationChannel();
const n6=n5.create("telegram");
// n6.NotificationValidator()
n6.sendTelegram('Yo!','telegram_user_42');


// const 


