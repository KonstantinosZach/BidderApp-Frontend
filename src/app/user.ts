import {Message} from "./message";

export interface User {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  postNumber: string;
  afm: string;
  admin: boolean;
  accepted: boolean;
  sent: Message[],
  received: Message[]
}
