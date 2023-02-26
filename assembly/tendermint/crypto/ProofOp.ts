// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class ProofOp {
  static encode(message: ProofOp, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.type);

    writer.uint32(18);
    writer.bytes(message.key);

    writer.uint32(26);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): ProofOp {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ProofOp();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.key = reader.bytes();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  type: string;
  key: Uint8Array;
  data: Uint8Array;

  constructor(
    type: string = "",
    key: Uint8Array = new Uint8Array(0),
    data: Uint8Array = new Uint8Array(0)
  ) {
    this.type = type;
    this.key = key;
    this.data = data;
  }
}

export function encodeProofOp(message: ProofOp): Uint8Array {
  return Protobuf.encode(message, ProofOp.encode);
}

export function decodeProofOp(buffer: Uint8Array): ProofOp {
  return Protobuf.decode<ProofOp>(buffer, ProofOp.decode);
}