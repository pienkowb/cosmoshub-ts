import { Writer, Reader, Protobuf } from "as-proto";

export class Any {
  static encode(message: Any, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.type_url);

    writer.uint32(18);
    writer.bytes(message.value);
  }

  static decode(reader: Reader, length: i32): Any {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Any();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type_url = reader.string();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  type_url: string;
  value: Uint8Array;

  constructor(type_url: string = "", value: Uint8Array = new Uint8Array(0)) {
    this.type_url = type_url;
    this.value = value;
  }
}

export function decodeAny(a: Uint8Array): Any {
  return Protobuf.decode<Any>(a, Any.decode);
}
