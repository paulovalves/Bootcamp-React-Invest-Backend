import InvestmentRepository from '../repository/investment-repository.js';

async function getInvestments(){
    return await InvestmentRepository.getInvestments();
}

async function getReports(){
    return await InvestmentRepository.getReports();
}

async function getInvestmentById(id){
    return await InvestmentRepository.getInvestmentById(id);
}

async function getInvestmentByName(name){
    return await InvestmentRepository.getInvestmentByName(name);
}

async function getReportById(id){
    return await InvestmentRepository.getReportById(id);
}

async function getReportsByInvestmentName(name){
    return await InvestmentRepository.getReportsByInvestmentName(name);
}

async function getReportsByInvestmentId(id){
    return await InvestmentRepository.getReportsByInvestmentId(id);
}

async function getReportsByMonth(month){
    return await InvestmentRepository.getReportsByMonth(month);
}

async function getReportsByYear(year){
    return await InvestmentRepository.getReportsByYear(year);
}

async function getReportsByDate(month, year) {
    return await InvestmentRepository.getReportsByDate(month, year);
}

async function getReportsByValueAsc(){
    return await InvestmentRepository.getReportsByValueAsc();
}

async function getReportsByValueDesc(){
    return await InvestmentRepository.getReportsByValueDesc();
}

export default {
    getInvestments,
    getReports,
    getInvestmentById,
    getInvestmentByName,
    getReportById,
    getReportsByInvestmentName,
    getReportsByInvestmentId,
    getReportsByMonth,
    getReportsByYear,
    getReportsByDate,
    getReportsByValueAsc,
    getReportsByValueDesc
}