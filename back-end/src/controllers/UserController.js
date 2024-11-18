const { Sequelize } = require('../models/index.js');
const Service = require('../services/Service.js');
const bcrypt = require('bcrypt');

const service = new Service;

 class  UserController {
  
  
  static async register (req, res) {
    try {
      const data = req.body;
      console.log(data);
      const created = await service.createNewRegister(data);

      if (created) {
        return res.status(200).json(created)
      } else {
        return res.status(400).json({ message: "Erro ao registrar um usuário" });
      }
    } catch (errors) {
      
      if (errors instanceof Sequelize.UniqueConstraintError) {
        
        return res.status(400).json({ message: "Usuário ou email já estão em uso. Por favor escolha outro" })
      }

  
      else if (errors instanceof Sequelize.ValidationError) {
        return res.status(400).json(errors.errors.map(err => err.message));
      }
    }
  }

  static async login (req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({message: 'Usuário e senha são obrigatórios'});
      }

      const userFound = await service.compareRegister(username);
      
      const isValidPassword = userFound ? await bcrypt.compare(password, userFound.password ) : null;


     if (userFound && isValidPassword) {
        const { full_name, username, email, password, createdAt} = userFound;

        return res.status(200).json({
          full_name, 
          username, 
          email,
          password,
          createdAt: new Intl.DateTimeFormat('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          }).format(createdAt)
        });
      } else {
        return res.status(400).json({ message: 'Usuário ou senha incorretos(a)' });
      }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async deleteRegister(req, res) {
    try {
      const { username } = req.params;

      const deleted = await service.deleteRegister(username);

      if (deleted) {
        res.status(200).json({ message: 'Usuário deletado com sucesso.'});
      } else {
        res.status(400).json({ message: 'Usuário não encontrado' });
      }
    } catch {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

module.exports = UserController;
