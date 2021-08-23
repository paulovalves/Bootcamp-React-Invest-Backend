import { promises as fs } from 'fs';

const { readFile } = fs;

async function getInvestments() {
    // @ts-ignore
    const data = JSON.parse(await readFile(global.fileName));
    return data.investments;
}

async function getReports() {
    // @ts-ignore
    const data = JSON.parse(await readFile(global.fileName));
    
    if(data){
        return data.reports;
    }

    throw new Error('Reports não encontrados.');
}

export default {
    getInvestments
}