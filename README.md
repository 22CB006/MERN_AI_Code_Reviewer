
#  🤖  AI-Powered Code Reviewer

An advanced **AI-Powered Code Reviewer** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application leverages the **Deepseek R1 model** with **Groq API** to provide ultra-fast, intelligent code reviews, enhancing code quality and development efficiency.

---

## ✨ Features

- **Automated Code Analysis**: Utilizes AI to review code, identify potential issues, and suggest improvements.
- **Real-Time Feedback**: Offers instantaneous feedback to developers, streamlining the development process.
- **Seamless Integration**: Easily integrates with existing development workflows and version control systems.
- **Scalability**: Built on the MERN stack, ensuring scalability and flexibility for future enhancements.
- **Multi-Language Support**: Can analyze and review multiple programming languages based on project requirements.
- **Syntax & Style Checking**: Ensures adherence to coding standards and best practices.
- **Performance Optimization Suggestions**: Identifies potential optimizations to improve code efficiency.
- **Code Complexity Analysis**: Evaluates the complexity of the code and suggests ways to improve readability.

---

## 🛠 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/22CB006/MERN_Stack_Gen-AI_Code_Reviewer.git
cd MERN_Stack_Gen-AI_Code_Reviewer
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Set up environment variables

Create a **.env** file and add:

```
GROQ_API_KEY=your_api_key_here
PORT=3000
```

### 4️⃣ Start the server

```sh
npm start
```

Server runs at `http://localhost:3000`

---

## 🎯 API Endpoints

### 🌐 Root Route

**GET /**  
Response: `"Hello World"`

### 🤖 AI Code Review

**GET /ai/get-review?prompt=your_code_here**

- **Query Parameters:** `prompt` (required)
- **Response:** AI-generated code review based on the given code snippet

**Example Request:**
```sh
curl "http://localhost:3000/ai/get-review?prompt=const a = 10;"
```

**Example Response:**
```json
{
  "suggestions": [
    "Consider using 'let' or 'const' based on whether the variable is reassigned.",
    "Ensure the variable name is descriptive to improve readability."
  ]
}
```

---

## 📂 Project Structure

```
/src
 ├── controllers
 │   ├── ai.controller.js
 ├── routes
 │   ├── ai.routes.js
 ├── services
 │   ├── ai.services.js
 ├── app.js
 ├── server.js
 ├── .env
 ├── package.json
 ├── README.md
```

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature-branch`)
3. **Commit** changes (`git commit -m "Add new feature"`)
4. **Push** to the branch (`git push origin feature-branch`)
5. **Open a Pull Request**

---

## ⭐ Acknowledgments

- Built with **MERN Stack** & **Deepseek R1 AI Model**
- AI-powered inference using **Groq API**
- Inspired by modern **AI-assisted development tools**

---

Happy Coding! 🎉 
