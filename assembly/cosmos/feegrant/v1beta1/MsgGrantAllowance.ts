// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Any } from "../../../google/protobuf/Any";

export class MsgGrantAllowance {
  static encode(message: MsgGrantAllowance, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.granter);

    writer.uint32(18);
    writer.string(message.grantee);

    const allowance = message.allowance;
    if (allowance !== null) {
      writer.uint32(26);
      writer.fork();
      Any.encode(allowance, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgGrantAllowance {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgGrantAllowance();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  granter: string;
  grantee: string;
  allowance: Any | null;

  constructor(
    granter: string = "",
    grantee: string = "",
    allowance: Any | null = null
  ) {
    this.granter = granter;
    this.grantee = grantee;
    this.allowance = allowance;
  }
}

export function encodeMsgGrantAllowance(
  message: MsgGrantAllowance
): Uint8Array {
  return Protobuf.encode(message, MsgGrantAllowance.encode);
}

export function decodeMsgGrantAllowance(buffer: Uint8Array): MsgGrantAllowance {
  return Protobuf.decode<MsgGrantAllowance>(buffer, MsgGrantAllowance.decode);
}
