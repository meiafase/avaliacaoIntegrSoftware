import { Router } from 'express';
import { FolhaPagamentoController } from '../controllers/FolhaPagamento.controller';

const router: Router = Router();

router.post('/cadastrarFolhaPagamento', new FolhaPagamentoController().cadastrar);

router.get('/calcular', new FolhaPagamentoController().calcular);


export { router }