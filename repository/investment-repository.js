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

async function getInvestmentsById(id){
    const data = await getInvestments();
    const result = data.filter((i) => i.id === id);

    if(result){
        return result;
    }

    throw new Error('Investimento não foi encontrado.');
}

async function getInvestmentsByName(name){
    const data = await getInvestments();
    const result = data.filter((i) => i.description === name);

    if(result){
        return result;
    }

    throw new Error('Investimento não foi encontrado.');
}

async function getReportsById(id){
    const reports = await getReports();
    const result = reports.filter((r) => r.id === id);

    if(result){
        return result;
    }

    throw new Error('Report não foi encontrado.');
}

async function getReportsByInvestmentName(name){
    const investments = await getInvestmentsByName(name);
    const reports = await getReports();

    const id = investments[0].id;

    const result = reports.filter((r) => r.investmentId === id)

    if(result){
        return result;
    }

    throw new Error('Reports não foram encontrados.');
}

async function getReportsByInvestmentId(id){
    const reports = await getReports();

    const result = reports.filter((r) => r.investmentId === id);

    if(result){
        return result;
    }

    throw new Error('Reports não foram encontrados.');
}

async function getReportsByMonth(month){
    const reports = await getReports();

    const result = reports.filter((r) => r.month === parseInt(month));

    if(result){
        return result;
    }

    throw new Error('Reports não foram encontrados.');
}

export default {
    getInvestments,
    getReports,
    getInvestmentsById,
    getInvestmentsByName,
    getReportsById,
    getReportsByInvestmentName,
    getReportsByInvestmentId
}