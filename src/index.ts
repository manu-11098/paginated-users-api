import * as express from 'express';
import routes from './routes/index';
import "reflect-metadata";
import * as cors from 'cors'

const PORT = process.env.PORT || 3000;

class Server {

   private app: express.Application;

   constructor() {
      this.app = express();
      this.app.use(cors())
      this.app.set('port', process.env.PORT || 3000);
      this.app.use(express.urlencoded({ extended: true }))
      this.app.use(express.json())
      this.app.use('/', routes);


   }

   public start() {
      this.app.listen(PORT, () => {
         console.log('Server started on port: ' + PORT)
      })
   }

}

const server = new Server();
server.start()
