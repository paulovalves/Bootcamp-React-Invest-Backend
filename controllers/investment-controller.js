import InvestmentService from '../services/investment-service.js';

async function getInvestments(req, res){
    try {
        res.send(await InvestmentService.getInvestments());
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

async function getReports(req, res){
    try {
        res.send(await InvestmentService.getReports());
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}