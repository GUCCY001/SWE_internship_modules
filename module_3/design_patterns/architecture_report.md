# Notification Engine Architecture Report


## 1. SOLID Violation Audit


## Single Responsibility Principle (SRP) Violation

The original NotificationService class violates SRP because it performs multiple responsibilities:

- Validates email addresses
- Validates phone numbers
- Formats messages
- Sends Email notifications
- Sends SMS notifications
- Sends Push notifications


A class should have only one reason to change.
The original design requires changes whenever a new notification channel is added.



## Open/Closed Principle (OCP) Violation

The original system violates OCP because new notification channels require modifying existing code.

Example:

```javascript
else if(type === "WHATSAPP"){
   // new logic
}