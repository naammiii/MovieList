
import Cookies from 'universal-cookie';

const bcrypt = require('bcrypt');
const cookies = new Cookies();

const pass = cookies.get('temppass');
const dbpass = cookies.get('userpass');

export default async function handle(req, res) {
var result;
  if(await bcrypt.compare(pass, dbpass))result = true;
  else result = false;
  res.json(result);
}