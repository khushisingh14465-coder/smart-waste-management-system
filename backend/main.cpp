
#include <iostream>
#include <string>

#include "WasteManager.h"

using namespace std;


/* ==========================================
   DISPLAY MENU
   ========================================== */

void showMenu()
{
    cout << "\n";
    cout << "========================================\n";
    cout << "       ECOTRACK SMART WASTE SYSTEM\n";
    cout << "========================================\n";

    cout << "1. Register User\n";
    cout << "2. Login User\n";
    cout << "3. Display Users\n";
    cout << "4. Create Waste Request\n";
    cout << "5. Display Waste Requests\n";
    cout << "6. Update Request Status\n";
    cout << "7. Exit\n";

    cout << "========================================\n";
    cout << "Enter your choice: ";
}


/* ==========================================
   MAIN FUNCTION
   ========================================== */

int main()
{
    WasteManager manager;

    int choice;


    cout << "\n";
    cout << "========================================\n";
    cout << " Welcome to EcoTrack Smart Waste System\n";
    cout << "========================================\n";


    do
    {
        showMenu();

        cin >> choice;

        cin.ignore();


        switch (choice)
        {

            /* ==============================
               REGISTER USER
               ============================== */

            case 1:
            {
                string name;
                string email;
                string phone;
                string role;
                string password;


                cout << "\nEnter name: ";
                getline(cin, name);


                cout << "Enter email: ";
                getline(cin, email);


                cout << "Enter phone: ";
                getline(cin, phone);


                cout << "Enter role (Citizen/Collector/Admin): ";
                getline(cin, role);


                cout << "Enter password: ";
                getline(cin, password);


                manager.registerUser(
                    name,
                    email,
                    phone,
                    role,
                    password
                );

                break;
            }


            /* ==============================
               LOGIN
               ============================== */

            case 2:
            {
                string email;
                string password;


                cout << "\nEnter email: ";
                getline(cin, email);


                cout << "Enter password: ";
                getline(cin, password);


                manager.loginUser(
                    email,
                    password
                );

                break;
            }


            /* ==============================
               DISPLAY USERS
               ============================== */

            case 3:
            {
                manager.displayUsers();

                break;
            }


            /* ==============================
               CREATE REQUEST
               ============================== */

            case 4:
            {
                string citizenName;
                string wasteType;
                string quantity;
                string address;
                string pickupDate;
                string pickupTime;
                string notes;


                cout << "\nEnter citizen name: ";
                getline(cin, citizenName);


                cout << "Enter waste type: ";
                getline(cin, wasteType);


                cout << "Enter quantity: ";
                getline(cin, quantity);


                cout << "Enter pickup address: ";
                getline(cin, address);


                cout << "Enter pickup date: ";
                getline(cin, pickupDate);


                cout << "Enter pickup time: ";
                getline(cin, pickupTime);


                cout << "Enter notes: ";
                getline(cin, notes);


                manager.createRequest(
                    citizenName,
                    wasteType,
                    quantity,
                    address,
                    pickupDate,
                    pickupTime,
                    notes
                );


                break;
            }


            /* ==============================
               DISPLAY REQUESTS
               ============================== */

            case 5:
            {
                manager.displayRequests();

                break;
            }


            /* ==============================
               UPDATE STATUS
               ============================== */

            case 6:
            {
                int requestId;

                string status;


                cout << "\nEnter request ID: ";

                cin >> requestId;

                cin.ignore();


                cout << "Enter new status\n";

                cout << "Examples: Pending, Assigned, Completed\n";

                cout << "Status: ";

                getline(cin, status);


                manager.updateRequestStatus(
                    requestId,
                    status
                );


                break;
            }


            /* ==============================
               EXIT
               ============================== */

            case 7:
            {
                cout << "\n";
                cout << "Thank you for using EcoTrack!\n";

                cout << "Goodbye.\n";

                break;
            }


            /* ==============================
               INVALID CHOICE
               ============================== */

            default:
            {
                cout << "\nInvalid choice.";

                cout << " Please try again.\n";

                break;
            }
        }

    }
    while (choice != 7);


    return 0;
}

