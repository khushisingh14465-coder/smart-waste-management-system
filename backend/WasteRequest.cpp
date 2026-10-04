
#include "WasteRequest.h"

#include <iostream>

using namespace std;


/* ==========================================
   DEFAULT CONSTRUCTOR
   ========================================== */

WasteRequest::WasteRequest()
{
    requestId = 0;

    citizenName = "";

    wasteType = "";

    quantity = "";

    address = "";

    pickupDate = "";

    pickupTime = "";

    notes = "";

    status = "Pending";
}


/* ==========================================
   PARAMETERIZED CONSTRUCTOR
   ========================================== */

WasteRequest::WasteRequest(
    int requestId,
    string citizenName,
    string wasteType,
    string quantity,
    string address,
    string pickupDate,
    string pickupTime,
    string notes,
    string status
)
{
    this->requestId = requestId;

    this->citizenName = citizenName;

    this->wasteType = wasteType;

    this->quantity = quantity;

    this->address = address;

    this->pickupDate = pickupDate;

    this->pickupTime = pickupTime;

    this->notes = notes;

    this->status = status;
}


/* ==========================================
   GETTERS
   ========================================== */

int WasteRequest::getRequestId() const
{
    return requestId;
}


string WasteRequest::getCitizenName() const
{
    return citizenName;
}


string WasteRequest::getWasteType() const
{
    return wasteType;
}


string WasteRequest::getQuantity() const
{
    return quantity;
}


string WasteRequest::getAddress() const
{
    return address;
}


string WasteRequest::getPickupDate() const
{
    return pickupDate;
}


string WasteRequest::getPickupTime() const
{
    return pickupTime;
}


string WasteRequest::getNotes() const
{
    return notes;
}


string WasteRequest::getStatus() const
{
    return status;
}


/* ==========================================
   SET STATUS
   ========================================== */

void WasteRequest::setStatus(string newStatus)
{
    status = newStatus;
}


/* ==========================================
   DISPLAY REQUEST
   ========================================== */

void WasteRequest::display() const
{
    cout << "\n====================================\n";

    cout << "Request ID   : " << requestId << endl;

    cout << "Citizen      : " << citizenName << endl;

    cout << "Waste Type   : " << wasteType << endl;

    cout << "Quantity     : " << quantity << endl;

    cout << "Address      : " << address << endl;

    cout << "Pickup Date  : " << pickupDate << endl;

    cout << "Pickup Time  : " << pickupTime << endl;

    cout << "Notes        : " << notes << endl;

    cout << "Status       : " << status << endl;

    cout << "====================================\n";
}


/* ==========================================
   CONVERT REQUEST TO FILE FORMAT
   ========================================== */

string WasteRequest::toFileString() const
{
    return to_string(requestId) + "|" +
           citizenName + "|" +
           wasteType + "|" +
           quantity + "|" +
           address + "|" +
           pickupDate + "|" +
           pickupTime + "|" +
           notes + "|" +
           status;
}

