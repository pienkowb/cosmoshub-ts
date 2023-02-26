// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Version } from "./Version";
import { Counterparty } from "./Counterparty";
import { State } from "./State";

export class IdentifiedConnection {
  static encode(message: IdentifiedConnection, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.id);

    writer.uint32(18);
    writer.string(message.clientId);

    const versions = message.versions;
    for (let i: i32 = 0; i < versions.length; ++i) {
      writer.uint32(26);
      writer.fork();
      Version.encode(versions[i], writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.int32(message.state);

    const counterparty = message.counterparty;
    if (counterparty !== null) {
      writer.uint32(42);
      writer.fork();
      Counterparty.encode(counterparty, writer);
      writer.ldelim();
    }

    writer.uint32(48);
    writer.uint64(message.delayPeriod);
  }

  static decode(reader: Reader, length: i32): IdentifiedConnection {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new IdentifiedConnection();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.clientId = reader.string();
          break;

        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;

        case 4:
          message.state = reader.int32();
          break;

        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 6:
          message.delayPeriod = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id: string;
  clientId: string;
  versions: Array<Version>;
  state: State;
  counterparty: Counterparty | null;
  delayPeriod: u64;

  constructor(
    id: string = "",
    clientId: string = "",
    versions: Array<Version> = [],
    state: State = 0,
    counterparty: Counterparty | null = null,
    delayPeriod: u64 = 0
  ) {
    this.id = id;
    this.clientId = clientId;
    this.versions = versions;
    this.state = state;
    this.counterparty = counterparty;
    this.delayPeriod = delayPeriod;
  }
}

export function encodeIdentifiedConnection(
  message: IdentifiedConnection
): Uint8Array {
  return Protobuf.encode(message, IdentifiedConnection.encode);
}

export function decodeIdentifiedConnection(
  buffer: Uint8Array
): IdentifiedConnection {
  return Protobuf.decode<IdentifiedConnection>(
    buffer,
    IdentifiedConnection.decode
  );
}
