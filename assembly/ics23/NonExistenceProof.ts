// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ExistenceProof } from "./ExistenceProof";

export class NonExistenceProof {
  static encode(message: NonExistenceProof, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    const left = message.left;
    if (left !== null) {
      writer.uint32(18);
      writer.fork();
      ExistenceProof.encode(left, writer);
      writer.ldelim();
    }

    const right = message.right;
    if (right !== null) {
      writer.uint32(26);
      writer.fork();
      ExistenceProof.encode(right, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): NonExistenceProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NonExistenceProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.left = ExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.right = ExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  left: ExistenceProof | null;
  right: ExistenceProof | null;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    left: ExistenceProof | null = null,
    right: ExistenceProof | null = null
  ) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

export function encodeNonExistenceProof(
  message: NonExistenceProof
): Uint8Array {
  return Protobuf.encode(message, NonExistenceProof.encode);
}

export function decodeNonExistenceProof(buffer: Uint8Array): NonExistenceProof {
  return Protobuf.decode<NonExistenceProof>(buffer, NonExistenceProof.decode);
}