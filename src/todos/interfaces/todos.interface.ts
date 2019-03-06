import {Document} from 'mongoose';

export interface Itodo extends Document{
    readonly text:String,
    readonly complete:Boolean
}