// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Duration } from "../../../google/protobuf/Duration";

export class Params {
  static encode(message: Params, writer: Writer): void {
    const unbondingTime = message.unbondingTime;
    if (unbondingTime !== null) {
      writer.uint32(10);
      writer.fork();
      Duration.encode(unbondingTime, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.uint32(message.maxValidators);

    writer.uint32(24);
    writer.uint32(message.maxEntries);

    writer.uint32(32);
    writer.uint32(message.historicalEntries);

    writer.uint32(42);
    writer.string(message.bondDenom);
  }

  static decode(reader: Reader, length: i32): Params {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Params();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.maxValidators = reader.uint32();
          break;

        case 3:
          message.maxEntries = reader.uint32();
          break;

        case 4:
          message.historicalEntries = reader.uint32();
          break;

        case 5:
          message.bondDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  unbondingTime: Duration | null;
  maxValidators: u32;
  maxEntries: u32;
  historicalEntries: u32;
  bondDenom: string;

  constructor(
    unbondingTime: Duration | null = null,
    maxValidators: u32 = 0,
    maxEntries: u32 = 0,
    historicalEntries: u32 = 0,
    bondDenom: string = ""
  ) {
    this.unbondingTime = unbondingTime;
    this.maxValidators = maxValidators;
    this.maxEntries = maxEntries;
    this.historicalEntries = historicalEntries;
    this.bondDenom = bondDenom;
  }
}

export function encodeParams(message: Params): Uint8Array {
  return Protobuf.encode(message, Params.encode);
}

export function decodeParams(buffer: Uint8Array): Params {
  return Protobuf.decode<Params>(buffer, Params.decode);
}