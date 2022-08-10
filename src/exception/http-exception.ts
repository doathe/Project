import { string } from "joi";

export default class HttpException extends Error{
    
    status: number;
    message: string;

    constructor(status: number, message: string){
      super();
      this.status = status;
      this.message = message;
    }
}
    export class userNotFound extends HttpException{

      constructor(message?:string){
        
        message = message || 'Not found';
        super(404,message);
      }
    }

    export class userAlreadyExist extends HttpException{

      constructor(message?:string){
        
        message = message || 'User already exist.';
        super(405,message); //405 Method Not Allowed
      }
    }

    export class processError extends HttpException{

      constructor(message?:string){
        
        message = message || 'Something went wrong.';
        super(400,message); //400 Bad Request

      }
    }