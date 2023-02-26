// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CustomHttpPattern {
  static encode(message: CustomHttpPattern, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.kind);

    writer.uint32(18);
    writer.string(message.path);
  }

  static decode(reader: Reader, length: i32): CustomHttpPattern {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CustomHttpPattern();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;

        case 2:
          message.path = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  kind: string;
  path: string;

  constructor(kind: string = "", path: string = "") {
    this.kind = kind;
    this.path = path;
  }
}

export function encodeCustomHttpPattern(
  message: CustomHttpPattern
): Uint8Array {
  return Protobuf.encode(message, CustomHttpPattern.encode);
}

export function decodeCustomHttpPattern(buffer: Uint8Array): CustomHttpPattern {
  return Protobuf.decode<CustomHttpPattern>(buffer, CustomHttpPattern.decode);
}