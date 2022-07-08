import {Bidder} from "./bidder";
import {Items} from "./item";

export interface Bids {
  id: bigint,
  bidder: Bidder,
  item: Items,
  time: string,
  amount: number,
}
