const express = require('express');
const app = express();
const Unidade = require('./models/Unidade');
const Atendente = require('./models/Atendente');
const Cliente = require('./models/Cliente');
const Session = require('./models/Session');

app.use(express.json());


// Unidade
app.get("/get-unidade", async (req, res) => {

    await Unidade.findAll({
        attributes: ['name', 'endereco', 'telefone']
    })
        .then((dataUnidade) => {
            return res.json({
                erro: false,
                dataUnidade
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Nenhum valor encontrado para Unidade"
            });
        });
});

app.post("/add-unidade", async (req, res) => {

    await Unidade.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados de Unidade cadastrados com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Dados de Unidade não cadastrados com sucesso!"
        });
    });
});

app.patch('/patch-unidade', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
  
    User.findByIdAndUpdate(id, { $set: { name: name } }, { new: true }).then(updatedUser => {
      res.send('User updated by id through PATCH');
    });
});

app.delete('/unidades/:id', async (req, res) => {
    try {
    Unidade.findByIdAndRemove({id: req.params.id})
     res.status(200).json({ unidade: unidade })
    } catch (error) {
     res.status(422).json({ error })
    }
});

// Atendente
app.get("/get-atendente", async (req, res) => {

    await Atendente.findAll({
        attributes: ['name', 'endereco_residencia', 'email', 'cpf', 'telefone', 'carga_horaria_semanal']
    })
        .then((dataAtendente) => {
            return res.json({
                erro: false,
                dataAtendente
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Nenhum valor encontrado para Atendente"
            });
        });
});

app.post("/add-atendente", async (req, res) => {

    await Atendente.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados de Atendente cadastrados com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Dados de Atendente não cadastrados com sucesso!"
        });
    });
});

app.patch('/patch-atendente', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
  
    User.findByIdAndUpdate(id, { $set: { name: name } }, { new: true }).then(updatedUser => {
      res.send('User updated by id through PATCH');
    });
});

app.delete('/del-atendente', async (req, res) => {
    try {
     const atendente = await Atendente.destroy(req.params.id)
     res.status(200).json({ atendente: atendente })
    } catch (error) {
     res.status(422).json({ error })
    }
});

// Cliente
app.get("/get-Cliente", async (req, res) => {

    await Cliente.findAll({
        attributes: ['name', 'email', 'telefone', 'influencer', 'redes_sociais']
    })
        .then((dataCliente) => {
            return res.json({
                erro: false,
                dataCliente
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Nenhum valor encontrado para Cliente"
            });
        });
});

app.post("/add-Cliente", async (req, res) => {

    await Cliente.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados de Cliente cadastrados com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Dados de Cliente não cadastrados com sucesso!"
        });
    });
});

app.patch('/patch-cliente', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
  
    User.findByIdAndUpdate(id, { $set: { name: name } }, { new: true }).then(updatedUser => {
      res.send('User updated by id through PATCH');
    });
});

app.delete('/del-cliente', async (req, res) => {
    try {
     const cliente = await Cliente.destroy(req.params.id)
     res.status(200).json({ cliente: cliente })
    } catch (error) {
     res.status(422).json({ error })
    }
});

// Session
app.get("/get-session", async (req, res) => {

    await Session.findAll({
        attributes: ['name', 'nome_profissional', 'nome_cliente', 'valor', 'date']
    })
        .then((dataSession) => {
            return res.json({
                erro: false,
                dataSession
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Nenhum valor encontrado para Session"
            });
        });
});

app.post("/add-session", async (req, res) => {

    await Session.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados de Session cadastrados com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Dados de Session não cadastrados com sucesso!"
        });
    });
});

app.patch('/patch-session', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
  
    User.findByIdAndUpdate(id, { $set: { name: name } }, { new: true }).then(updatedUser => {
      res.send('User updated by id through PATCH');
    });
});

app.delete('/del-session', async (req, res) => {
    try {
     const session = await Session.destroy(req.params.id)
     res.status(200).json({ session: session })
    } catch (error) {
     res.status(422).json({ error })
    }
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});