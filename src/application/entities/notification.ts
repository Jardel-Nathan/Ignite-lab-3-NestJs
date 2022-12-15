import { randomUUID } from "crypto";
import { Replace } from "src/helpers/replace";
import { Content } from "./content";

export interface NotificationProps{
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}


export class Notification{
    private _id: string;
    private props:NotificationProps
    
    constructor(props: Replace<NotificationProps, {createdAt?: Date}>){
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date()
        }
    }

    public get id(): string{
        return this._id;
    }

    // getters and setters
    public set content(content: Content){
        this.props.content = content;
    }
    public get content(): Content{
        return this.props.content;
    }

    public set category(category: string){
        this.props.category = category;
    }
    public get category(){
        return this.props.category;
    }


    public set recipientId(recipientId: string){
        this.props.recipientId = recipientId;
    }
    public get recipientId(){
        return this.props.recipientId;
    }
 
    public set readAt(readAt: Date){
        this.props.readAt = readAt;
    }
    public get readAt(): Date | null | undefined{
        return this.props.readAt;
    }


    public get createdAt(){
        return this.props.createdAt;
    }




}