// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class ModuleVersion {
  static encode(message: ModuleVersion, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    writer.uint32(16);
    writer.uint64(message.version);
  }

  static decode(reader: Reader, length: i32): ModuleVersion {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ModuleVersion();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.version = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  version: u64;

  constructor(name: string = "", version: u64 = 0) {
    this.name = name;
    this.version = version;
  }
}

export function encodeModuleVersion(message: ModuleVersion): Uint8Array {
  return Protobuf.encode(message, ModuleVersion.encode);
}

export function decodeModuleVersion(buffer: Uint8Array): ModuleVersion {
  return Protobuf.decode<ModuleVersion>(buffer, ModuleVersion.decode);
}