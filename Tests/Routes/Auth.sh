## Login a User
echo "Login a User"
curl -H "Content-Type: application/json" -d '{"email":"Jo@doe.com","password":"12345678"}' -X POST http://localhost:5000/api/auth/
echo ""

## Get Logged In User 
curl -H "x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3OThmN2U3MjZlNTYxMzQ4YzIyMDBlIn0sImlhdCI6MTU4NTExMDI4NywiZXhwIjoxNTg1MTEzODg3fQ.eAEafHih0M1dga4qXkE_X-BMyFr_JVliFYpoeaScjQY" -X GET http://localhost:5000/api/auth/
