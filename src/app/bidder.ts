import {User} from "./user";
import {Bids} from "./bid";

export interface Bidder {
  id: BigInt,
  rating: BigInt,
  country: string,
  location: string,
  user: User,
  bids: Bids[],
}
