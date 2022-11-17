export interface IndexerAssetHolding {
  amount: number;
  ['asset-id']: number;
  deleted: boolean;
  ['is-frozen']: boolean;
  ['opted-in-at-round']: number;
}
