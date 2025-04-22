# 📚 E-learning Platform

An intuitive web-based E-learning Platform that bridges the gap between personalized learning and structured education. There are two primary users: Instructors and Students.
Built with the modern MERN stack (using PostgreSQL in place of MongoDB), this app allows instructors to design customized course paths and enables students to learn at their own pace — with their progress tracked module by module.

> 🏗️ This is a work-in-progress project originally conceptualized during **Smart India Hackathon 2024**.

---

## 🚀 Features

###  For Instructors:
- Create **custom learning paths** by organizing modules in a roadmap format.
- Upload a variety of resource types:
  - PDFs
  - DOCX files
  - Hyperlinks to external learning materials
- Modular design for scalability and flexible curriculum creation.

###  For Students:
- Enroll in personalized learning paths.
- Track progress through modules with visual indicators.
- Engage with materials uploaded by instructors seamlessly.

### 🛠 Upcoming Features (WIP):
-  **Community Page**:  
  A peer-learning space where users with similar interests can:
  - Participate in group chats
  - Ask and solve doubts collaboratively
  
-  **Marketplace**:  
  - Discover and get recommendations for similar or complementary courses.
  - Personalized suggestions based on interests and activity.

---

## 🧑‍💻 Tech Stack

### Frontend
- **Vite v6.2.0**
- **React v19.0.0**
- **Tailwind CSS v4.1.3**
- **React Router v7.5.0**
- **TypeScript Types + ESLint Plugins**

### Backend
- **Node.js (ES Modules)**
- **Express v4.21.2**
- **Supabase (PostgreSQL) - `@supabase/supabase-js v2.49.4`**
- **dotenv, cors, body-parser**
- **nodemon v3.1.9** (Development)

---

## 🔧 Installation (Local Development)

```bash
# Clone the repository
git clone https://github.com/Mann-19/E-learning-Platform.git
cd E-learning-Platform

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Start the development servers
# From 'client' folder
npm run dev

# From 'server' folder
npm run dev

