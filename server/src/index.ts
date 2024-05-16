// import elysia
import { Elysia } from "elysia";

// import routes
import Routes from "./routes";

// initiate elysia
const app = new Elysia();

// route home
app.get("/", () => {
    return {
        success: true,
        message: "Warranty Management System",
    };
});

// add routes
app.group('/api', (app) => app.use(Routes));

// start server
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
