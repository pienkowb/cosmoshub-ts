// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Any } from "../../../../google/protobuf/Any";

export class MsgUpgradeClient {
  static encode(message: MsgUpgradeClient, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.clientId);

    const clientState = message.clientState;
    if (clientState !== null) {
      writer.uint32(18);
      writer.fork();
      Any.encode(clientState, writer);
      writer.ldelim();
    }

    const consensusState = message.consensusState;
    if (consensusState !== null) {
      writer.uint32(26);
      writer.fork();
      Any.encode(consensusState, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.bytes(message.proofUpgradeClient);

    writer.uint32(42);
    writer.bytes(message.proofUpgradeConsensusState);

    writer.uint32(50);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgUpgradeClient {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpgradeClient();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;

        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
          break;

        case 6:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  clientId: string;
  clientState: Any | null;
  consensusState: Any | null;
  proofUpgradeClient: Uint8Array;
  proofUpgradeConsensusState: Uint8Array;
  signer: string;

  constructor(
    clientId: string = "",
    clientState: Any | null = null,
    consensusState: Any | null = null,
    proofUpgradeClient: Uint8Array = new Uint8Array(0),
    proofUpgradeConsensusState: Uint8Array = new Uint8Array(0),
    signer: string = ""
  ) {
    this.clientId = clientId;
    this.clientState = clientState;
    this.consensusState = consensusState;
    this.proofUpgradeClient = proofUpgradeClient;
    this.proofUpgradeConsensusState = proofUpgradeConsensusState;
    this.signer = signer;
  }
}

export function encodeMsgUpgradeClient(message: MsgUpgradeClient): Uint8Array {
  return Protobuf.encode(message, MsgUpgradeClient.encode);
}

export function decodeMsgUpgradeClient(buffer: Uint8Array): MsgUpgradeClient {
  return Protobuf.decode<MsgUpgradeClient>(buffer, MsgUpgradeClient.decode);
}
