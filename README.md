# Auth App

A full-stack authentication project with a React and TypeScript frontend and a Spring Boot backend. The repository currently includes authentication UI and a registration API integration scaffold.

## Repository layout

```text
.
├── Prod_Auth_Frontend/   # React, TypeScript, and Vite application
├── Prod_Auth_Backend/    # Spring Boot application
└── README.md
```

## Technology

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Axios, and React Router
- **Backend:** Java 25, Spring Boot, Spring Data JPA, and Maven
- **Database driver:** MySQL Connector/J

## Prerequisites

- Node.js and npm
- JDK 25
- MySQL, if running the backend with database-backed features

## Run locally

### Frontend

```bash
cd Prod_Auth_Frontend
npm install
npm run dev
```

Open the local address printed by Vite. Other available frontend commands are:

```bash
npm run build
npm run lint
npm run preview
```

### Backend

The backend uses Maven Wrapper. From the repository root, start it with:

```bash
cd Prod_Auth_Backend
./mvnw spring-boot:run
```

On Windows, run `mvnw.cmd spring-boot:run` instead.

The backend's `application.properties` currently contains only the application name. Add the required database connection settings for your local environment before enabling database-dependent functionality. Do not commit credentials; use environment variables or another secure local configuration method.

## API configuration

The frontend API client accepts `VITE_API_BASE_URL`. Set it in a local `.env` file inside `Prod_Auth_Frontend` to the base URL exposed by your backend, for example:

```dotenv
VITE_API_BASE_URL=http://localhost:8083/api/v1
```

Confirm the backend's actual port and API path before using this example. The frontend currently has a registration request wired to `/auth/register`; configure the base URL and backend route to match.

## Current project scope

The frontend includes login and signup screens, and the signup flow calls the registration endpoint. The repository's backend currently contains the Spring Boot application entry point; a complete authentication API, database configuration, and production-ready login flow are not yet present. Social sign-in buttons are UI elements and should not be considered configured authentication providers.

## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/priyanshu-ag24">
        <img src="https://avatars.githubusercontent.com/u/291095318?v=4" width="80" height="80" alt="priyanshu-ag24 GitHub avatar" />
        <br /><strong>priyanshu-ag24</strong>
      </a>
      <br />
      <sub>Repository owner</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Blexedpritam">
        <img src="https://avatars.githubusercontent.com/u/176069349?v=4" width="80" height="80" alt="Blexedpritam GitHub avatar" />
        <br /><strong>Blexedpritam</strong>
      </a>
      <br />
      <sub>Contributor</sub>
    </td>
  </tr>
</table>

## License

No license is currently specified. Contact the repository owner before reusing or distributing this project.
