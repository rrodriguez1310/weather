#clima
Descargar todo el proyecto en una carpeta llamada weather,
 ir a la carpeta de nombre "REDIS" y ejecutar el archivo de nombre "redis-server",
 instalar el visual studio code, desde este enlace "https://code.visualstudio.com/Download" elegir el sistema operatico de equipo,
 iniciar visul studio code, ir a la opcio terminal y ejecutar "new terminal",
 desde el terminal desplazarse a la carpeta "back" del repositorio,
 ir a la carpeta back y ejecutar el comando "npm install" si se observan errores, borrar la carpeta "node_modulos" y volver a ejecutar el pm install, si no arroja ningun mensaje de error ejecutar el comando "nodemon start",
 ir a la carpeta front y ejecutar el comando "npm install" si se observan errores, borrar la carpeta "node_modulos" y volver a ejecutar el npm install y si no arroja ningun error ejecutar el comando "npm run serve",
 el sistema estara actaulizandose cada 10 segundos, se tiene un script que arroja un 10% de error, cada error se estara guardando en redis con la clave de la hora "time"  y un mensaje de error contentivo de cual API fallo.
