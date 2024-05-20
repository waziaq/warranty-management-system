// import elysia
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

// import routes
import ProductRouter from "./routes/ProductRouter";
import CustomerRouter from "./routes/CustomerRouter";
import claimRouter from "./routes/ClaimController";

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
app.use(ProductRouter);
app.use(CustomerRouter);
app.use(claimRouter);

// start server
app
  .use(
    cors()
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
