
#ifndef WASTEMANAGER_H
#define WASTEMANAGER_H

#include <vector>
#include <string>

#include "User.h"
#include "WasteRequest.h"

using namespace std;

class WasteManager
{
private:

    vector<User> users;

    vector<WasteRequest> requests;

    int nextUserId;

    int nextRequestId;


public:

    WasteManager();


    /* USER FUNCTIONS */

    void registerUser(
        string name,
        string email,
        string phone,
        string role,
        string password
    );


    bool loginUser(
        string email,
        string password
    );


    void displayUsers() const;


    /* WASTE REQUEST FUNCTIONS */

    void createRequest(
        string citizenName,
        string wasteType,
        string quantity,
        string address,
        string pickupDate,
        string pickupTime,
        string notes
    );


    void displayRequests() const;


    void updateRequestStatus(
        int requestId,
        string newStatus
    );


    /* FILE FUNCTIONS */

    void saveData() const;

    void loadData();

};

#endif

