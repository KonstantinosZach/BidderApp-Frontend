import {User} from "./user";
import {Items} from "./item";

export interface Seller {
  id: bigint;
  rating: bigint;
  items: Items[];
  users: User;
}
