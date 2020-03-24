## Login a User
echo "Login a User"
curl -H "Content-Type: application/json" -d '{"email":"Jo@doe.com","password":"12345678"}' -X POST http://localhost:5000/api/auth/
echo ""