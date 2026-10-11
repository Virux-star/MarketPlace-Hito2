# Marketplace — Hito 2: Desarrollo Frontend

Este repositorio contiene la aplicación cliente desarrollada en **React** para el proyecto integrador **Marketplace de Velas (Vel-Art)**. El proyecto está maquetado con **Bootstrap 5**, utiliza **React Router DOM** para la navegación y **Context API** para la gestión del estado global de la sesión y las publicaciones.

---

## 🛠️ Tecnologías y Dependencias

- **Framework:** React 18 (Vite)
- **Navegación:** `react-router-dom` (v6)
- **Estado Global:** Context API (`UserContext`, `PostsContext`)
- **Estilos:** Bootstrap 5
- **Cliente HTTP:** Axios (configurado con interceptores de Token JWT)

---

## 📁 Estructura del Proyecto

front_market/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Recursos gráficos e imágenes
│   ├── components/  # Componentes reutilizables (Navbar, Cards, Modales)
│   ├── context/     # Proveedores de Estado Global (UserContext, PostsContext)
│   ├── services/    # Configuración de Axios (api.js)
│   ├── views/       # Vistas del sitio (Home, Login, Register, Profile, etc.)
│   ├── App.jsx      # Enrutador y Providers
│   └── main.jsx     # Punto de entrada y carga de Bootstrap
├── .env             # Variable de entorno de la API (VITE_API_URL)
├── .gitignore       # Exclusión de node_modules y variables sensibles
├── index.html       # Plantilla base HTML
├── package.json     # Scripts y dependencias
└── vite.config.js   # Configuración de Vite

🌐 Rutas del Sistema
Rutas Públicas
/ o /posts: Catálogo general de velas y publicaciones.

/posts/:id: Vista de detalle individual de un producto.

/login: Formulario de inicio de sesión.

/register: Formulario de registro de usuario.

Rutas Privadas (Requieren Token JWT activo)
/profile: Perfil del usuario autenticado.

/create-post: Formulario de creación de una nueva publicación.

🚀 Instrucciones de Ejecución

Clonar el repositorio:

git clone [https://github.com/walcorpar/MarketPlace-Hito2.git](https://github.com/walcorpar/MarketPlace-Hito2.git)
cd MarketPlace-Hito2/front_market

Instalar dependencias:

npm install

Configurar variables de entorno:
Crea un archivo .env en la raíz de front_market con el siguiente contenido:

VITE_API_URL=http://localhost:3000

Levantar el servidor de desarrollo:
npm run dev

