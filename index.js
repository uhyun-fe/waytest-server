import mongodb from "mongodb";
import dotenv from "dotenv";

import app from "./server.js";
import QuestsDAO from "./dao/questsDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.QUESTS_DB_URI, {
   maxPoolSize: 50,
   wtimeoutMS: 2500,
   useNewUrlParser: true,
})
   .catch((err) => {
      console.error(err.stack);
      process.exit(1);
   })
   .then(async (client) => {
      await QuestsDAO.injectDB(client);
      app.listen(port, () => {
         console.log(`listening on port ${port}`);
      });
   });
