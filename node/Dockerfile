# Usa la imagen de Node.js 14 con Alpine Linux
FROM node:14-alpine

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expón el puerto en el que se ejecuta tu aplicación
EXPOSE 5000

# Comando para ejecutar tu aplicación cuando el contenedor se inicie
CMD ["node", "app.js"]
