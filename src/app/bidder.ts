import {User} from "./user";
import {Bids} from "./bid";

export interface Bidder {
  id: BigInt,
  rating: number,
  country: string,
  location: string,
  user: User,
  bids: Bids[],
}
