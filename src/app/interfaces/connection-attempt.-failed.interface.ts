import { WalletErrorCode } from '../services/integrated-wallets/wallet-error';

export interface ConnectionAttemptFailed {
  errorCode: WalletErrorCode;
  errorMessage: string;
  logs: unknown;
}

export const instanceOfConnectionAttemptFailed = (obj: any): obj is ConnectionAttemptFailed =>
  'errorCode' in obj;
