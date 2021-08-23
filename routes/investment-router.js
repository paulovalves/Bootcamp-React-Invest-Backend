import express from 'express';
const router = express.Router();
import InvestmentController from '../controllers/investment-controller.js';

router.get('/', InvestmentController.getInvestments);
router.get('/reports', InvestmentController.getReports);
router.get('/id/:id', InvestmentController.getInvestmentById);
router.get('/name/:name', InvestmentController.getInvestmentByName);
router.get('/reports/id/:id', InvestmentController.getReportById);
router.get('/reports/name/:name', InvestmentController.getReportsbyInvestmentName);
router.get('/reports/invesmentid/:id', InvestmentController.getReportsbyInvestmentId)
router.get('/reports/month/:month', InvestmentController.getReportsByMonth);
router.get('/reports/year/:year', InvestmentController.getReportsByYear);
router.get('/reports/date/:month-:year', InvestmentController.getReportsByDate);
router.get('/reports/orderbyvalue/asc', InvestmentController.getReportsByValueAsc);
router.get('/reports/orderbyvalue/desc', InvestmentController.getReportsByValueDesc);

export default router;