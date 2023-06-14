
const bcrypt = require('bcrypt');

export default async function handle(req, response) {
  var bool: boolean;
  const { dbpass, userpass } = req.body;
  await bcrypt.compare(dbpass, userpass, function (err, match) {
    if (err) {
      console.log(err);
    }
    if (match) {
      return response.json({ success: true, message: 'passwords do match' });
    } else {
      return response.json({ success: false, message: 'passwords do not match' });
    }
  });
}