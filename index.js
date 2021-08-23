import express from 'express';
import { promises as fs } from 'fs';
import cors from 'cors';
import investmentRouter from './routes/investment-router.js';


const PORT = process.env.PORT || 5000;
const { readFile } = fs;

// @ts-ignore
global.fileName = './investments-2.json';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/investments', investmentRouter);

app.listen(PORT, async () => {
    try {
        // @ts-ignore
        await readFile(global.fileName);
        console.log(`Server started on port ${PORT}`);
    } catch (error) {
        console.error( error );
    }    
});