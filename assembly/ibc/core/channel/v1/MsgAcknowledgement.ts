// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Packet } from "./Packet";
import { Height } from "../../client/v1/Height";

export class MsgAcknowledgement {
  static encode(message: MsgAcknowledgement, writer: Writer): void {
    const packet = message.packet;
    if (packet !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.acknowledgement);

    writer.uint32(26);
    writer.bytes(message.proofAcked);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(34);
      writer.fork();
      Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgAcknowledgement {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAcknowledgement();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.acknowledgement = reader.bytes();
          break;

        case 3:
          message.proofAcked = reader.bytes();
          break;

        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
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
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight: Height | null;
  signer: string;

  constructor(
    packet: Packet | null = null,
    acknowledgement: Uint8Array = new Uint8Array(0),
    proofAcked: Uint8Array = new Uint8Array(0),
    proofHeight: Height | null = null,
    signer: string = ""
  ) {
    this.packet = packet;
    this.acknowledgement = acknowledgement;
    this.proofAcked = proofAcked;
    this.proofHeight = proofHeight;
    this.signer = signer;
  }
}

export function encodeMsgAcknowledgement(
  message: MsgAcknowledgement
): Uint8Array {
  return Protobuf.encode(message, MsgAcknowledgement.encode);
}

export function decodeMsgAcknowledgement(
  buffer: Uint8Array
): MsgAcknowledgement {
  return Protobuf.decode<MsgAcknowledgement>(buffer, MsgAcknowledgement.decode);
}
