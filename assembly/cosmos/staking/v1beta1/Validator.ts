// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Any } from "../../../google/protobuf/Any";
import { Description } from "./Description";
import { Timestamp } from "../../../google/protobuf/Timestamp";
import { Commission } from "./Commission";
import { BondStatus } from "./BondStatus";

export class Validator {
  static encode(message: Validator, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.operatorAddress);

    const consensusPubkey = message.consensusPubkey;
    if (consensusPubkey !== null) {
      writer.uint32(18);
      writer.fork();
      Any.encode(consensusPubkey, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.bool(message.jailed);

    writer.uint32(32);
    writer.int32(message.status);

    writer.uint32(42);
    writer.string(message.tokens);

    writer.uint32(50);
    writer.string(message.delegatorShares);

    const description = message.description;
    if (description !== null) {
      writer.uint32(58);
      writer.fork();
      Description.encode(description, writer);
      writer.ldelim();
    }

    writer.uint32(64);
    writer.int64(message.unbondingHeight);

    const unbondingTime = message.unbondingTime;
    if (unbondingTime !== null) {
      writer.uint32(74);
      writer.fork();
      Timestamp.encode(unbondingTime, writer);
      writer.ldelim();
    }

    const commission = message.commission;
    if (commission !== null) {
      writer.uint32(82);
      writer.fork();
      Commission.encode(commission, writer);
      writer.ldelim();
    }

    writer.uint32(90);
    writer.string(message.minSelfDelegation);
  }

  static decode(reader: Reader, length: i32): Validator {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Validator();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;

        case 2:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.jailed = reader.bool();
          break;

        case 4:
          message.status = reader.int32();
          break;

        case 5:
          message.tokens = reader.string();
          break;

        case 6:
          message.delegatorShares = reader.string();
          break;

        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;

        case 8:
          message.unbondingHeight = reader.int64();
          break;

        case 9:
          message.unbondingTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;

        case 11:
          message.minSelfDelegation = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  operatorAddress: string;
  consensusPubkey: Any | null;
  jailed: bool;
  status: BondStatus;
  tokens: string;
  delegatorShares: string;
  description: Description | null;
  unbondingHeight: i64;
  unbondingTime: Timestamp | null;
  commission: Commission | null;
  minSelfDelegation: string;

  constructor(
    operatorAddress: string = "",
    consensusPubkey: Any | null = null,
    jailed: bool = false,
    status: BondStatus = 0,
    tokens: string = "",
    delegatorShares: string = "",
    description: Description | null = null,
    unbondingHeight: i64 = 0,
    unbondingTime: Timestamp | null = null,
    commission: Commission | null = null,
    minSelfDelegation: string = ""
  ) {
    this.operatorAddress = operatorAddress;
    this.consensusPubkey = consensusPubkey;
    this.jailed = jailed;
    this.status = status;
    this.tokens = tokens;
    this.delegatorShares = delegatorShares;
    this.description = description;
    this.unbondingHeight = unbondingHeight;
    this.unbondingTime = unbondingTime;
    this.commission = commission;
    this.minSelfDelegation = minSelfDelegation;
  }
}

export function encodeValidator(message: Validator): Uint8Array {
  return Protobuf.encode(message, Validator.encode);
}

export function decodeValidator(buffer: Uint8Array): Validator {
  return Protobuf.decode<Validator>(buffer, Validator.decode);
}
