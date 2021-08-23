import InvestmentRepository from '../repository/investment-repository.js';

async function getInvestments(){
    return await InvestmentRepository.getInvestments();
}