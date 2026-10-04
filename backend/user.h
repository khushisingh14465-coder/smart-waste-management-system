
#ifndef USER_H
#define USER_H

#include <string>

using namespace std;

class User
{
private:
    int id;
    string name;
    string email;
    string phone;
    string role;
    string password;

public:

    User();

    User(
        int id,
        string name,
        string email,
        string phone,
        string role,
        string password
    );

    int getId() const;

    string getName() const;

    string getEmail() const;

    string getPhone() const;

    string getRole() const;

    string getPassword() const;

    void display() const;

    string toFileString() const;
};

#endif

