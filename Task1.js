class Validator{
    validate(_,media){
        if(!media) throw new Error(`media required`);
    }
}

class EmailValidator extends Validator{
    validate(_,emailAddress){
        if(!emailAddress) throw new Error(`Email required`);
    }

}


class SmsValidator extends Validator{
    validate(_,phoneNumber){
        if(!phoneNumber) throw new Error(`Phone number required`);
    }

}

class TelegramValidator extends Validator{
    validate(_,telegramId){
        if(!telegramId) throw new Error(`Telegram ID required`);
    }

}

class NotificationChannel{
    constructor(validator,type){
        this.validator=validator;
        this.type=type;
    }

    send(message,media){
        this.validator.validate(message,media);
        console.log(`Sending ${this.type} to ${media}: ${message}`);
    }
}


let message="Hello";
const n1=new NotificationChannel(new EmailValidator(),"Email");
n1.send(message,'nexus@gmail.com');

message="Hi";
const n3=new NotificationChannel(new SmsValidator(),"SMS");
n3.send(message,"1234567890");

message='Yo!';
const n5=new NotificationChannel(new TelegramValidator(),"Telegram");
n5.send('Yo!','telegram_user_42');


