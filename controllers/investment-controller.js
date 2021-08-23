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

async function getInvestmentsById(req, res){
    try {
        res.send(await InvestmentService.getInvestmentById(req.params.id));
        
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

async function getInvestmentByName(req, res){
    try {
        res.send(await InvestmentService.getInvestmentByName(req.params.name));
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}