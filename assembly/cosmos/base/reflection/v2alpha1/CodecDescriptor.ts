// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { InterfaceDescriptor } from "./InterfaceDescriptor";

export class CodecDescriptor {
  static encode(message: CodecDescriptor, writer: Writer): void {
    const interfaces = message.interfaces;
    for (let i: i32 = 0; i < interfaces.length; ++i) {
      writer.uint32(10);
      writer.fork();
      InterfaceDescriptor.encode(interfaces[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CodecDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CodecDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(
            InterfaceDescriptor.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  interfaces: Array<InterfaceDescriptor>;

  constructor(interfaces: Array<InterfaceDescriptor> = []) {
    this.interfaces = interfaces;
  }
}

export function encodeCodecDescriptor(message: CodecDescriptor): Uint8Array {
  return Protobuf.encode(message, CodecDescriptor.encode);
}

export function decodeCodecDescriptor(buffer: Uint8Array): CodecDescriptor {
  return Protobuf.decode<CodecDescriptor>(buffer, CodecDescriptor.decode);
}
