import { Funcionario } from "./Funcionario";

export interface FolhaPagamento {
    idFolhaPagamento?: number,
    mes?: number,
    ano?: number,
    horas?: number,
    valor?: number,
    funcionario?: Funcionario
}