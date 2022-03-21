process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import ItemsRoute from '@routes/items.route';


validateEnv();

const app = new App(
  [
    new IndexRoute(), 
    new UsersRoute(), 
    new ItemsRoute()
  ]);

app.listen();
