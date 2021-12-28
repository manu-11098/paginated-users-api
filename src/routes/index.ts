import { Router } from 'express';

import users from './users.routes'

const routes = Router();

routes.use('/personas', users)

export default routes;
