import express,{ Application, Request, Response } from "express";
import cors from 'cors';
import router from "./app/routes";

const app: Application = express();
app.use(cors());
app.use(express.json())

app.use('/', router);
app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Bookflow api running..."
    })
}) 

export default app;