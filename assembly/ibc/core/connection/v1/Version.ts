// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class Version {
  static encode(message: Version, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.identifier);

    const features = message.features;
    if (features.length !== 0) {
      for (let i: i32 = 0; i < features.length; ++i) {
        writer.uint32(18);
        writer.string(features[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): Version {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Version();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        case 2:
          message.features.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  identifier: string;
  features: Array<string>;

  constructor(identifier: string = "", features: Array<string> = []) {
    this.identifier = identifier;
    this.features = features;
  }
}

export function encodeVersion(message: Version): Uint8Array {
  return Protobuf.encode(message, Version.encode);
}

export function decodeVersion(buffer: Uint8Array): Version {
  return Protobuf.decode<Version>(buffer, Version.decode);
}
