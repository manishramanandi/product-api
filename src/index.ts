import * as dotenv from "dotenv";

dotenv.config();

import app from "./server";

app.listen(3001, () => {
  console.log("Hello from the http://localhost:3001");
});
