import {Seller} from "./seller";
import {Bids} from "./bid";

export interface Items {
  id: bigint,
  name: string,
  category: string,
  currently: bigint,
  buyPrice: bigint,
  firstBid: bigint,
  numberOfBids: bigint,
  bids: Bids[],
  //bids: [],
  location: string,
  country: string,
  started: string,
  ends: string,
  seller: Seller,
  description: string
}
