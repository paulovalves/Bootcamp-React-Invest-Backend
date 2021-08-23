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