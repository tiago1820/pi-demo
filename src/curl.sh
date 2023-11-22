# Estos comandos son para hacer peticiones via terminal, sin la 
# necesidad de utilizar Postman, Thunder o algo parecido.
# Si alguien utiliza alguna herramienta nombrada arriba, no se
# preocupe con este archivo.

# POST a la ruta users
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Bartolomiau",
  "email": "Barto@catemail.com",
  "phone": 789456123
}' http://localhost:3001/users


curl "http://localhost:3001/users?name=Leanne%20Graham"

curl -X POST -H "Content-Type: application/json" -d '{
  "title": "Repaso de PI",
  "body": "El instructor es Fulano da Silva",
  "userId": "ac49336d-b4b7-4448-97ed-8500f860d3be"
}' http://localhost:3001/posts
