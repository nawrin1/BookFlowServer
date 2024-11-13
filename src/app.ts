import express,{ Application, NextFunction, Request, Response } from "express";
import cors from 'cors';
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandlers";

const app: Application = express();
app.use(cors());
app.use(express.json())

app.use('/', router);
app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "Bookflow api running..."
    })
}) 

app.use(globalErrorHandler)


app.use((req: Request, res: Response, next: NextFunction) => { 
    res.status(404).json({
        success: false,
        status:404,
        message: "API NOT FOUND!"
       
    })
})


export default app;