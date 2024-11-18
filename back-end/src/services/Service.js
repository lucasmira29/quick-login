const dataSource = require('../models');

class  Service {
  
  async createNewRegister(data){
    return dataSource.User.create(data)
  }

  async compareRegister(username) {
    
    return dataSource.User.findOne({
      where: {
        username: username,
      }
    })
  }

  async deleteRegister(username) {
    return dataSource.User.destroy(
      {
        where: {username: username}
      },
    );
  }

}

module.exports = Service;
