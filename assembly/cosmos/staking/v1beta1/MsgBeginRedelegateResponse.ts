// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Timestamp } from "../../../google/protobuf/Timestamp";

@unmanaged
export class MsgBeginRedelegateResponse {
  static encode(message: MsgBeginRedelegateResponse, writer: Writer): void {
    const completionTime = message.completionTime;
    if (completionTime !== null) {
      writer.uint32(10);
      writer.fork();
      Timestamp.encode(completionTime, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgBeginRedelegateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgBeginRedelegateResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  completionTime: Timestamp | null;

  constructor(completionTime: Timestamp | null = null) {
    this.completionTime = completionTime;
  }
}

export function encodeMsgBeginRedelegateResponse(
  message: MsgBeginRedelegateResponse
): Uint8Array {
  return Protobuf.encode(message, MsgBeginRedelegateResponse.encode);
}

export function decodeMsgBeginRedelegateResponse(
  buffer: Uint8Array
): MsgBeginRedelegateResponse {
  return Protobuf.decode<MsgBeginRedelegateResponse>(
    buffer,
    MsgBeginRedelegateResponse.decode
  );
}
