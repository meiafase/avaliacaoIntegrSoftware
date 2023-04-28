import { Router } from 'express';
import { FolhaPagamentoController } from '../controllers/FolhaPagamento.controller';

const router: Router = Router();

router.post('/insertFolhasCalculadasBanco', new FolhaPagamentoController().insert);

router.get('/listarFolhasCalculadasBanco', new FolhaPagamentoController().listar);

export { router }