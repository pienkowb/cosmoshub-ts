// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class RequestLoadSnapshotChunk {
  static encode(message: RequestLoadSnapshotChunk, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.height);

    writer.uint32(16);
    writer.uint32(message.format);

    writer.uint32(24);
    writer.uint32(message.chunk);
  }

  static decode(reader: Reader, length: i32): RequestLoadSnapshotChunk {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RequestLoadSnapshotChunk();

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
          message.chunk = reader.uint32();
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
  chunk: u32;

  constructor(height: u64 = 0, format: u32 = 0, chunk: u32 = 0) {
    this.height = height;
    this.format = format;
    this.chunk = chunk;
  }
}

export function encodeRequestLoadSnapshotChunk(
  message: RequestLoadSnapshotChunk
): Uint8Array {
  return Protobuf.encode(message, RequestLoadSnapshotChunk.encode);
}

export function decodeRequestLoadSnapshotChunk(
  buffer: Uint8Array
): RequestLoadSnapshotChunk {
  return Protobuf.decode<RequestLoadSnapshotChunk>(
    buffer,
    RequestLoadSnapshotChunk.decode
  );
}
