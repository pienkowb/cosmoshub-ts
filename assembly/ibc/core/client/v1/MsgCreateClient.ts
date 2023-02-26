// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Any } from "../../../../google/protobuf/Any";

export class MsgCreateClient {
  static encode(message: MsgCreateClient, writer: Writer): void {
    const clientState = message.clientState;
    if (clientState !== null) {
      writer.uint32(10);
      writer.fork();
      Any.encode(clientState, writer);
      writer.ldelim();
    }

    const consensusState = message.consensusState;
    if (consensusState !== null) {
      writer.uint32(18);
      writer.fork();
      Any.encode(consensusState, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgCreateClient {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateClient();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  clientState: Any | null;
  consensusState: Any | null;
  signer: string;

  constructor(
    clientState: Any | null = null,
    consensusState: Any | null = null,
    signer: string = ""
  ) {
    this.clientState = clientState;
    this.consensusState = consensusState;
    this.signer = signer;
  }
}

export function encodeMsgCreateClient(message: MsgCreateClient): Uint8Array {
  return Protobuf.encode(message, MsgCreateClient.encode);
}

export function decodeMsgCreateClient(buffer: Uint8Array): MsgCreateClient {
  return Protobuf.decode<MsgCreateClient>(buffer, MsgCreateClient.decode);
}
