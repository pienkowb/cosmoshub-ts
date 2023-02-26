// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Result } from "./ResponseApplySnapshotChunk/Result";

export class ResponseApplySnapshotChunk {
  static encode(message: ResponseApplySnapshotChunk, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);

    const refetchChunks = message.refetchChunks;
    if (refetchChunks.length !== 0) {
      for (let i: i32 = 0; i < refetchChunks.length; ++i) {
        writer.uint32(16);
        writer.uint32(refetchChunks[i]);
      }
    }

    const rejectSenders = message.rejectSenders;
    if (rejectSenders.length !== 0) {
      for (let i: i32 = 0; i < rejectSenders.length; ++i) {
        writer.uint32(26);
        writer.string(rejectSenders[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): ResponseApplySnapshotChunk {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ResponseApplySnapshotChunk();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        case 2:
          message.refetchChunks.push(reader.uint32());
          break;

        case 3:
          message.rejectSenders.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: Result;
  refetchChunks: Array<u32>;
  rejectSenders: Array<string>;

  constructor(
    result: Result = 0,
    refetchChunks: Array<u32> = [],
    rejectSenders: Array<string> = []
  ) {
    this.result = result;
    this.refetchChunks = refetchChunks;
    this.rejectSenders = rejectSenders;
  }
}

export function encodeResponseApplySnapshotChunk(
  message: ResponseApplySnapshotChunk
): Uint8Array {
  return Protobuf.encode(message, ResponseApplySnapshotChunk.encode);
}

export function decodeResponseApplySnapshotChunk(
  buffer: Uint8Array
): ResponseApplySnapshotChunk {
  return Protobuf.decode<ResponseApplySnapshotChunk>(
    buffer,
    ResponseApplySnapshotChunk.decode
  );
}
