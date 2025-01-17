// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ExtensionRangeOptions } from "../ExtensionRangeOptions";

export class ExtensionRange {
  static encode(message: ExtensionRange, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.start);

    writer.uint32(16);
    writer.int32(message.end);

    const options = message.options;
    if (options !== null) {
      writer.uint32(26);
      writer.fork();
      ExtensionRangeOptions.encode(options, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ExtensionRange {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ExtensionRange();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;

        case 2:
          message.end = reader.int32();
          break;

        case 3:
          message.options = ExtensionRangeOptions.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  start: i32;
  end: i32;
  options: ExtensionRangeOptions | null;

  constructor(
    start: i32 = 0,
    end: i32 = 0,
    options: ExtensionRangeOptions | null = null
  ) {
    this.start = start;
    this.end = end;
    this.options = options;
  }
}

export function encodeExtensionRange(message: ExtensionRange): Uint8Array {
  return Protobuf.encode(message, ExtensionRange.encode);
}

export function decodeExtensionRange(buffer: Uint8Array): ExtensionRange {
  return Protobuf.decode<ExtensionRange>(buffer, ExtensionRange.decode);
}
