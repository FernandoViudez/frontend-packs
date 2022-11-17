import { AssetHolding } from '../interfaces/asset-holding.interface';
import { Asset } from '../interfaces/asset.interface';
import { IndexerAssetHolding } from '../interfaces/indexer/asset-holding.interface';
import { IndexerAsset } from '../interfaces/indexer/asset-interface';

export const zeroAddress = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ';

export const mapAsset = (asset: IndexerAsset): Asset => {
  return {
    index: asset.index,
    deleted: asset.deleted,
    total: asset.params.total,
    decimals: asset.params.decimals,
    clawback: asset.params.clawback,
    creator: asset.params.creator,
    defaultFrozen: asset.params['default-frozen'],
    freeze: asset.params.freeze,
    manager: asset.params.manager,
    metadataHash: asset.params['metadata-hash'],
    name: asset.params.name,
    reserve: asset.params.reserve,
    unitName: asset.params['unit-name'],
    url: asset.params.url,
  };
};

export const mapAssetHolding = (asset: IndexerAssetHolding): AssetHolding => {
  return {
    amount: asset.amount,
    assetId: asset['asset-id'],
    deleted: asset.deleted,
    isFrozen: asset['is-frozen'],
  };
};
