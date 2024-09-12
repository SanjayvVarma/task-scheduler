import app from "./app.js";
import dbConnection from "./database/dbConnection.js";

dbConnection()

app.on("error", (error) => {
    console.log('ERROR', error);
    throw error
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server running at port :', process.env.PORT);
});