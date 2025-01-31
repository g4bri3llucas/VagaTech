import { Socket } from "socket.io";

export const handleSocketConnection = (socket: Socket) => {
    console.log('Novo cliente conectado:', socket.id);

    // socket.broadcast.emit('')

    // Lida com a desconexão do cliente
    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
};import { Router, Response, Request } from 'express';

import { ESPController } from '../Controllers/ESPControler'
import { VacancyTypeController } from '../Controllers/VacancyTypeController';
import { VacancyController } from '../Controllers/VacancyController';
import { ClientController } from '../Controllers/ClientController';
import { VehicleController } from '../Controllers/VehicleController';

const espController = new ESPController;
const vacancyType = new VacancyTypeController;
const vacancy = new VacancyController;
const client = new ClientController;
const vehicle = new VehicleController;


const router = Router();

router.get("/ping", (req: Request, res: Response) => {
  console.log("Recebido");
  res.status(200).json({"success": true});
  return;
});




router.post("/detectedVehicle", espController.receive);

router.get("/vacancyType", vacancyType.read);
router.post("/vacancyType", vacancyType.create);
router.put("/vacancyType", vacancyType.update);
router.delete("/vacancyType", vacancyType.delete);

router.get("/vacancy", vacancy.read);
router.post("/vacancy", vacancy.create);
router.put("/vacancy", vacancy.update);
router.delete("/vacancy", vacancy.delete);

router.get("/client", client.read);
router.post("/client", client.create);
router.put("/client", client.update);
router.delete("/client", client.delete);

router.get("/vehicle", vehicle.read);
router.post("/vehicle", vehicle.create);
router.put("/vehicle", vehicle.update);
router.delete("/vehicle", vehicle.delete);



export { router };