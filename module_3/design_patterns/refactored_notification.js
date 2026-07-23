// STRATEGY PATTERN IMPLEMENTATION
// Refactored Notification Engine


// ================================
// Strategy Interface
// ================================

class NotificationStrategy {

    dispatch(recipient, message, priority) {

        throw new Error(
            "dispatch() method must be implemented"
        );

    }
}


// ================================
// Email Notification Strategy
// ================================

class EmailNotificationStrategy 
extends NotificationStrategy {


    dispatch(recipient, message, priority) {


        if (!recipient.includes("@")) {

            console.log("Invalid Email Address!");
            return;

        }


        console.log(
            `[EMAIL SERVER] Sending "${message}" to ${recipient} Priority: ${priority}`
        );

    }

}



// ================================
// SMS Notification Strategy
// ================================

class SMSNotificationStrategy 
extends NotificationStrategy {


    dispatch(recipient, message, priority) {


        if (recipient.length < 10) {

            console.log("Invalid Phone Number!");
            return;

        }


        console.log(
            `[TWILIO SMS] Sending SMS "${message}" to ${recipient} Priority: ${priority}`
        );

    }

}



// ================================
// Push Notification Strategy
// ================================

class PushNotificationStrategy 
extends NotificationStrategy {


    dispatch(recipient, message) {


        console.log(
            `[FIREBASE PUSH] Sending "${message}" to device ${recipient}`
        );

    }

}



// ================================
// New Notification Channel
// Added without modifying existing code
// ================================

class WhatsAppNotificationStrategy 
extends NotificationStrategy {


    dispatch(recipient, message) {


        console.log(
            `[WHATSAPP] Sending "${message}" to ${recipient}`
        );

    }

}



// ================================
// Context Class
// ================================

class NotificationContext {


    constructor() {

        this.strategy = null;

    }



    setStrategy(strategy) {

        this.strategy = strategy;

    }



    send(recipient, message, priority) {


        if (!this.strategy) {

            console.log(
                "No notification strategy selected"
            );

            return;

        }


        this.strategy.dispatch(
            recipient,
            message,
            priority
        );

    }

}



// ================================
// Testing The System
// ================================


const context = new NotificationContext();


// Email Test

context.setStrategy(
    new EmailNotificationStrategy()
);


context.send(
    "dev@company.com",
    "System Alert: Storage 90% full",
    "HIGH"
);



// SMS Test

context.setStrategy(
    new SMSNotificationStrategy()
);


context.send(
    "1234567890",
    "Your OTP is 4821",
    "CRITICAL"
);



// Push Test

context.setStrategy(
    new PushNotificationStrategy()
);


context.send(
    "device_token_123",
    "New update available",
    "NORMAL"
);



// WhatsApp Test (New Channel)

context.setStrategy(
    new WhatsAppNotificationStrategy()
);


context.send(
    "+237690000000",
    "Hello from WhatsApp",
    "NORMAL"
);