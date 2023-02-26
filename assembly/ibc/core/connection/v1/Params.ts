// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class Params {
  static encode(message: Params, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.maxExpectedTimePerBlock);
  }

  static decode(reader: Reader, length: i32): Params {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Params();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExpectedTimePerBlock = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  maxExpectedTimePerBlock: u64;

  constructor(maxExpectedTimePerBlock: u64 = 0) {
    this.maxExpectedTimePerBlock = maxExpectedTimePerBlock;
  }
}

export function encodeParams(message: Params): Uint8Array {
  return Protobuf.encode(message, Params.encode);
}

export function decodeParams(buffer: Uint8Array): Params {
  return Protobuf.decode<Params>(buffer, Params.decode);
}
