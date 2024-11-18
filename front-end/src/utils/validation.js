function validateName(completeName) {
  if (!completeName) {
    return 'O campo nome é obrigatório';
  } else if (completeName.length <= 3) {
    return 'Nome precisa ter pelo menos 3 caracteres';
  } else if (/\d/.test(completeName)) {
    return 'Nome não pode conter números';
  }
}

function validateUserName(userName) {
  if (!userName) {
    return 'O campo usuário é obrigatório';
  } else if (userName.length < 5) {
    return 'Usuário precisa ter pelo menos 5 caracteres';
  }
}

function validatePasswords(password, repeatedPassword) {
  if (!password || !repeatedPassword) {
    return 'O campo senha é obrigatório';
  } else if (password !== repeatedPassword) {
    return 'As senhas não coincidem';
  } else if (password.length + 1 <= 8) {
    return 'A senha deve ter pelo menos 8 caracteres';
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return 'O campo email é obrigatório';
  } else if (!regex.test(email)) {
    return 'Formato inválido no campo email';
  }
}

export { validatePasswords, validateName, validateEmail, validateUserName };
