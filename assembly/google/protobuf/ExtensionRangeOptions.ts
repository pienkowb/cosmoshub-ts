// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { UninterpretedOption } from "./UninterpretedOption";

export class ExtensionRangeOptions {
  static encode(message: ExtensionRangeOptions, writer: Writer): void {
    const uninterpretedOption = message.uninterpretedOption;
    for (let i: i32 = 0; i < uninterpretedOption.length; ++i) {
      writer.uint32(7994);
      writer.fork();
      UninterpretedOption.encode(uninterpretedOption[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ExtensionRangeOptions {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ExtensionRangeOptions();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpretedOption.push(
            UninterpretedOption.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  uninterpretedOption: Array<UninterpretedOption>;

  constructor(uninterpretedOption: Array<UninterpretedOption> = []) {
    this.uninterpretedOption = uninterpretedOption;
  }
}

export function encodeExtensionRangeOptions(
  message: ExtensionRangeOptions
): Uint8Array {
  return Protobuf.encode(message, ExtensionRangeOptions.encode);
}

export function decodeExtensionRangeOptions(
  buffer: Uint8Array
): ExtensionRangeOptions {
  return Protobuf.decode<ExtensionRangeOptions>(
    buffer,
    ExtensionRangeOptions.decode
  );
}