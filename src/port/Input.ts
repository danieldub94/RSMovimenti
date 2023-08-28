import { Movimenti } from "../models/Movimenti";

export interface Input{
    getAll(): Promise<any>;

    getById(id: any):Promise<any>;

    inserisci(element: Movimenti): Promise<any>;

    update(id: any, element: Movimenti):void;
    
    elimina(id: any):void;
}