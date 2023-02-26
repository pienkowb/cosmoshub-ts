// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ResponseResultType } from "./ResponseResultType";

@unmanaged
export class MsgTimeoutResponse {
  static encode(message: MsgTimeoutResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgTimeoutResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeoutResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function encodeMsgTimeoutResponse(
  message: MsgTimeoutResponse
): Uint8Array {
  return Protobuf.encode(message, MsgTimeoutResponse.encode);
}

export function decodeMsgTimeoutResponse(
  buffer: Uint8Array
): MsgTimeoutResponse {
  return Protobuf.decode<MsgTimeoutResponse>(buffer, MsgTimeoutResponse.decode);
}