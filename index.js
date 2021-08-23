import express from 'express';
import { promises as fs } from 'fs';
import cors from 'cors';


const PORT = process.env.PORT || 5000;
const { readFile } = fs;

// @ts-ignore
global.fileName = './investments-2.json';

const app = express();
app.use(express.json());
app.use(cors());


app.listen(PORT, async () => {
    try {
        // @ts-ignore
        await readFile(global.fileName);
        console.log(`Server started on port ${PORT}`);
    } catch (error) {
        console.error( error );
    }    
});