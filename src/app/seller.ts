import {User} from "./user";
import {Items} from "./item";

export interface Seller {
  id: bigint;
  rating: number;
  items: Items[];
  users: User;
}
