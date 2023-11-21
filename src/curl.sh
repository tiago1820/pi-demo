# Estos comandos son para hacer peticiones via terminal, sin la 
# necesidad de utilizar Postman, Thunder o algo parecido.
# Si alguien utiliza alguna herramienta nombrada arriba, no se
# preocupe con este archivo.

# POST a la ruta users
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Bartolomiau",
  "username": "Barto",
  "phone": 789456123
}' http://localhost:3001/users

