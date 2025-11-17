import app from "./app.js";
import productRoutes from "./routes/productRoutes.js";

app.use("/products", productRoutes);