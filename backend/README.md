# User Registration Endpoint

## POST `/users/registor`

Registers a new user in the system.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (required)"
}
```

### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

### Responses

- **201 Created**
  - User registered successfully.
  - Returns: `{ "token": "jwt_token", "user": { ...userData } }`
#### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "665f1c2e8e4b2a0012a3b456",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user fields...
  }
}
```

- **400 Bad Request**
  - Validation failed or missing required fields.
  - Returns: `{ "error": [ ...validationErrors ] }`

#### Example Error Response

```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

- **500 Internal Server Error**
  - Unexpected server error.

### Notes

- The `email`, `fullname.firstname`, and `password` fields are required.
- `fullname.lastname` is optional.
- The endpoint returns a JWT token and user data on successful registration.
