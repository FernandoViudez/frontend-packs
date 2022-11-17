export interface Asset {
  total: number;
  decimals: number;
  deleted: boolean;
  index: number;
  clawback: string;
  creator: string;
  defaultFrozen: boolean;
  freeze: string;
  manager: string;
  metadataHash: string;
  name: string;
  reserve: string;
  unitName: string;
  url: string;
}
