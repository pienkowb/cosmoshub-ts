// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Event } from "./Event";

export class ResponseDeliverTx {
  static encode(message: ResponseDeliverTx, writer: Writer): void {
    writer.uint32(8);
    writer.uint32(message.code);

    writer.uint32(18);
    writer.bytes(message.data);

    writer.uint32(26);
    writer.string(message.log);

    writer.uint32(34);
    writer.string(message.info);

    writer.uint32(40);
    writer.int64(message.gasWanted);

    writer.uint32(48);
    writer.int64(message.gasUsed);

    const events = message.events;
    for (let i: i32 = 0; i < events.length; ++i) {
      writer.uint32(58);
      writer.fork();
      Event.encode(events[i], writer);
      writer.ldelim();
    }

    writer.uint32(66);
    writer.string(message.codespace);
  }

  static decode(reader: Reader, length: i32): ResponseDeliverTx {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ResponseDeliverTx();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.gasWanted = reader.int64();
          break;

        case 6:
          message.gasUsed = reader.int64();
          break;

        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        case 8:
          message.codespace = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code: u32;
  data: Uint8Array;
  log: string;
  info: string;
  gasWanted: i64;
  gasUsed: i64;
  events: Array<Event>;
  codespace: string;

  constructor(
    code: u32 = 0,
    data: Uint8Array = new Uint8Array(0),
    log: string = "",
    info: string = "",
    gasWanted: i64 = 0,
    gasUsed: i64 = 0,
    events: Array<Event> = [],
    codespace: string = ""
  ) {
    this.code = code;
    this.data = data;
    this.log = log;
    this.info = info;
    this.gasWanted = gasWanted;
    this.gasUsed = gasUsed;
    this.events = events;
    this.codespace = codespace;
  }
}

export function encodeResponseDeliverTx(
  message: ResponseDeliverTx
): Uint8Array {
  return Protobuf.encode(message, ResponseDeliverTx.encode);
}

export function decodeResponseDeliverTx(buffer: Uint8Array): ResponseDeliverTx {
  return Protobuf.decode<ResponseDeliverTx>(buffer, ResponseDeliverTx.decode);
}
