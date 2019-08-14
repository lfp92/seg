let { getEmpresa, addEmpresa } = require('../database/empresa');

module.exports = app => {
    app.get('/empresa/get', (req, res) => {
        (async () => {
            try {
                let { empresaId } = req.body;
                if (empresaId === null || empresaId === undefined) throw new Error('Id de empresa inválido');
                let results = await getEmpresa(empresaId);
                res.status(200).send(results);
            } catch (error) {
                res.send({ error: error.message });
            }
        })();
    });

    app.put('/empresa/add', (req, res) => {
        (async () => {
            try {
                let { nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone } = req.body;
                let results = await addEmpresa(nomeEmpresarial, cnpj, logradouro, numeroEndereco, complemento, cep, bairro, municipio, email, telefone);
                res.send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.get('/empresa/todas', (req, res) => {
        (async () => {
            try {
                let conn = await connect();
                let results = await query.bind(conn)('select * from empresa order by nome_empresa');
                conn.release();
                res.send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });
}