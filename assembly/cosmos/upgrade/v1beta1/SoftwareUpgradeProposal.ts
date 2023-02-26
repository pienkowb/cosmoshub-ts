// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Plan } from "./Plan";

export class SoftwareUpgradeProposal {
  static encode(message: SoftwareUpgradeProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    const plan = message.plan;
    if (plan !== null) {
      writer.uint32(26);
      writer.fork();
      Plan.encode(plan, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SoftwareUpgradeProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SoftwareUpgradeProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  plan: Plan | null;

  constructor(
    title: string = "",
    description: string = "",
    plan: Plan | null = null
  ) {
    this.title = title;
    this.description = description;
    this.plan = plan;
  }
}

export function encodeSoftwareUpgradeProposal(
  message: SoftwareUpgradeProposal
): Uint8Array {
  return Protobuf.encode(message, SoftwareUpgradeProposal.encode);
}

export function decodeSoftwareUpgradeProposal(
  buffer: Uint8Array
): SoftwareUpgradeProposal {
  return Protobuf.decode<SoftwareUpgradeProposal>(
    buffer,
    SoftwareUpgradeProposal.decode
  );
}
