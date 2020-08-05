import {NodeType, ProtocolType} from '@renderer/types/api';
import Account from './Account';
import Bank from './Bank';
import Validator from './Validator';

export {Account, Bank, Validator};

export interface AddressData {
  ip_address: string;
  port: number | null;
  protocol: ProtocolType;
}

export interface NodeIdentifier {
  node_identifier: string;
}

export type NodeAddressData = AddressData & NodeIdentifier;

export interface AppNodeAddressData extends NodeAddressData {
  nickname: string;
}

export interface NetworkNode extends NodeAddressData {
  account_number: string;
  default_transaction_fee: string;
  node_type: NodeType;
  version: string;
}

export interface NetworkValidator extends NetworkNode {
  root_account_file: string;
  root_account_file_hash: string;
  seed_block_identifier: string;
  daily_confirmation_rate: string | null;
}

export interface BankConfig extends NetworkNode {
  node_type: NodeType.bank;
  primary_validator: PrimaryValidatorConfig;
}

export interface PrimaryValidatorConfig extends NetworkValidator {
  node_type: NodeType.primaryValidator;
}