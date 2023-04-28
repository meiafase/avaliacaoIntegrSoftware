import { FolhaPagamentoRepository } from '../data/FolhaPagamento.repository';
import { Request, Response } from 'express';
import { FolhaPagamento } from '../models/FolhaPagamento.models';
import Axios from 'axios';
import { Funcionario } from '../models/Funcionario';

const folhaPagamentoRepository = new FolhaPagamentoRepository();

export class FolhaPagamentoController {
    
    async listar(request: Request, response: Response) {
        const folhas = await folhaPagamentoRepository.listar();

        return response.json({
            status: 'ok',
            content: folhas
        })
    }

    async insert(request: Request, response: Response) {
        const pessoas = await folhaPagamentoRepository.cadastrar(request.body);

        if(pessoas) {
            response.send('ok');
        }
    }
    
}