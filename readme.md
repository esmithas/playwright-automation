# Automation Web - Playwright

Este documento proporciona instrucciones sobre cómo ejecutar el proyecto de automatización web.

## Prerequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes elementos:

- **Nodejs** 
- **NPM**
- **Editor/IDE** (Visual code/IntelliJ IDEA, etc.)

## Ejecución del Proyecto

### 1. Clonar el Repositorio

Si aún no lo has hecho, clona el repositorio del proyecto:
```bash
git clone https://github.com/esmithas/playwright-automation.git
cd tu-repositorio
```

### Instalación de Dependencias

Si es la primera vez que ejecutas el proyecto, asegúrate de que todas las dependencias están instaladas. Ejecuta el siguiente comando en la raíz del proyecto:
```
npm install
```

### Ejecución

Los archivo  `.env` se configurada las variables por entorno:
- `.env.dev`: Variables de entorno del ambiente de desarrollo.
- `.env.qa`: Variables de entorno del ambiente de certificación.

A continuación se muestra un ejemplo de cómo luce el archivo:
```env
URL="https://www.tuweb.com"
```
- ***Los tests se ubican en la siguiente ruta***:
  `src/test/features`


##### Ejecutar test por comando, donde:
- env = es el ambiente donde se ejecutará (valores= dev/qa)
- tag = es el tag del test que se va a ejecutar
```batch
npm run test:env -- --tags "@Tag"
```

##### Generar reporte de ejecución:
```batch
 node generateReport.js
```

## Autor ✒️

* **Esmith Alama Sanchez** - *QA Automation* - [EsmithAS](https://github.com/EsmithAS)