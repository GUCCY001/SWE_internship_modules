# User Authentication & Profile System SDLC Blueprint

## The Waterfall Approach

The Waterfall methodology follows a sequential development process where each phase must be completed before moving to the next.

### Analysis Phase

- Gather requirements for user registration, login, authentication, and profile management.
- Identify security requirements such as password encryption and access control.
- Document all functional and non-functional requirements.

### Design Phase

- Design the database structure for users and profiles.
- Create system architecture diagrams.
- Design login pages, profile interfaces, and authentication workflows.

### Implementation Phase

- Develop the authentication module.
- Implement user registration and login functionality.
- Integrate database connections.
- Develop profile management features.

### Testing Phase

- Perform unit testing on authentication components.
- Test login validation and security features.
- Fix discovered bugs before deployment.

### Waterfall Risk

The main risk of using Waterfall for this authentication system is that changes are difficult to introduce after a phase has been completed. If users request new login features or security improvements late in development, significant redesign may be required.

---

# The Agile Approach

Agile development delivers the authentication system through small iterative sprint increments.

## Sprint 1: Database Setup and Login Form

Goal:
- Create the user database.
- Develop user registration and login forms.
- Implement basic authentication.

## Sprint 2: Password Reset Feature

Goal:
- Implement password recovery functionality.
- Add email verification workflow.
- Improve account security.

## Sprint 3: User Profile Management

Goal:
- Allow users to update profile information.
- Add profile photo upload capability.
- Improve user experience.

---

## User Stories

1. As a registered user, I want to log into my account securely using authentication controls so that I can safely access my personal dashboard and protect my data.

2. As a user, I want to reset my forgotten password so that I can regain access to my account.
