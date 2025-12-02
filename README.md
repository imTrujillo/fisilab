# Proyecto: Plataforma Interactiva para Aprender Física Universitaria

<img src="https://fisilab.vercel.app/logo.png" width="200" alt="Logo del proyecto">

Aplicación web inspirada en la metodología didáctica de *Duolingo*, diseñada para facilitar el aprendizaje de la **Física I, II y III** del plan de estudios de Ingeniería en Sistemas Computacionales de la **Universidad Evangélica de El Salvador**.

El proyecto utiliza un diseño moderno, aprendizaje progresivo y retroalimentación inmediata, con contenidos basados en **Física Universitaria – Sears & Zemansky**.

---

## 🚀 Tecnologías principales

* **Next.js 14 (App Router)**
* **React**
* **TypeScript**
* **Clerk** – Autenticación y gestión de usuarios
* **Neon Database (PostgreSQL Serverless)** – Base de datos principal
* **Prisma ORM** – Modelado y acceso a datos
* **Shadcn/UI** – Componentes estilizados
* **Tailwind CSS**
* **Vercel** – Hosting recomendado

La estructura y lógica se basan en el curso:
**Duolingo Clone – Code with Antonio**
[https://www.codewithantonio.com/projects/duolingo-clone](https://www.codewithantonio.com/projects/duolingo-clone)

---

## 📘 Objetivo del Proyecto

![App](https://fisilab.vercel.app/screenshots/1.png)

Diseñar una aplicación web interactiva enfocada en mejorar la comprensión conceptual y el desarrollo de habilidades analíticas de los estudiantes universitarios de física, mediante una plataforma gamificada, estructurada en:

* Cursos →
* Unidades →
* Lecciones →
* Ejercicios →
* Respuestas

Además, la plataforma registra:

* Progreso por usuario
* Progreso por lección
* Estadísticas de rendimiento

---

## 📚 Contenidos del Curso

![Contenidos](https://fisilab.vercel.app/screenshots/6.png)

### Física I – Mecánica

* Definición de fuerza
* Masa y peso
* Primera Ley de Newton
* Segunda Ley de Newton
* Tercera Ley de Newton
* Energía cinética
* Trabajo
* Potencia
* Fuerza y presión
* Presión hidráulica

### Física II – Energía y Oscilaciones

* Energía potencial
* Fuerzas conservativas y no conservativas
* Energía potencial gravitacional
* Energía potencial elástica
* Movimiento Armónico Simple
* Oscilaciones
* Péndulo simple
* Péndulo físico

### Física III – (Placeholder futuros módulos)

* Sección destinada para ampliar a Electricidad, Magnetismo, Ondas y Termodinámica.

---

## 🏗️ Arquitectura del Proyecto

![Curso](https://fisilab.vercel.app/screenshots/2.png)


![Lección](https://fisilab.vercel.app/screenshots/3.png)


### 🧩 Entidades del Sistema

| Entidad                  | Descripción                                                  |
| ------------------------ | ------------------------------------------------------------ |
| **Curso**                | Contenedor general de módulos temáticos (Física I, II, III). |
| **Unidad**               | Agrupación de lecciones dentro de cada curso.                |
| **Lección**              | Conjunto de ejercicios interactivos.                         |
| **Ejercicio**            | Preguntas tipo opción múltiple, completar, relacionar, etc.  |
| **Respuestas**           | Alternativas de cada ejercicio.                              |
| **Usuario**              | Autenticado mediante Clerk.                                  |
| **Progreso del Usuario** | Estadísticas generales de aprendizaje.                       |
| **Progreso de Lección**  | Seguimiento detallado del avance.                            |

---

## 🔐 Autenticación con Clerk

![Autenticación](https://fisilab.vercel.app/screenshots/4.png)

El proyecto usa Clerk para:

* Registro de usuarios
* Inicio de sesión
* Sesiones seguras
* Middleware para proteger rutas
* Perfil del usuario

Configuración mediante variables de entorno:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

---

## 🗄️ Base de Datos (Neon + Prisma)

![DB](https://fisilab.vercel.app/screenshots/5.png)

Modelo inspirado en el curso de Antonio, adaptado a contenidos universitarios.

Ejemplo parcial:

```prisma
model Course {
  id        String   @id @default(cuid())
  title     String
  units     Unit[]
}
```

La base se ejecuta en Neon (serverless PostgreSQL) con prisma migrations.

---

## ▶️ Scripts para Desarrollo

```
npm install
npm run dev
```

Build para producción:

```
npm run build
npm start
```

---

## 🌐 Despliegue

La configuración recomendada:

* **Vercel** para la web
* **NeonDB** para la base de datos
* **Clerk** para autenticación

Asegúrate de configurar correctamente:

* Variables de entorno
* URL callback de Clerk
* `DATABASE_URL` de Neon

---

## 👥 Creadores

1. Luis Martínez → https://github.com/BlckXI
2. Josué Melara → https://github.com/JosuMelara21
3. José González
4. Steven Trujillo → https://github.com/imTrujillo
5. Ernesto Zavaleta
