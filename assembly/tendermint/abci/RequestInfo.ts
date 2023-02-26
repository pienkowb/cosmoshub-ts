// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class RequestInfo {
  static encode(message: RequestInfo, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.version);

    writer.uint32(16);
    writer.uint64(message.blockVersion);

    writer.uint32(24);
    writer.uint64(message.p2pVersion);
  }

  static decode(reader: Reader, length: i32): RequestInfo {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RequestInfo();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;

        case 2:
          message.blockVersion = reader.uint64();
          break;

        case 3:
          message.p2pVersion = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  version: string;
  blockVersion: u64;
  p2pVersion: u64;

  constructor(
    version: string = "",
    blockVersion: u64 = 0,
    p2pVersion: u64 = 0
  ) {
    this.version = version;
    this.blockVersion = blockVersion;
    this.p2pVersion = p2pVersion;
  }
}

export function encodeRequestInfo(message: RequestInfo): Uint8Array {
  return Protobuf.encode(message, RequestInfo.encode);
}

export function decodeRequestInfo(buffer: Uint8Array): RequestInfo {
  return Protobuf.decode<RequestInfo>(buffer, RequestInfo.decode);
}