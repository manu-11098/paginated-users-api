import { Router } from 'express';
import UsersController from '../controller/users.controller';


const router = Router();

router.get('/:page/:per_page', UsersController.get);

export default router;
