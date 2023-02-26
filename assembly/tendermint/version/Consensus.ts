// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class Consensus {
  static encode(message: Consensus, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.block);

    writer.uint32(16);
    writer.uint64(message.app);
  }

  static decode(reader: Reader, length: i32): Consensus {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Consensus();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64();
          break;

        case 2:
          message.app = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  block: u64;
  app: u64;

  constructor(block: u64 = 0, app: u64 = 0) {
    this.block = block;
    this.app = app;
  }
}

export function encodeConsensus(message: Consensus): Uint8Array {
  return Protobuf.encode(message, Consensus.encode);
}

export function decodeConsensus(buffer: Uint8Array): Consensus {
  return Protobuf.decode<Consensus>(buffer, Consensus.decode);
}