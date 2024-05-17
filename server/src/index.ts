// import elysia
import { Elysia } from "elysia";

// import routes
import ProductRouter from "./routes/ProductRouter";
import CustomerRouter from "./routes/CustomerRouter";

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

// start server
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
