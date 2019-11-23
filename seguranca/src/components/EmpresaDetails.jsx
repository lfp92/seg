import React from 'react';
import { getEmpresa, editEmpresa } from '../services/svcEmpresa';

class EditEmpresa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cdEmpresa: props.cdEmpresa,
            nomeEmpresarial: '',
            cnpj: '',
            logradouro: '',
            numeroEndereco: '',
            complemento: '',
            cep: '',
            bairro: '',
            municipio: '',
            email: '',
            telefone: '',
            aoAtivo: ''
        }
    }

    save = () => {
        (async () => {
            let { cdEmpresa, nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone, aoAtivo } = this.state;
            await editEmpresa(cdEmpresa, nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone, aoAtivo)
        })();
    }

    componentDidMount() {
        (async () => {
            let emp = await getEmpresa(this.state.cdEmpresa);
            this.setState({
                nomeEmpresarial: emp.nome_empresarial,
                cnpj: emp.cnpj,
                logradouro: emp.logradouro,
                numeroEndereco: emp.nr_endereco,
                complemento: emp.complemento,
                cep: emp.cep,
                bairro: emp.bairro,
                municipio: emp.municipio,
                email: emp.email,
                telefone: emp.telefone,
                aoAtivo: emp.ao_ativo
            })
        })()
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <tr><td>Cód. Empresa</td><td><div>{this.state.cdEmpresa}</div></td></tr>
                        <tr><td>Nome Empresarial</td><td><input type='text' onChange={(event) => this.setState({ nomeEmpresarial: event.target.value })} value={this.state.nomeEmpresarial}></input></td></tr>
                        <tr><td>CNPJ</td><td><input type='text' onChange={(event) => this.setState({ cnpj: event.target.value })} value={this.state.cnpj}></input></td></tr>
                        <tr><td>Logradouro</td><td><input type='text' onChange={(event) => this.setState({ logradouro: event.target.value })} value={this.state.logradouro}></input></td></tr>
                        <tr><td>Nr. Endereço</td><td><input type='text' onChange={(event) => this.setState({ numeroEndereco: event.target.value })} value={this.state.numeroEndereco}></input></td></tr>
                        <tr><td>Complemento</td><td><input type='text' onChange={(event) => this.setState({ complemento: event.target.value })} value={this.state.complemento}></input></td></tr>
                        <tr><td>CEP</td><td><input type='text' onChange={(event) => this.setState({ cep: event.target.value })} value={this.state.cep}></input></td></tr>
                        <tr><td>Bairro</td><td><input type='text' onChange={(event) => this.setState({ bairro: event.target.value })} value={this.state.bairro}></input></td></tr>
                        <tr><td>Município</td><td><input type='text' onChange={(event) => this.setState({ municipio: event.target.value })} value={this.state.municipio}></input></td></tr>
                        <tr><td>Email</td><td><input type='text' onChange={(event) => this.setState({ email: event.target.value })} value={this.state.email}></input></td></tr>
                        <tr><td>Telefone</td><td><input type='text' onChange={(event) => this.setState({ telefone: event.target.value })} value={this.state.telefone}></input></td></tr>
                        <tr><td>Ativo</td><td><input type='checkbox' onChange={(event) => this.setState({ aoAtivo: event.target.checked ? 'S' : 'N' })} value={this.state.aoAtivo}></input></td></tr>
                    </tbody>
                </table>
                <button onClick={() => this.save()}>Salvar</button> <br />
                <button onClick={() => { console.log(this.props.voltar); this.props.voltar() }}>Voltar</button>
            </React.Fragment>
        );
    }
}


export { EditEmpresa };