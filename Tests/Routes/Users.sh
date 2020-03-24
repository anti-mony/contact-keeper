## Register a User
echo "Create a User Endpoint"
curl -H "Content-Type: application/json" -d '{"name":"John Doe","email":"Jo@doe.com","password":"12345678"}' -X POST http://localhost:5000/api/users/
echo ""