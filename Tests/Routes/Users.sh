## Register a User
echo "Create a User Endpoint"
curl -X POST -d '{"name":"John","surname":"Doe"}' http://localhost:5000/api/users/
echo ""