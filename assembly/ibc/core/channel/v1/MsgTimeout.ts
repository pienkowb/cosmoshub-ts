// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Packet } from "./Packet";
import { Height } from "../../client/v1/Height";

export class MsgTimeout {
  static encode(message: MsgTimeout, writer: Writer): void {
    const packet = message.packet;
    if (packet !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.proofUnreceived);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(26);
      writer.fork();
      Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.uint64(message.nextSequenceRecv);

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgTimeout {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeout();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proofUnreceived = reader.bytes();
          break;

        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.nextSequenceRecv = reader.uint64();
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  proofUnreceived: Uint8Array;
  proofHeight: Height | null;
  nextSequenceRecv: u64;
  signer: string;

  constructor(
    packet: Packet | null = null,
    proofUnreceived: Uint8Array = new Uint8Array(0),
    proofHeight: Height | null = null,
    nextSequenceRecv: u64 = 0,
    signer: string = ""
  ) {
    this.packet = packet;
    this.proofUnreceived = proofUnreceived;
    this.proofHeight = proofHeight;
    this.nextSequenceRecv = nextSequenceRecv;
    this.signer = signer;
  }
}

export function encodeMsgTimeout(message: MsgTimeout): Uint8Array {
  return Protobuf.encode(message, MsgTimeout.encode);
}

export function decodeMsgTimeout(buffer: Uint8Array): MsgTimeout {
  return Protobuf.decode<MsgTimeout>(buffer, MsgTimeout.decode);
}
