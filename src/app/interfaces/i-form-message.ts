export interface IFormMessage {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export interface IFormMessageRequest extends IFormMessage {
}
