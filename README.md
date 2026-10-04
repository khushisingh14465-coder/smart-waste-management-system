# 🌱 EcoTrack – Smart Waste Management System :
___________________________________________________

> A smart and organized solution for managing waste collection requests through a simple web-based system.

-------------------------------------------------------------------------------------------------------------------------------

## 📌 Project Overview :
_____________________________


**EcoTrack** is a **Smart Waste Management System** developed to make waste collection more **efficient, organized, and user-friendly**.

The system provides separate functionality for **Users, Waste Collectors, and Administrators**. Users can register and submit waste collection requests, collectors can manage collection requests, and administrators can monitor and manage the overall system.

The project combines a **web-based frontend** with a **C++ backend** to demonstrate the practical implementation of a smart waste management solution.

-----------------------------------------------------------------------------------------------------------------------------------

## 🎯 Objectives 
___________________

The main objectives of EcoTrack are:

* ♻️ Provide an easy way to request waste collection.
* 📋 Digitally manage waste collection requests.
* 👥 Improve coordination between users and waste collectors.
* 🚛 Provide a dedicated interface for waste collectors.
* 🛠️ Provide administrative monitoring and management.
* ⏱️ Reduce manual work in waste collection management.
* 🌍 Support cleaner and more organized waste management.

-------------------------------------------------------------------------------------------------------------------------------------

## ✨ Key Features

### 👤 User Module :
_____________________

* 📝 User registration
* 🔐 User login
* 🗑️ Submit waste collection requests
* 📊 View waste-related information
* 🔄 Track request status

### 🚛 Waste Collector Module:
__________________________________

* 🔐 Collector login
* 📋 View waste collection requests
* 📌 Manage assigned requests
* 🔄 Update collection status

### 🛠️ Administrator Module:
_______________________________

* 🔐 Admin login
* 👥 Manage users and collectors
* 📋 Monitor waste collection requests
* 📊 Manage overall waste management activities

-------------------------------------------------------------------------------------------------------------------------------------------

## 🏗️ Project Architecture
___________________________

The basic working flow of the system is:


┌──────────────┐
│     User     │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│ Waste Collection    │
│      Request        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Backend        │
│        C++           │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Waste Collector     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Request Status     │
└──────────────────────┘

        ▲
        │
┌───────┴────────┐
│ Administrator  │
│   Monitoring   │
└────────────────┘


--------------------------------------------------------------------------------------------------------------------------------------

## 💻 Technologies Used
____________________________

| Category               | Technologies                |
| ---------------------- | --------------------------- |
| 🎨 Frontend            | HTML5, CSS3, JavaScript     |
| ⚙️ Backend             | C++                         |
| 🧩 Programming Concept | Object-Oriented Programming |
| 🛠️ Development Tool    | Visual Studio Code          |
| 🔧 Version Control     | Git                         |
| ☁️ Repository          | GitHub                      |

------------------------------------------------------------------------------------------------------------------------------------

## 📁 Project Structure
__________________________

smart-waste-management-system/
│
├── 📁 .vscode/
│   └── launch.json
│
├── 📁 backend/
│   ├── WasteManager.cpp
│   ├── WasteManager.h
│   ├── WasteRequest.cpp
│   ├── WasteRequest.h
│   ├── main.cpp
│   ├── user.cpp
│   ├── user.h
│   ├── ecotrack_data.txt
│   └── ecotrack.exe
│
├── 📁 frontend/
│   ├── 📁 css/
│   │   └── style.css
│   │
│   ├── 📁 js/
│   │   └── app.js
│   │
│   ├── admin.html
│   ├── collector.html
│   ├── dashboard.html
│   ├── index.html
│   ├── login.html
│   └── register.html
│
|
└── README.md


---------------------------------------------------------------------------------------------------------------------------------

## 🔄 System Workflow
________________________


1️⃣ User Registration
        ↓
2️⃣ User Login
        ↓
3️⃣ Submit Waste Collection Request
        ↓
4️⃣ Request Processing
        ↓
5️⃣ Collector Views Request
        ↓
6️⃣ Collector Updates Status
        ↓
7️⃣ Administrator Monitors System


------------------------------------------------------------------------------------------------------------------------------------

## 👥 User Roles
_________________

| Role             | Responsibilities                                              |
| ---------------- | -----------------------------------------------------------   |
| 👤 **User**      | Register, login, submit and track waste collection requests   |
| 🚛 **Collector** | View, manage and update collection requests                   |
| 🛠️ **Admin**     | Monitor users, collectors and waste collection activities     |


------------------------------------------------------------------------------------------------------------------------------------


## 🚀 How to Run the Project
 -------------------------


 # 🌐 Frontend
__________________

1. Clone or download the project.
2. Open the project folder in **Visual Studio Code**.
3. Navigate to the `frontend` folder.
4. Open `index.html`.
5. Run the page using a web browser or the **Live Server** extension.

### ⚙️ Backend
_________________

1. Open the `backend` folder.
2. Make sure a C++ compiler is installed.
3. Compile the C++ source files.
4. Run the generated executable.
5. The backend uses `ecotrack_data.txt` for storing relevant project data.

---------------------------------------------------------------------------------------------------------------------------------------

## 📊 Benefits
________________

EcoTrack provides several benefits:

* ♻️ More organized waste collection
* ⏱️ Reduced manual management
* 📋 Digital request management
* 👥 Better coordination between users and collectors
* 📊 Improved monitoring
* 🌍 Support for cleaner communities

------------------------------------------------------------------------------------------------------------------------------------------


## 🔮 Future Enhancements
 __________________________

The system can be further enhanced with:

* 📍 GPS-based waste collection tracking
* 🗺️ Google Maps integration
* 🔔 Real-time notifications
* 📱 Dedicated mobile application
* 📝 Online complaint management
* 🤖 AI-based waste image classification
* 🗄️ Database integration such as MongoDB
* 📈 Waste-generation analytics and reports

-------------------------------------------------------------------------------------------------------------------------------------------

## 🎓 Project Information
___________________________


| Information              | Details                                  |
| ------------------------ | ---------------------------------------- |
| **Project Name**         | EcoTrack – Smart Waste Management System |
| **Domain**               | Smart Waste Management                   |
| **Project Type**         | Academic / Capstone Project              |
| **Development Approach** | Web-based application with C++ backend   |


--------------------------------------------------------------------------------------------------------------------------------------------

## 📄 License
______________

This project has been developed for **educational and academic purposes**.

--------------------------------------------------------------------------------------------------------------------------------------------

## 🌱 EcoTrack
 ______________

> **Smart Management • Organized Collection • Cleaner Environment**

**Developed as an academic project to demonstrate the application of software development concepts in smart waste management.**
