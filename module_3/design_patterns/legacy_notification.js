// LEGACY MONOLITHIC NOTIFICATION ENGINE
// Problems:
// - One class handles validation, formatting, and sending
// - Uses if/else logic for every notification type
// - Difficult to extend with new channels


class NotificationService {

    sendNotification(type, userRecipient, messagePayload, priorityLevel) {

        // Validation + Format + Dispatch mixed together

        if (type === "EMAIL") {

            if (!userRecipient.includes("@")) {
                console.log("Invalid Email Address!");
                return false;
            }

            console.log(
                `[EMAIL SERVER] Sending "${messagePayload}" to ${userRecipient} with Priority: ${priorityLevel}`
            );

            // Simulating SMTP connection

        } 
        
        else if (type === "SMS") {

            if (userRecipient.length < 10) {
                console.log("Invalid Phone Number!");
                return false;
            }

            console.log(
                `[TWILIO SMS GATEWAY] Dispatching SMS to ${userRecipient}: ${messagePayload}`
            );

        } 
        
        else if (type === "PUSH") {

            console.log(
                `[FIREBASE APNS] Pushing alert to device token ${userRecipient}`
            );

        } 
        
        else {

            console.log("Error: Unknown Notification Channel.");

        }
    }
}


// Client Usage

const service = new NotificationService();


service.sendNotification(
    "EMAIL",
    "dev@company.com",
    "System Alert: Storage 90% full",
    "HIGH"
);


service.sendNotification(
    "SMS",
    "1234567890",
    "Your OTP is 4821",
    "CRITICAL"
);