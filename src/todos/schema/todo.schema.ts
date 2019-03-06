import * as mongoose from 'mongoose';

export const todoSchema=new mongoose.Schema({
    text:String,
    complete:Boolean
});