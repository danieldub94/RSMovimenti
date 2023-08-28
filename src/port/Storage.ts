import { Movimenti } from "../models/Movimenti";

export interface Storage{
    getAll(): Promise<any>;
    getById(id: any):Promise<any>;
    update(id: any, element: Movimenti):void;
    elimina(id: any):void;
    inserisci(element: Movimenti): Promise<any>;
}