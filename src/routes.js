import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';
import authAdminMiddleware from './app/middlewares/authAdmin';

import UserController from './app/controllers/UserController';
import UsersController from './app/controllers/User';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ClassroomController from './app/controllers/Classroom';

const routes = new Router();
const upload = multer(multerConfig);
routes.get('/api/classrooms', ClassroomController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/api/users', UsersController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.use(authAdminMiddleware);

routes.get('/users', UserController.index);

export default routes;
