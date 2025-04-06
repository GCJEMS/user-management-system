# User Management System

## Introduction
A full-stack application for managing user accounts with features like email sign-up, verification, authentication, role-based authorization, and CRUD operations.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/GCJEMS/user-management-system.git
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the backend server**:
    ```bash
    npm start
    ```

4. **Start the Angular app**:
    ```bash
    ng serve
    ```

## Usage

- **Register a new account** at `/accounts/register`.
- **Verify your email** using the link sent to your inbox.
- **Log in** at `/accounts/login`.
- **Access profile** and **update** it at `/accounts/profile`.
- **Admin Dashboard** at `/admin/dashboard`.

## Testing

### **Test Cases for Vulnerabilities**

#### **1. Unauthorized Access**

- **Test Case**: Ensure that only authorized users can access restricted routes.
  - **Input**: Access restricted route without authentication (e.g., admin dashboard, profile).
  - **Expected Result**: Unauthorized users should receive a 401 or 403 status code and an error message like "Access Denied".
  - **Pass Criteria**: Unauthorized users are denied access, and appropriate error message is shown.

- **Test Case**: Ensure that users can only access their own profile and cannot view others' profiles.
  - **Input**: User tries to access another user's profile.
  - **Expected Result**: The system should block access and return a 403 status code.
  - **Pass Criteria**: Profile access is restricted based on user authentication and authorization.

#### **2. SQL Injection**

- **Test Case**: Ensure that the system is protected from SQL injection attacks.
  - **Input**: Malicious SQL injection string in any user input field (e.g., login, registration, or profile update).
  - **Example Input**: `' OR '1'='1'; --`
  - **Expected Result**: The system should sanitize inputs and not execute any SQL commands.
  - **Pass Criteria**: The SQL query should not execute any harmful commands, and no unauthorized access should be granted.

- **Test Case**: Ensure that database queries properly escape inputs to prevent SQL injection.
  - **Input**: User inputs with potential SQL injection code.
  - **Expected Result**: Input should be sanitized, and no database manipulation should occur.
  - **Pass Criteria**: No changes should occur in the database from injection attempts.

#### **3. Cross-Site Scripting (XSS)**

- **Test Case**: Ensure that user input is sanitized to prevent XSS attacks.
  - **Input**: Malicious JavaScript code in any user input field (e.g., profile update, comments, etc.).
  - **Example Input**: `<script>alert('XSS');</script>`
  - **Expected Result**: The JavaScript code should be escaped, and the script should not be executed.
  - **Pass Criteria**: No script should be executed, and the system should display the input as plain text.

- **Test Case**: Ensure that HTML content is properly escaped to avoid XSS.
  - **Input**: User submits HTML content in a form (e.g., profile updates).
  - **Expected Result**: HTML tags should not be rendered as active content; they should be displayed as plain text.
  - **Pass Criteria**: All HTML should be displayed as escaped text without rendering or executing any tags.

---

### **Test Results for Vulnerabilities**

#### **Unauthorized Access**

- **Test Case**: Accessing the admin dashboard without authorization.
  - **Result**: Passed. Unauthorized users were correctly blocked, and an "Access Denied" message was displayed.
  - **Error Message**: "Unauthorized access. Please log in as an admin."

- **Test Case**: Accessing another user's profile.
  - **Result**: Passed. Users could only view their own profile, and attempts to access others' profiles resulted in a 403 status code.
  - **Error Message**: "Forbidden. You are not authorized to view this profile."

#### **SQL Injection**

- **Test Case**: Attempted SQL injection in the login form.
  - **Result**: Passed. The system properly sanitized the input, and the injection attempt was blocked.
  - **Error Message**: "Invalid email or password" displayed for SQL injection attempt, indicating that no malicious actions were taken.

- **Test Case**: SQL injection attempt during profile update.
  - **Result**: Passed. The system did not execute any SQL commands and blocked any malicious input.
  - **Error Message**: Profile update failed, and no database changes were made.

#### **Cross-Site Scripting (XSS)**

- **Test Case**: Attempted XSS via profile update.
  - **Result**: Passed. The system properly sanitized the input, and the malicious script was displayed as plain text without executing.
  - **Error Message**: No error message, but the XSS script was not executed.

- **Test Case**: HTML tags input in a comment field.
  - **Result**: Passed. HTML tags were displayed as escaped text and were not executed.
  - **Error Message**: N/A – HTML was safely rendered as plain text.

---

### **Running Tests Locally**

- Clone the repository and checkout to the **`tester-security-testing`** branch.
- Run security tests with the following command:
    ```bash
    npm run test:security
    ```

## Contributing
Follow the Git and GitHub workflow outlined in the project guidelines.

1. **Fork** the repository.
2. **Create a new branch** (`git checkout -b feature/your-feature-name`).
3. **Commit** your changes (`git commit -m "Implement feature"`).
4. **Push** to your branch (`git push origin feature/your-feature-name`).
5. **Create a pull request** to merge your feature into the main branch.

## License
MIT License
