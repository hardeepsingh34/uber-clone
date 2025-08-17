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

# User Login Endpoint

## POST `/users/login`

Authenticates a user and returns a JWT token.

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "string (valid email, required)",
  "password": "string (required)"
}
```

### Example

```json
{
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

### Responses

- **200 OK**
  - User authenticated successfully.
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
  - Invalid credentials or missing required fields.
  - Returns: `{ "error": [ ...validationErrors ] }`

#### Example Error Response

```json
{
  "error": [
    {
      "msg": "Invalid Email or Password",
      "param": "email",
      "location": "body"
    }
  ]
}
```

- **500 Internal Server Error**
  - Unexpected server error.

### Notes

- Both `email` and `password` fields are required.
- The endpoint returns a JWT token and user data on successful authentication.

# User Profile Endpoint

## GET `/users/profile`

Retrieves the authenticated user's profile information.

### Authentication

Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

### Responses

- **200 OK**
  - Returns: `{ ...userData }`

#### Example Response

```json
{
  "_id": "665f1c2e8e4b2a0012a3b456",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
  // ...other user fields...
}
```

- **401 Unauthorized**
  - Missing or invalid token.
  - Returns: `{ "message": "Access denied, no token provided" }` or `{ "message": "Invalid token" }`

- **500 Internal Server Error**
  - Unexpected server error.

### Notes

- This endpoint requires authentication.
- Returns the profile of the currently authenticated user.

# User Logout Endpoint

## POST `/users/logout`

Logs out the authenticated user by blacklisting their JWT token.

### Authentication

Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

### Responses

- **200 OK**
  - User logged out successfully.
  - Returns: `{ "message": "Logged out successfully" }`

#### Example Response

```json
{
  "message": "Logged out successfully"
}
```

- **401 Unauthorized**
  - Missing or invalid token.
  - Returns: `{ "message": "Access denied, no token provided" }` or `{ "message": "Invalid token" }`

- **500 Internal Server Error**
  - Unexpected server error.

### Notes

- This endpoint requires authentication.
- The user's JWT token is invalidated after logout.

# Captain Registration Endpoint

## POST `/captains/registor`

Registers a new captain (driver) in the system.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)",
  "vehicle": {
    "color": "string (min 3 chars, required)",
    "plate": "string (min 3 chars, required)",
    "capacity": "integer (min 1, required)",
    "vehicleType": "string (car | bike | auto, required)"
  }
}
```

### Example

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

- **200 OK**
  - Captain registered successfully.
  - Returns: `{ "success": true }`

#### Example Response

```json
{
  "success": true
}
```

- **400 Bad Request**
  - Validation failed, missing required fields, or captain already exists.
  - Returns: `{ "error": [ ...validationErrors ] }` or `{ "message": "Captain already exists" }`

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

- All vehicle fields are required.
- The endpoint validates email, password, and vehicle details.
- Only registration is currently documented for captains.

# Captain Login Endpoint

## POST `/captains/login`

Authenticates a captain and returns a JWT token in a cookie.

### Request Body

```json
{
  "email": "string",      // required, valid email
  "password": "string"    // required, min 6 chars
}
```

### Example

```json
{
  "email": "alice.smith@example.com",
  "password": "securePass123"
}
```

### Responses

- **200 OK**

```json
{
  "success": true
}
```

- **400 Bad Request**

```json
{
  "error": [
    {
      "msg": "Invalid Email", // or other validation message
      "param": "email",       // or "password"
      "location": "body"
    }
  ]
}
```

- **401 Unauthorized**

```json
{
  "message": "Invalid email or password"
}
```

- **500 Internal Server Error**

```json
{
  "message": "Unexpected server error"
}
```

### Notes

- Both `email` and `password` are required.
- JWT token is set in an HTTP-only cookie on success.

# Captain Profile Endpoint

## GET `/captains/profile`

Retrieves the authenticated captain's profile information.

### Authentication

Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

### Responses

- **200 OK**

```json
{
  "_id": "665f1c2e8e4b2a0012a3b789",
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ1234",
    "capacity": 4,
    "vehicleType": "car"
  }
  // ...other captain fields...
}
```

- **401 Unauthorized**

```json
{
  "message": "Access denied, no token provided"
}
// or
{
  "message": "Invalid token"
}
```

- **500 Internal Server Error**

```json
{
  "message": "Unexpected server error"
}
```

### Notes

- This endpoint requires authentication.
- Returns the profile of the currently authenticated captain.

# Captain Logout Endpoint

## POST `/captains/logout`

Logs out the authenticated captain by blacklisting their JWT token.

### Authentication

Requires a valid JWT token in the `Authorization` header as `Bearer <token>` or in the `token` cookie.

### Responses

- **200 OK**

```json
{
  "message": "Logged out successfully"
}
```

- **401 Unauthorized**

```json
{
  "message": "Access denied, no token provided"
}
// or
{
  "message": "Invalid token"
}
```

- **500 Internal Server Error**

```json
{
  "message": "Unexpected server error"
}
```

### Notes

- This endpoint requires authentication.
- The captain's JWT token is invalidated after logout.
