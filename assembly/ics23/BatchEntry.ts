// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ExistenceProof } from "./ExistenceProof";
import { NonExistenceProof } from "./NonExistenceProof";

export class BatchEntry {
  static encode(message: BatchEntry, writer: Writer): void {
    const exist = message.exist;
    if (exist !== null) {
      writer.uint32(10);
      writer.fork();
      ExistenceProof.encode(exist, writer);
      writer.ldelim();
    }

    const nonexist = message.nonexist;
    if (nonexist !== null) {
      writer.uint32(18);
      writer.fork();
      NonExistenceProof.encode(nonexist, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): BatchEntry {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BatchEntry();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  exist: ExistenceProof | null;
  nonexist: NonExistenceProof | null;

  constructor(
    exist: ExistenceProof | null = null,
    nonexist: NonExistenceProof | null = null
  ) {
    this.exist = exist;
    this.nonexist = nonexist;
  }
}

export function encodeBatchEntry(message: BatchEntry): Uint8Array {
  return Protobuf.encode(message, BatchEntry.encode);
}

export function decodeBatchEntry(buffer: Uint8Array): BatchEntry {
  return Protobuf.decode<BatchEntry>(buffer, BatchEntry.decode);
}