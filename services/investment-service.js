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

async function getReportsbyInvestmentName(name){
    return await InvestmentRepository.getReportsbyInvestmentName(name);
}

async function getReportsbyInvestmentId(id){
    return await InvestmentRepository.getReportsbyInvestmentId(id);
}

async function getReportsByMonth(month){
    return await InvestmentRepository.getReportsByMonth(month);
}

async function getReportsByYear(year){
    return await InvestmentRepository.getReportsByYear(year);
}