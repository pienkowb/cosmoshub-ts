// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class MerkleRoot {
  static encode(message: MerkleRoot, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.hash);
  }

  static decode(reader: Reader, length: i32): MerkleRoot {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MerkleRoot();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: Uint8Array;

  constructor(hash: Uint8Array = new Uint8Array(0)) {
    this.hash = hash;
  }
}

export function encodeMerkleRoot(message: MerkleRoot): Uint8Array {
  return Protobuf.encode(message, MerkleRoot.encode);
}

export function decodeMerkleRoot(buffer: Uint8Array): MerkleRoot {
  return Protobuf.decode<MerkleRoot>(buffer, MerkleRoot.decode);
}
