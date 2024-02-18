import { getClient } from "../db.js";
export default class Task2
{
    constructor(title, description, date, userId){
        this.title = title;
        this.description = description;
        this.date = date;
        this.userId = userId;
     }

    async save(){
        //save to db
        console.log("trying to save in db")
        let mongoCli = getClient();
        if(mongoCli){
            let db = mongoCli.db("mern-tasks");
            let insertResult = await db.collection("tasks").insertOne(this);
        }
        return this;
    }

    
}
