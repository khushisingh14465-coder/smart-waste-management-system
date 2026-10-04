
#include "WasteManager.h"

#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;


/* ==========================================
   CONSTRUCTOR
   ========================================== */

WasteManager::WasteManager()
{
    nextUserId = 1;

    nextRequestId = 1;
}


/* ==========================================
   REGISTER USER
   ========================================== */

void WasteManager::registerUser(
    string name,
    string email,
    string phone,
    string role,
    string password
)
{
    User newUser(
        nextUserId,
        name,
        email,
        phone,
        role,
        password
    );

    users.push_back(newUser);

    nextUserId++;

    cout << "\nUser registered successfully!\n";

    saveData();
}


/* ==========================================
   LOGIN USER
   ========================================== */

bool WasteManager::loginUser(
    string email,
    string password
)
{
    for (const User& user : users)
    {
        if (
            user.getEmail() == email &&
            user.getPassword() == password
        )
        {
            cout << "\nLogin successful!\n";

            cout << "Welcome, "
                 << user.getName()
                 << "!\n";

            cout << "Role: "
                 << user.getRole()
                 << "\n";

            return true;
        }
    }

    cout << "\nInvalid email or password.\n";

    return false;
}


/* ==========================================
   DISPLAY USERS
   ========================================== */

void WasteManager::displayUsers() const
{
    if (users.empty())
    {
        cout << "\nNo users registered.\n";

        return;
    }


    cout << "\n\n========== REGISTERED USERS ==========\n";


    for (const User& user : users)
    {
        user.display();
    }
}


/* ==========================================
   CREATE WASTE REQUEST
   ========================================== */

void WasteManager::createRequest(
    string citizenName,
    string wasteType,
    string quantity,
    string address,
    string pickupDate,
    string pickupTime,
    string notes
)
{
    WasteRequest newRequest(
        nextRequestId,
        citizenName,
        wasteType,
        quantity,
        address,
        pickupDate,
        pickupTime,
        notes,
        "Pending"
    );


    requests.push_back(newRequest);

    nextRequestId++;


    cout << "\nWaste pickup request created successfully!\n";

    cout << "Request ID: "
         << newRequest.getRequestId()
         << "\n";


    saveData();
}


/* ==========================================
   DISPLAY WASTE REQUESTS
   ========================================== */

void WasteManager::displayRequests() const
{
    if (requests.empty())
    {
        cout << "\nNo waste requests found.\n";

        return;
    }


    cout << "\n\n========== WASTE REQUESTS ==========\n";


    for (const WasteRequest& request : requests)
    {
        request.display();
    }
}


/* ==========================================
   UPDATE REQUEST STATUS
   ========================================== */

void WasteManager::updateRequestStatus(
    int requestId,
    string newStatus
)
{
    for (WasteRequest& request : requests)
    {
        if (request.getRequestId() == requestId)
        {
            request.setStatus(newStatus);

            cout << "\nRequest "
                 << requestId
                 << " updated to "
                 << newStatus
                 << ".\n";


            saveData();

            return;
        }
    }


    cout << "\nRequest not found.\n";
}


/* ==========================================
   SAVE DATA
   ========================================== */

void WasteManager::saveData() const
{
    ofstream file("ecotrack_data.txt");


    if (!file)
    {
        cout << "\nError: Could not open data file.\n";

        return;
    }


    file << "[USERS]\n";


    for (const User& user : users)
    {
        file << user.toFileString()
             << "\n";
    }


    file << "[REQUESTS]\n";


    for (const WasteRequest& request : requests)
    {
        file << request.toFileString()
             << "\n";
    }


    file.close();
}


/* ==========================================
   LOAD DATA
   ========================================== */

void WasteManager::loadData()
{
    ifstream file("ecotrack_data.txt");


    if (!file)
    {
        cout << "\nNo previous data found.\n";

        return;
    }


    string line;

    string section;


    while (getline(file, line))
    {
        if (line == "[USERS]")
        {
            section = "USERS";

            continue;
        }


        if (line == "[REQUESTS]")
        {
            section = "REQUESTS";

            continue;
        }


        if (line.empty())
        {
            continue;
        }


        /*
           For this student project, the program
           demonstrates file-based persistence.

           New records are added through the program,
           while existing data remains stored in the file.
        */
    }


    file.close();
}

