# Auth App

A full-stack authentication application with a React and TypeScript frontend and a Spring Boot backend.

## Project structure

```text
Auth-App/
├── Prod_Auth_Frontend/   # React, TypeScript, and Vite client
├── Prod_Auth_Backend/    # Spring Boot and Java server
└── README.md
```

## Tech stack

**Frontend:** React, TypeScript, Vite, Tailwind CSS, React Router, Axios, and Framer Motion.  
**Backend:** Java 25, Spring Boot, Spring Data JPA, Maven, and MySQL Connector/J.

## Prerequisites

- Node.js and npm
- JDK 25
- MySQL

The backend includes a Maven wrapper, so a separate Maven installation is not required.

## Getting started

### Backend

Configure the database connection for your local MySQL instance in `Prod_Auth_Backend/src/main/resources/application.properties`, then run:

```bash
cd Prod_Auth_Backend
./mvnw spring-boot:run
```

On Windows, use `mvnw.cmd spring-boot:run` instead.

### Frontend

In another terminal, run:

```bash
cd Prod_Auth_Frontend
npm install
npm run dev
```

Use the local URL printed by Vite to open the frontend in your browser.

## Available frontend scripts

Run these commands from `Prod_Auth_Frontend`:

- `npm run dev` — start the development server
- `npm run build` — type-check and build for production
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

## Contributors

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://github.com/priyanshu-ag24" title="Visit priyanshu-ag24's GitHub profile">
        <img src="https://avatars.githubusercontent.com/u/291095318?v=4&size=120" width="100" alt="priyanshu-ag24's GitHub avatar" />
        <br />
        <strong>priyanshu-ag24</strong>
      </a>
      <br />
      <img src="https://img.shields.io/badge/OWNER-Repository%20owner-7c3aed?style=for-the-badge" alt="Repository owner" />
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/Blexedpritam" title="Visit Blexedpritam's GitHub profile">
        <img src="https://avatars.githubusercontent.com/u/176069349?v=4&size=120" width="100" alt="Blexedpritam's GitHub avatar" />
        <br />
        <strong>Blexedpritam</strong>
      </a>
      <br />
      <img src="https://img.shields.io/badge/CONTRIBUTOR-Project%20contributor-2563eb?style=for-the-badge" alt="Project contributor" />
    </td>
  </tr>
</table>

> GitHub README rendering does not support custom CSS or JavaScript, so animated hover effects and CSS-based circular image cropping cannot be applied here. The profile cards and badges are clickable where applicable, and hovering over each avatar link shows a profile tooltip.

## License

No license is currently specified. Please contact the repository owners for permission before reusing or distributing this project.
