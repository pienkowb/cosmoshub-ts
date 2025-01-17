// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class SendEnabled {
  static encode(message: SendEnabled, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.denom);

    writer.uint32(16);
    writer.bool(message.enabled);
  }

  static decode(reader: Reader, length: i32): SendEnabled {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SendEnabled();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  denom: string;
  enabled: bool;

  constructor(denom: string = "", enabled: bool = false) {
    this.denom = denom;
    this.enabled = enabled;
  }
}

export function encodeSendEnabled(message: SendEnabled): Uint8Array {
  return Protobuf.encode(message, SendEnabled.encode);
}

export function decodeSendEnabled(buffer: Uint8Array): SendEnabled {
  return Protobuf.decode<SendEnabled>(buffer, SendEnabled.decode);
}
