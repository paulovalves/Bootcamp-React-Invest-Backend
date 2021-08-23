import { promises as fs } from 'fs';

const { readFile } = fs;

async function getInvestments() {
    // @ts-ignore
    const data = JSON.parse(await readFile(global.fileName));
    return data.investments;
}

export default {
    getInvestments
}