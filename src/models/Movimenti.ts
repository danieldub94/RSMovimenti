export class Movimenti {
    _id:any;
    dataMovimento: string;
    dataContabile: string;
    codiceConto: string;
    tipoMovimento: string;
    importo:number;

    constructor(_id:any, dataMovimento:string, dataContabile:string, codiceConto:string,tipoMovimento:string,importo:number){
        this._id=_id;
        this.dataMovimento=dataMovimento;
        this.dataContabile=dataContabile;
        this.codiceConto=codiceConto;
        this.tipoMovimento=tipoMovimento;
        this.importo=importo
    }
}