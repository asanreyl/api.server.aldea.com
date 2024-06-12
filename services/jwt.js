const jwt = requre('jsonwebtoken');

const SECRET_KEY ="tA7?B%w{2GDmq=0P*95c"

function createToken(user, expiresIn) {

  const { id, email } = user; 
  const payload = {id, email}; 

  return jwt.sign(payload, SECRET_KEY, { expiresIn }); 

}

function decodeToken(token){
  return jwt.decode(token, SECRET_KEY); 
}

module.exports = {
  createToken, decodeToken
}