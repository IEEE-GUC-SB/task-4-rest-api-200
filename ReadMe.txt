GET /api/users/getuser/
Body  {"email": "mohamed3@gmail.com"}
200 OK
{
    "_id": "63a5341bd7df675e2b89f928",
    "email": "mohamed3@gmail.com",
    "password": "123",
    "__v": 0
}

POST /api/users/createuser/
Body  {"email":"mohamed4@gmail.com","password":"123"}
200 OK
{
    "email": "mohamed4@gmail.com",
    "password": "123",
    "_id": "63aecbc485c30e1e33b6811e",
    "__v": 0
}

GET /api/users/getallusers
200 OK
[
    {
        "_id": "63a53415d7df675e2b89f924",
        "email": "mohamed1@gmail.com",
        "password": "123",
        "__v": 0
    },
    {
        "_id": "63a53418d7df675e2b89f926",
        "email": "mohamed2@gmail.com",
        "password": "123",
        "__v": 0
    },
    {
        "_id": "63a5341bd7df675e2b89f928",
        "email": "mohamed3@gmail.com",
        "password": "123",
        "__v": 0
    },
    {
        "_id": "63a534b935e333959d376682",
        "email": "mohamed3@gmail.com",
        "password": "123",
        "__v": 0
    },
    {
        "_id": "63aecbc485c30e1e33b6811e",
        "email": "mohamed4@gmail.com",
        "password": "123",
        "__v": 0
    }
]

DELETE /api/users/deleteuser
Body {"email": "mohamed4@gmail.com"}
200 OK
"User Removed"