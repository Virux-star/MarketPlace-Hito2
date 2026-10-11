# Marketplace — Hito 2: Desarrollo Frontend

Este repositorio contiene la aplicación desarrollada para el proyecto integrador **Marketplace (Vel-Art)**, incluyendo el servidor **Backend** (Node.js/Express) y la aplicación cliente **Frontend** (React + Vite) maquetada con **Bootstrap 5**, **React Router DOM** y **Context API**.

---

## 🛠️ Tecnologías y Dependencias

- **Backend:** Node.js, Express, PostgreSQL, JWT, bcryptjs, dotenv.
- **Frontend Framework:** React 18 (Vite)
- **Navegación:** `react-router-dom` (v6)
- **Estado Global:** Context API (`UserContext`, `PostsContext`)
- **Estilos:** Bootstrap 5
- **Cliente HTTP:** Axios (con interceptores para Token JWT)

---

## 📁 Estructura del Proyecto

```text
.
├── back_market/          # Servidor de API REST (Node.js / Express)
│   ├── BD/               # Scripts SQL de base de datos
│   ├── src/              # Controladores, rutas y middlewares
│   └── package.json
│
└── front_market/         # Aplicación cliente (React / Vite)
    ├── public/           # Archivos estáticos
    ├── src/
    │   ├── assets/       # Recursos gráficos e imágenes
    │   ├── components/   # Componentes reutilizables (Navbar, Cards, Modales)
    │   ├── context/      # Proveedores de Estado Global (UserContext, PostsContext)
    │   ├── services/     # Configuración de Axios (api.js)
    │   └── views/        # Vistas (Home, Login, Register, Profile, etc.)
    ├── .env              # Variable de entorno de la API (VITE_API_URL)
    ├── index.html        # Plantilla base HTML
    └── package.json      # Dependencias y scripts de Vite

🌐 Rutas del Sistema (Frontend)
Rutas Públicas
/ o /posts: Catálogo general de velas y publicaciones.

/posts/:id: Vista de detalle individual de un producto.

/login: Formulario de inicio de sesión.

/register: Formulario de registro de usuario.

Rutas Privadas (Requieren Token JWT activo)
/profile: Perfil del usuario autenticado.

/create-post: Formulario de creación de una nueva publicación.

🚀 Instrucciones de Ejecución
1. Servidor Backend (back_market)
Bash
cd back_market
npm install
npm run dev
2. Cliente Frontend (front_market)
En una nueva terminal:

Bash
cd front_market
npm install
npm run dev
Navegar a http://localhost:5173 para abrir la aplicación.
