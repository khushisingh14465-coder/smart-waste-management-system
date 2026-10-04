
#include "User.h"

#include <iostream>

using namespace std;


/* ==========================================
   DEFAULT CONSTRUCTOR
   ========================================== */

User::User()
{
    id = 0;
    name = "";
    email = "";
    phone = "";
    role = "";
    password = "";
}


/* ==========================================
   PARAMETERIZED CONSTRUCTOR
   ========================================== */

User::User(
    int id,
    string name,
    string email,
    string phone,
    string role,
    string password
)
{
    this->id = id;
    this->name = name;
    this->email = email;
    this->phone = phone;
    this->role = role;
    this->password = password;
}


/* ==========================================
   GETTERS
   ========================================== */

int User::getId() const
{
    return id;
}


string User::getName() const
{
    return name;
}


string User::getEmail() const
{
    return email;
}


string User::getPhone() const
{
    return phone;
}


string User::getRole() const
{
    return role;
}


string User::getPassword() const
{
    return password;
}


/* ==========================================
   DISPLAY USER
   ========================================== */

void User::display() const
{
    cout << "\n-----------------------------\n";

    cout << "User ID : " << id << endl;
    cout << "Name    : " << name << endl;
    cout << "Email   : " << email << endl;
    cout << "Phone   : " << phone << endl;
    cout << "Role    : " << role << endl;

    cout << "-----------------------------\n";
}


/* ==========================================
   CONVERT USER TO FILE FORMAT
   ========================================== */

string User::toFileString() const
{
    return to_string(id) + "|" +
           name + "|" +
           email + "|" +
           phone + "|" +
           role + "|" +
           password;
}

