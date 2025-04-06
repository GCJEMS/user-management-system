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

## Testing

### **Functional Testing** (tester-functional-testing Branch)

- **Functional Testing**:  
  Ensure all key functionalities such as registration, login, profile management, and password reset work as expected.  
  **[Link to Functional Test Cases]** (replace with actual link)

- **Run Tests Locally**:
    - Clone the repository and checkout to the `tester-functional-testing` branch.
    - Run the functional tests with the following command:
      ```bash
      npm test
      ```

### **Security Testing** (tester-security-testing Branch)

- **Security Testing**:  
  Test for vulnerabilities such as SQL injection, XSS, and other potential security flaws in the application.  
  **[Link to Security Test Cases]** (replace with actual link)

- **Run Security Tests Locally**:
    - Clone the repository and checkout to the `tester-security-testing` branch.
    - Run the security tests with the following command:
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
