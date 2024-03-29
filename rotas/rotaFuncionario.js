let { addFuncionario, getFuncionario, listFuncionario, deleteFuncionario, editFuncionario } = require('../database/funcionario');

module.exports = app => {

    app.get('/funcionario/get', (req, res) => {
        (async () => {
            try {
                let { cdFuncionario } = req.query;
                let results = await getFuncionario(cdFuncionario);
                res.status(200).send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.put('/funcionario/add', (req, res) => {
        (async () => {
            try {
                let { nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa } = req.body;
                cdEmpresa = cdEmpresa === '' ? null : +cdEmpresa;
                let results = await addFuncionario(nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa);
                res.send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.post('/funcionario/edit', (req, res) => {
        (async () => {
            try {
                let { cdFuncionario, nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa } = req.body;
                cdEmpresa = cdEmpresa === '' ? null : +cdEmpresa;
                let results = await editFuncionario(cdFuncionario, nome, logradouro, numeroEndereco, bairro, municipio, cdEmpresa, aoAtivo);
                res.send(results);
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.get('/funcionario/list', (req, res) => {
        (async () => {
            try {
                let { cdEmpresa } = req.query;
                cdEmpresa = cdEmpresa > 0 ? cdEmpresa : 1;
                let results = await listFuncionario(cdEmpresa);
                res.send({ results });
            } catch (error) {
                res.send({ error });
            }
        })();
    });

    app.delete('/funcionario/delete', (req, res) => {
        (async () => {
            try {
                let { cdFuncionario } = req.body;
                let results = await deleteFuncionario(cdFuncionario);
                res.send(results)
            } catch (err) {
                res.send({ error })
            }
        })();
    })
}