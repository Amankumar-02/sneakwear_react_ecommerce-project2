import config from "../config/config";
import { Client, ID, Databases, Storage } from "appwrite";

export class Service{
    client = new Client()
    databases;
    storage;
    constructor(){
        this.client
            .setEndpoint(config.appwrite_url)
            .setProject(config.appwrite_project_id)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
   }
   //database1 // favourite
   async createFav({title, noItems, amount, img, newPrice,}){
    try {
        return await this.databases.createDocument(config.appwrite_database_id, config.appwrite_collection_id, ID.unique(),  {title, noItems, amount, img, newPrice,})
    } catch (error) {
        throw error;
    }
   }
   async deleteFav(id){
    try {
        await this.databases.deleteDocument(config.appwrite_database_id, config.appwrite_collection_id, id)
    } catch (error) {
        throw error;
    }
   }
   async listFav(){
    try {
        return await this.databases.listDocuments(config.appwrite_database_id, config.appwrite_collection_id)
        } catch (error) {
            throw error;
        }
    }


    //database2 // orders
   async createOrders({title, noItems, amount, img, newPrice,}){
    try {
        return await this.databases.createDocument(config.appwrite_database_id, config.appwrite_collection_id2, ID.unique(),  {title, noItems, amount, img, newPrice,})
    } catch (error) {
        throw error;
    }
   }
   async deleteOrders(id){
    try {
        await this.databases.deleteDocument(config.appwrite_database_id, config.appwrite_collection_id2, id)
    } catch (error) {
        throw error;
    }
   }
   async listOrders(){
    try {
        return await this.databases.listDocuments(config.appwrite_database_id, config.appwrite_collection_id2)
        } catch (error) {
            throw error;
        }
    }
}

const appwriteService = new Service();
export default appwriteService;