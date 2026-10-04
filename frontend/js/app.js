
function getUsers() {

    return JSON.parse(
        localStorage.getItem("ecotrackUsers")
    ) || [];

}


function saveUsers(users) {

    localStorage.setItem(
        "ecotrackUsers",
        JSON.stringify(users)
    );

}


function getRequests() {

    return JSON.parse(
        localStorage.getItem("wasteRequests")
    ) || [];

}


function saveRequests(requests) {

    localStorage.setItem(
        "wasteRequests",
        JSON.stringify(requests)
    );

}


/* =========================================================
   GET LOGGED-IN USER
   ========================================================= */

function getLoggedInUser() {

    return JSON.parse(
        localStorage.getItem("loggedInUser")
    );

}


/* =========================================================
   REGISTER
   ========================================================= */

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "registerName"
                ).value.trim();


            const email =
                document.getElementById(
                    "registerEmail"
                ).value.trim();


            const phone =
                document.getElementById(
                    "registerPhone"
                ).value.trim();


            const role =
                document.getElementById(
                    "registerRole"
                ).value;


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            /* CHECK PASSWORD */

            if (
                password !==
                confirmPassword
            ) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            /* CHECK REQUIRED FIELDS */

            if (
                !name ||
                !email ||
                !phone ||
                !role ||
                !password
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }


            /* GET EXISTING USERS */

            const users =
                getUsers();


            /* CHECK DUPLICATE EMAIL */

            const existingUser =
                users.find(
                    user =>
                        user.email.toLowerCase() ===
                        email.toLowerCase()
                );


            if (existingUser) {

                alert(
                    "An account with this email already exists."
                );

                return;

            }


            /* CREATE USER */

            const newUser = {

                id: Date.now(),

                name: name,

                email: email,

                phone: phone,

                role: role,

                password: password

            };


            users.push(
                newUser
            );


            saveUsers(
                users
            );


            /* SAVE LAST REGISTERED USER */

            localStorage.setItem(
                "ecotrackUser",
                JSON.stringify(newUser)
            );


            alert(
                "Registration successful! Please login."
            );


            window.location.href =
                "login.html";

        }
    );

}


/* =========================================================
   LOGIN
   ========================================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            /* =================================================
               ADMIN LOGIN
               ================================================= */

            if (
                email.toLowerCase() ===
                "admin@ecotrack.com" &&
                password === "admin123"
            ) {

                const adminUser = {

                    id: 0,

                    name: "Administrator",

                    email:
                        "admin@ecotrack.com",

                    phone: "",

                    role: "Admin"

                };


                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify(adminUser)
                );


                window.location.href =
                    "admin.html";


                return;

            }


            /* =================================================
               NORMAL USER LOGIN
               ================================================= */

            const users =
                getUsers();


            const user =
                users.find(
                    account =>
                        account.email.toLowerCase() ===
                        email.toLowerCase() &&
                        account.password ===
                        password
                );


            if (!user) {

                alert(
                    "Invalid email or password."
                );

                return;

            }


            /* SAVE LOGIN */

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );


            /* =================================================
               ROLE REDIRECTION
               ================================================= */

            const role =
                user.role.toLowerCase();


            if (
                role === "citizen"
            ) {

                window.location.href =
                    "dashboard.html";

            }

            else if (
                role === "collector" ||
                role === "waste collector"
            ) {

                window.location.href =
                    "collector.html";

            }

            else if (
                role === "admin"
            ) {

                window.location.href =
                    "admin.html";

            }

            else {

                alert(
                    "Invalid user role."
                );

            }

        }
    );

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    localStorage.removeItem(
        "loggedInUser"
    );


    window.location.href =
        "login.html";

}


/* =========================================================
   DISPLAY USER NAME
   ========================================================= */

function displayUserName() {

    const user =
        getLoggedInUser();


    if (!user) {
        return;
    }


    const elements =
        document.querySelectorAll(
            ".user-name"
        );


    elements.forEach(
        function (element) {

            element.textContent =
                user.name;

        }
    );

}


displayUserName();


/* =========================================================
   CITIZEN WASTE REQUEST FORM
   ========================================================= */

const wasteRequestForm =
    document.getElementById(
        "wasteRequestForm"
    );


if (wasteRequestForm) {

    loadWasteRequests();


    wasteRequestForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const user =
                getLoggedInUser();


            if (!user) {

                alert(
                    "Please login first."
                );

                window.location.href =
                    "login.html";

                return;

            }


            const wasteType =
                document.getElementById(
                    "wasteType"
                ).value;


            const quantity =
                document.getElementById(
                    "quantity"
                ).value;


            const address =
                document.getElementById(
                    "address"
                ).value.trim();


            const pickupDate =
                document.getElementById(
                    "pickupDate"
                ).value;


            const pickupTime =
                document.getElementById(
                    "pickupTime"
                ).value;


            const notes =
                document.getElementById(
                    "notes"
                ).value.trim();


            /* VALIDATION */

            if (
                !wasteType ||
                !quantity ||
                !address ||
                !pickupDate ||
                !pickupTime
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }


            /* GET REQUESTS */

            const requests =
                getRequests();


            /* CREATE REQUEST */

            const newRequest = {

                id: Date.now(),

                citizenName:
                    user.name,

                citizenEmail:
                    user.email,

                wasteType:
                    wasteType,

                quantity:
                    quantity,

                address:
                    address,

                pickupDate:
                    pickupDate,

                pickupTime:
                    pickupTime,

                notes:
                    notes,

                status:
                    "Pending"

            };


            requests.push(
                newRequest
            );


            saveRequests(
                requests
            );


            alert(
                "Waste pickup request submitted successfully!"
            );


            wasteRequestForm.reset();


            loadWasteRequests();

        }
    );

}


/* =========================================================
   CITIZEN REQUEST TABLE
   ========================================================= */

function loadWasteRequests() {

    const tableBody =
        document.getElementById(
            "requestTableBody"
        );


    if (!tableBody) {
        return;
    }


    /*
       IMPORTANT:
       Show all requests on the dashboard.
       This makes your project demo easier.
    */

    const requests =
        getRequests();


    updateDashboardCounts(
        requests
    );


    if (
        requests.length ===
        0
    ) {

        tableBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    style="text-align:center;"
                >

                    No waste requests yet.

                </td>

            </tr>

        `;

        return;

    }


    tableBody.innerHTML = "";


    requests.forEach(
        function (request) {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>
                    ${String(request.id).slice(-5)}
                </td>

                <td>
                    ${request.wasteType}
                </td>

                <td>
                    ${request.quantity}
                </td>

                <td>
                    ${request.address}
                </td>

                <td>
                    ${request.pickupDate}
                </td>

                <td>

                    <span
                        class="status ${request.status.toLowerCase()}"
                    >

                        ${request.status}

                    </span>

                </td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   CITIZEN DASHBOARD COUNTS
   ========================================================= */

function updateDashboardCounts(
    requests
) {

    const total =
        document.getElementById(
            "totalRequests"
        );


    const pending =
        document.getElementById(
            "pendingRequests"
        );


    const assigned =
        document.getElementById(
            "assignedRequests"
        );


    const completed =
        document.getElementById(
            "completedRequests"
        );


    if (total) {

        total.textContent =
            requests.length;

    }


    if (pending) {

        pending.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Pending"
            ).length;

    }


    if (assigned) {

        assigned.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Assigned"
            ).length;

    }


    if (completed) {

        completed.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Completed"
            ).length;

    }

}


/* =========================================================
   ADMIN DASHBOARD
   ========================================================= */

if (
    window.location.pathname.includes(
        "admin.html"
    )
) {

    loadAdminRequests();

    loadAdminUsers();

}


/* =========================================================
   ADMIN REQUEST TABLE
   ========================================================= */

function loadAdminRequests() {

    const table =
        document.getElementById(
            "adminRequestTable"
        );


    if (!table) {
        return;
    }


    const requests =
        getRequests();


    updateAdminCounts(
        requests
    );


    if (
        requests.length ===
        0
    ) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    style="text-align:center;"
                >

                    No requests available.

                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML = "";


    requests.forEach(
        function (request, index) {

            let action = "";


            /* =============================================
               PENDING → ASSIGNED
               ADMIN CAN ONLY ASSIGN
               ============================================= */

            if (
                request.status ===
                "Pending"
            ) {

                action = `

                    <button
                        class="btn primary"
                        onclick="assignRequest(${index})"
                    >

                        Assign

                    </button>

                `;

            }


            /* =============================================
               ASSIGNED
               ADMIN CANNOT COMPLETE
               ============================================= */

            else if (
                request.status ===
                "Assigned"
            ) {

                action = `

                    <span
                        style="
                            color:#2563eb;
                            font-size:10px;
                        "
                    >

                        Assigned to Collector

                    </span>

                `;

            }


            /* =============================================
               COMPLETED
               ============================================= */

            else {

                action = `

                    <span
                        style="
                            color:#16a34a;
                            font-size:10px;
                        "
                    >

                        Completed

                    </span>

                `;

            }


            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>
                    ${String(request.id).slice(-5)}
                </td>

                <td>
                    ${request.wasteType}
                </td>

                <td>
                    ${request.quantity}
                </td>

                <td>
                    ${request.address}
                </td>

                <td>
                    ${request.pickupDate}
                </td>

                <td>

                    <span
                        class="status ${request.status.toLowerCase()}"
                    >

                        ${request.status}

                    </span>

                </td>

                <td>
                    ${action}
                </td>

            `;


            table.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   ADMIN ASSIGN REQUEST
   PENDING → ASSIGNED
   ========================================================= */

function assignRequest(
    index
) {

    const requests =
        getRequests();


    if (
        !requests[index]
    ) {

        alert(
            "Request not found."
        );

        return;

    }


    /*
       ONLY Pending requests
       can be assigned.
    */

    if (
        requests[index].status !==
        "Pending"
    ) {

        alert(
            "Only pending requests can be assigned."
        );

        return;

    }


    requests[index].status =
        "Assigned";


    saveRequests(
        requests
    );


    loadAdminRequests();


    alert(
        "Request assigned successfully!"
    );

}


/* =========================================================
   ADMIN STATISTICS
   ========================================================= */

function updateAdminCounts(
    requests
) {

    const total =
        document.getElementById(
            "adminTotal"
        );


    const pending =
        document.getElementById(
            "adminPending"
        );


    const assigned =
        document.getElementById(
            "adminAssigned"
        );


    const completed =
        document.getElementById(
            "adminCompleted"
        );


    if (total) {

        total.textContent =
            requests.length;

    }


    if (pending) {

        pending.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Pending"
            ).length;

    }


    if (assigned) {

        assigned.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Assigned"
            ).length;

    }


    if (completed) {

        completed.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Completed"
            ).length;

    }

}


/* =========================================================
   ADMIN USER TABLE
   ========================================================= */

function loadAdminUsers() {

    const table =
        document.getElementById(
            "adminUserTable"
        );


    if (!table) {
        return;
    }


    const users =
        getUsers();


    if (
        users.length ===
        0
    ) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="4"
                    style="text-align:center;"
                >

                    No registered users.

                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML = "";


    users.forEach(
        function (user) {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>
                    ${user.name}
                </td>

                <td>
                    ${user.email}
                </td>

                <td>
                    ${user.phone}
                </td>

                <td>
                    ${user.role}
                </td>

            `;


            table.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   COLLECTOR DASHBOARD
   ========================================================= */

if (
    window.location.pathname.includes(
        "collector.html"
    )
) {

    loadCollectorRequests();

}


/* =========================================================
   COLLECTOR REQUEST TABLE
   ========================================================= */

function loadCollectorRequests() {

    const table =
        document.getElementById(
            "collectorRequestTable"
        );


    if (!table) {
        return;
    }


    const requests =
        getRequests();


    updateCollectorCounts(
        requests
    );


    /*
       Collector sees Assigned
       and Completed requests.
    */

    const collectorRequests =
        requests.filter(
            request =>
                request.status ===
                    "Assigned" ||
                request.status ===
                    "Completed"
        );


    if (
        collectorRequests.length ===
        0
    ) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    style="text-align:center;"
                >

                    No assigned requests.

                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML = "";


    requests.forEach(
        function (request, index) {

            if (
                request.status !==
                    "Assigned" &&
                request.status !==
                    "Completed"
            ) {

                return;

            }


            let action = "";


            /* =============================================
               ASSIGNED → COMPLETE
               COLLECTOR ONLY
               ============================================= */

            if (
                request.status ===
                "Assigned"
            ) {

                action = `

                    <button
                        class="btn primary"
                        onclick="collectorCompleteRequest(${index})"
                    >

                        Complete

                    </button>

                `;

            }


            else {

                action = `

                    <span
                        style="
                            color:#16a34a;
                            font-size:10px;
                        "
                    >

                        Collected

                    </span>

                `;

            }


            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>
                    ${String(request.id).slice(-5)}
                </td>

                <td>
                    ${request.wasteType}
                </td>

                <td>
                    ${request.quantity}
                </td>

                <td>
                    ${request.address}
                </td>

                <td>
                    ${request.pickupDate}
                </td>

                <td>
                    ${request.pickupTime}
                </td>

                <td>

                    <span
                        class="status ${request.status.toLowerCase()}"
                    >

                        ${request.status}

                    </span>

                </td>

                <td>
                    ${action}
                </td>

            `;


            table.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   COLLECTOR COMPLETE REQUEST
   ASSIGNED → COMPLETED
   ========================================================= */

function collectorCompleteRequest(
    index
) {

    const requests =
        getRequests();


    if (
        !requests[index]
    ) {

        alert(
            "Request not found."
        );

        return;

    }


    /*
       ONLY Assigned requests
       can be completed.
    */

    if (
        requests[index].status !==
        "Assigned"
    ) {

        alert(
            "Only assigned requests can be completed."
        );

        return;

    }


    requests[index].status =
        "Completed";


    saveRequests(
        requests
    );


    loadCollectorRequests();


    alert(
        "Waste collection completed successfully!"
    );

}


/* =========================================================
   COLLECTOR STATISTICS
   ========================================================= */

function updateCollectorCounts(
    requests
) {

    const total =
        document.getElementById(
            "collectorTotal"
        );


    const pending =
        document.getElementById(
            "collectorPending"
        );


    const assigned =
        document.getElementById(
            "collectorAssigned"
        );


    const completed =
        document.getElementById(
            "collectorCompleted"
        );


    if (total) {

        total.textContent =
            requests.length;

    }


    if (pending) {

        pending.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Pending"
            ).length;

    }


    if (assigned) {

        assigned.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Assigned"
            ).length;

    }


    if (completed) {

        completed.textContent =
            requests.filter(
                request =>
                    request.status ===
                    "Completed"
            ).length;

    }

}


/* =========================================================
   DASHBOARD PROTECTION
   ========================================================= */

function protectDashboard() {

    const page =
        window.location.pathname;


    const dashboardPage =
        page.includes(
            "dashboard.html"
        ) ||
        page.includes(
            "admin.html"
        ) ||
        page.includes(
            "collector.html"
        );


    if (!dashboardPage) {
        return;
    }


    const user =
        getLoggedInUser();


    if (!user) {

        window.location.href =
            "login.html";

    }

}


protectDashboard();


/* =========================================================
   MINIMUM PICKUP DATE
   ========================================================= */

const pickupDateInput =
    document.getElementById(
        "pickupDate"
    );


if (pickupDateInput) {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            today.getDate()
        ).padStart(
            2,
            "0"
        );


    pickupDateInput.min =
        `${year}-${month}-${day}`;

}


/* =========================================================
   HOME PAGE NAVIGATION
   ========================================================= */

function goToRegister() {

    window.location.href =
        "register.html";

}


function goToLogin() {

    window.location.href =
        "login.html";

}
