// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class Snapshot {
  static encode(message: Snapshot, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.height);

    writer.uint32(16);
    writer.uint32(message.format);

    writer.uint32(24);
    writer.uint32(message.chunks);

    writer.uint32(34);
    writer.bytes(message.hash);

    writer.uint32(42);
    writer.bytes(message.metadata);
  }

  static decode(reader: Reader, length: i32): Snapshot {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Snapshot();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.chunks = reader.uint32();
          break;

        case 4:
          message.hash = reader.bytes();
          break;

        case 5:
          message.metadata = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  height: u64;
  format: u32;
  chunks: u32;
  hash: Uint8Array;
  metadata: Uint8Array;

  constructor(
    height: u64 = 0,
    format: u32 = 0,
    chunks: u32 = 0,
    hash: Uint8Array = new Uint8Array(0),
    metadata: Uint8Array = new Uint8Array(0)
  ) {
    this.height = height;
    this.format = format;
    this.chunks = chunks;
    this.hash = hash;
    this.metadata = metadata;
  }
}

export function encodeSnapshot(message: Snapshot): Uint8Array {
  return Protobuf.encode(message, Snapshot.encode);
}

export function decodeSnapshot(buffer: Uint8Array): Snapshot {
  return Protobuf.decode<Snapshot>(buffer, Snapshot.decode);
}
