## Get Contacts
curl -H "x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3YWU0ZDNlOWFiMDU1YzU0NmEwMzM2In0sImlhdCI6MTU4NTExMjI3NSwiZXhwIjoxNTg1MTQ4Mjc1fQ.c5gSOaQ_A7gOkyR3zlMvN66naKt6VuT9JFTgxzNBu6I" -X GET http://localhost:5000/api/contacts/

## Add Contacts
curl -H "x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3YWU0ZDNlOWFiMDU1YzU0NmEwMzM2In0sImlhdCI6MTU4NTExMjI3NSwiZXhwIjoxNTg1MTQ4Mjc1fQ.c5gSOaQ_A7gOkyR3zlMvN66naKt6VuT9JFTgxzNBu6I" -H "Content-Type: application/json" -d '{"name":"Mnm","email":"a@bcd.com", "phone":"989999999", "type":"professional"}' -X POST http://localhost:5000/api/contacts/

## Update a Contact
curl -H "x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3YWU0ZDNlOWFiMDU1YzU0NmEwMzM2In0sImlhdCI6MTU4NTExMjI3NSwiZXhwIjoxNTg1MTQ4Mjc1fQ.c5gSOaQ_A7gOkyR3zlMvN66naKt6VuT9JFTgxzNBu6I" -H "Content-Type: application/json" -d '{"name":"ChangedName"}' -X PUT http://localhost:5000/api/contacts/5e7ae51ee9ab055c546a0337/

## Delete a Contact
curl -H "x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3YWU0ZDNlOWFiMDU1YzU0NmEwMzM2In0sImlhdCI6MTU4NTExMjI3NSwiZXhwIjoxNTg1MTQ4Mjc1fQ.c5gSOaQ_A7gOkyR3zlMvN66naKt6VuT9JFTgxzNBu6I" -H "Content-Type: application/json" -d '{"name":"ChangedName"}' -X DELETE http://localhost:5000/api/contacts/5e7ae51ee9ab055c546a0337/