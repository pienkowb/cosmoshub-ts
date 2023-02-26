// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class Height {
  static encode(message: Height, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.revisionNumber);

    writer.uint32(16);
    writer.uint64(message.revisionHeight);
  }

  static decode(reader: Reader, length: i32): Height {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Height();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revisionNumber = reader.uint64();
          break;

        case 2:
          message.revisionHeight = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  revisionNumber: u64;
  revisionHeight: u64;

  constructor(revisionNumber: u64 = 0, revisionHeight: u64 = 0) {
    this.revisionNumber = revisionNumber;
    this.revisionHeight = revisionHeight;
  }
}

export function encodeHeight(message: Height): Uint8Array {
  return Protobuf.encode(message, Height.encode);
}

export function decodeHeight(buffer: Uint8Array): Height {
  return Protobuf.decode<Height>(buffer, Height.decode);
}
