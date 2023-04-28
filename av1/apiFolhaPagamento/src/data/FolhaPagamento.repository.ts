import { FolhaPagamento } from "../models/FolhaPagamento.models";
import FolhaPagamentoModelsTable from './../models/tables/FolhaPagamento.models.tables';
import Axios from 'axios';

let folhaPagamentos: FolhaPagamento[] = [];

export class FolhaPagamentoRepository {
    async cadastrar(folhaPagamento: FolhaPagamento): Promise<FolhaPagamento> {
        const insert = await FolhaPagamentoModelsTable.create({
            mes: folhaPagamento.mes,
            ano: folhaPagamento.ano,
            horas: folhaPagamento.horas,
            valor: folhaPagamento.valor,
            nome: folhaPagamento.funcionario.nome,
            cpf: folhaPagamento.funcionario.cpf
        })
        return folhaPagamento
    }

    async calcular(): Promise<FolhaPagamento> {
        const dados = await FolhaPagamentoModelsTable.findAll();

        let folhas = []
        for (let d in dados) {
            folhas.push(dados[d].dataValues)
        }

        for (let a in folhas) {

            let salarioBruto = folhas[a].horas * folhas[a].valor;
            let fgtsPorcentagem = salarioBruto * 0.08;
            let fgts = salarioBruto - fgtsPorcentagem;
            let irrf = 0;
            let inss = 0;
            if (salarioBruto > 1903.98 && salarioBruto < 2826.65) {
                irrf = (salarioBruto * 0.075) - 142.80;
            } else if (salarioBruto > 2826.66 && salarioBruto < 3751.05) {
                irrf = (salarioBruto * 0.15) - 354.80;
            } else if (salarioBruto > 3751.06 && salarioBruto < 4664.68) {
                irrf = (salarioBruto * 0.225) - 636.13;
            } else if (salarioBruto > 4664.68) {
                irrf = (salarioBruto * 0.275) - 869.36;
            }

            if (salarioBruto < 1693.72) {
                inss = salarioBruto * 0.08
            } else if (salarioBruto > 1693.73 && salarioBruto > 2822.90) {
                inss = salarioBruto * 0.09
            } else if (salarioBruto > 2822.91 || salarioBruto > 5645.80) {
                inss = salarioBruto * 0.11
            } else {
                inss = 621.03
            }

            let salarioLiquido = salarioBruto - irrf - inss;

            await FolhaPagamentoModelsTable.destroy({
                where: {
                    idFolhaPagamento: folhas[a].idFolhaPagamento
                }
            })
            await Axios.post('http://localhost:3001/insertFolhasCalculadasBanco', {
                "mes": folhas[a].mes,
                "ano": folhas[a].ano,
                "horas": folhas[a].horas,
                "valor": folhas[a].valor,
                salarioBruto,
                irrf,
                inss,
                fgts,
                salarioLiquido,
                "nome": folhas[a].nome,
                "cpf": folhas[a].cpf,
            }).then(async res => {
                if(res) {
                    await Axios.get('http://localhost:3000/calcular');
                }
            })
        }



        return
    }
}
