import {Itodo} from './todos.interface';
export interface ITodosService{
    findall():Promise<Itodo[]>;
    findById(ID:number):Promise<Itodo|null>;
    findOne(options:object):Promise<Itodo|null>;
    create(todos:Itodo):Promise<Itodo>;
    update(ID:number,newvalue:Itodo):Promise<Itodo|null>;
    delete(ID:number):Promise<String>;

}