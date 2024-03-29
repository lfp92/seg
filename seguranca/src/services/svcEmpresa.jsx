import { request } from './services';

const listEmpresas = async () => {
    try {
        let { error, results } = await request('/empresa/list', 'GET');
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}

const getEmpresa = async (cdEmpresa) => {
    try {
        let { error, results } = await request('/empresa/get?cdEmpresa=' + cdEmpresa, 'GET');
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}

const addEmpresa = async (nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone) => {
    try {
        let { error, results } = await request('/empresa/add', 'PUT', { nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone });
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}

const deleteEmpresa = async (cdEmpresa) => {
    try {
        let { error, results } = await request('/empresa/delete', 'DELETE', { cdEmpresa });
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}


const editEmpresa = async (cdEmpresa, nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone, aoAtivo) => {
    try {
        let { error, results } = await request('/empresa/edit', 'POST', { cdEmpresa, nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone, aoAtivo });
        if (error) throw error;
        return results;
    } catch (error) {
        throw error;
    }
}



export { listEmpresas, getEmpresa, addEmpresa, editEmpresa, deleteEmpresa };