
#ifndef WASTEREQUEST_H
#define WASTEREQUEST_H

#include <string>

using namespace std;

class WasteRequest
{
private:

    int requestId;

    string citizenName;

    string wasteType;

    string quantity;

    string address;

    string pickupDate;

    string pickupTime;

    string notes;

    string status;


public:

    WasteRequest();


    WasteRequest(
        int requestId,
        string citizenName,
        string wasteType,
        string quantity,
        string address,
        string pickupDate,
        string pickupTime,
        string notes,
        string status
    );


    int getRequestId() const;

    string getCitizenName() const;

    string getWasteType() const;

    string getQuantity() const;

    string getAddress() const;

    string getPickupDate() const;

    string getPickupTime() const;

    string getNotes() const;

    string getStatus() const;


    void setStatus(string newStatus);


    void display() const;


    string toFileString() const;
};

#endif

