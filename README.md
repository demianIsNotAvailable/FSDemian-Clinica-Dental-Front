# Clínica Dental - Frontend
Proyecto destinado a la creación del frontend de una API REST de una clínica dental, con gestión de usuarios y citas. 

## Tecnologías usadas
El proyecto está hecho a base de React, Redux, Bootstrap y React-Bootstrap


## Descripción
Es una web con funcionalidades básicas que permite registrarse como usuario, crear y borrar citas eligiendo doctor, fecha y hora, así como tipo de intervención. También se puede ver y editar el perfil y las citas propias.
Como administrador permite acceder al listado de usuarios, buscar usuarios por nombre o rol, y también permite ver todas las citas de la plataforma. Como administrador puedes crear citas a nombre de un cliente para un doctor concreto.
No cuenta con validación de fechas (puedes crear citas en el pasado, o para dentro de 50 años, o a las 3 de la mañana), pero sí verifica que un doctor no tenga solapamiento de fechas. Un usuario sí puede tener a su nombre citas coincidentes, interpretando que pueden ser miembros distintos de una misma familia, por ejemplo.

## Responsive
La aplicación es full responsive.
