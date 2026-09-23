import express from "express";
import type { Express } from "express";
import { envConfigs } from "./utils/envConfigs.js";
import Router from "./routes/routes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./swagger/swagger.js";

const app: Express = express();

app.use(express.json());
app.use("/api", Router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//route not found handler
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(envConfigs.PORT, () => {
  console.log("Server is running on port " + envConfigs.PORT);
  console.log(
    "Swagger UI is available at http://localhost:" +
      envConfigs.PORT +
      "/api-docs",
  );
});
