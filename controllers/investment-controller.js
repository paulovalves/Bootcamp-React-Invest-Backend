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

async function getReportById(req, res){
    try {
        res.send(await InvestmentService.getReportById(req.params.id));
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

async function getReportsbyInvestmentName(req, res){
    try{
        res.send(await InvestmentService.getReportsbyInvestmentName(req.params.name));
    } catch (error){
        res.status(400).send({ error: error.message });
    }
}

async function getReportsbyInvestmentId(req, res){
    try {
        res.send(await InvestmentService.getReportsbyInvestmentId(req.params.id));
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

async function getReportsByMonth(req, res){
    try {
        res.send(await InvestmentService.getReportsByMonth(req.params.month));
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

async function getReportsByYear(req, res){
    try {
        res.send(await InvestmentService.getReportsByYear(req.params.year));
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

async function getReportsByDate(req, res){
    try {
        const {month, year} = req.params;
        res.send(await InvestmentService.getReportsByDate(month, year))
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}