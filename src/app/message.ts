
export interface Message {
  id: bigint,
  theme: string,
  body: string,
  date: string,
  read: boolean,
  deletedBySender: boolean,
  deletedByReceiver: boolean
}
