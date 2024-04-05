# Bot de Discord para Armar Instancias en WoW

Este bot de Discord está diseñado para ayudar a los jugadores a organizar grupos para armar instancias en el juego World of Warcraft (WoW). Proporciona comandos para armar grupos automáticamente, así como funcionalidades adicionales para facilitar la comunicación y coordinación entre los jugadores.

## Características

- Comandos slash para armar grupos en diferentes dificultades de instancias.
- Integración con Discord para notificar a los miembros sobre la formación de grupos.
- Verificación de roles de Discord para garantizar que solo los miembros autorizados puedan utilizar ciertos comandos.
- Despliegue automático de comandos en Discord utilizando la API de Discord.

## Requisitos

- Node.js >= 12.0.0
- npm o yarn
- Una cuenta de Discord y una aplicación de bot creada en [Discord Developer Portal](https://discord.com/developers/applications)

## Instalación

1. Clona este repositorio en tu máquina local: git clone https://github.com/tu_usuario/bot-dc.git

2. Instala las dependencias del proyecto: npm install

3. Configura el archivo `config.json` con la información necesaria, como el token de tu bot, el ID del cliente y el ID del servidor de Discord.

4. Ejecuta el script `deploy-commands.js` para desplegar los comandos en Discord: node deploy-commands.js

5. Inicia el bot ejecutando el archivo `index.js`: node index.js


## Uso

Una vez que el bot esté en funcionamiento, los miembros del servidor de Discord pueden utilizar los comandos predefinidos para armar grupos en diferentes instancias de WoW. Por ejemplo:

- `/icc25n`: Arma un grupo para la versión normal de la Ciudadela de Corona de Hielo de 25 jugadores.
- `/icc10h`: Arma un grupo para la versión heroica de la Ciudadela de Corona de Hielo de 10 jugadores.

## Contribuir

¡Siéntete libre de contribuir a este proyecto! Puedes reportar problemas, sugerir nuevas características o enviar solicitudes de extracción.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

---

© 2024 behez0n
