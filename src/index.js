import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB, init } from "./db.js";

async function main() {
  try {
    await connectDB();
    await init();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();
