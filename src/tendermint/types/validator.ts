import { Writer, Reader, Protobuf } from "as-proto";
import { crypto } from "../crypto";

export class ValidatorSet {
  static encode(message: ValidatorSet, writer: Writer): void {
    const validators = message.validators;
    for (let i = 0; i < validators.length; ++i) {
      writer.uint32(10);
      writer.fork();
      Validator.encode(validators[i], writer);
      writer.ldelim();
    }

    const proposer = message.proposer;
    if (proposer !== null) {
      writer.uint32(18);
      writer.fork();
      Validator.encode(proposer, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int64(message.total_voting_power);
  }

  static decode(reader: Reader, length: i32): ValidatorSet {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ValidatorSet();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;

        case 3:
          message.total_voting_power = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  validators: Array<Validator>;
  proposer: Validator | null;
  total_voting_power: i64;

  constructor(validators: Array<Validator> = [], proposer: Validator | null = null, total_voting_power: i64 = 0) {
    this.validators = validators;
    this.proposer = proposer;
    this.total_voting_power = total_voting_power;
  }
}

export function decodeValidatorSet(a: Uint8Array): ValidatorSet {
  return Protobuf.decode<ValidatorSet>(a, ValidatorSet.decode);
}

export class Validator {
  static encode(message: Validator, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.address);

    const pub_key = message.pub_key;
    if (pub_key !== null) {
      writer.uint32(18);
      writer.fork();
      crypto.PublicKey.encode(pub_key, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int64(message.voting_power);

    writer.uint32(32);
    writer.int64(message.proposer_priority);
  }

  static decode(reader: Reader, length: i32): Validator {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Validator();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.pub_key = crypto.PublicKey.decode(reader, reader.uint32());
          break;

        case 3:
          message.voting_power = reader.int64();
          break;

        case 4:
          message.proposer_priority = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: Uint8Array;
  pub_key: crypto.PublicKey | null;
  voting_power: i64;
  proposer_priority: i64;

  constructor(
    address: Uint8Array = new Uint8Array(0),
    pub_key: crypto.PublicKey | null = null,
    voting_power: i64 = 0,
    proposer_priority: i64 = 0
  ) {
    this.address = address;
    this.pub_key = pub_key;
    this.voting_power = voting_power;
    this.proposer_priority = proposer_priority;
  }
}

export function decodeValidator(a: Uint8Array): Validator {
  return Protobuf.decode<Validator>(a, Validator.decode);
}

export class SimpleValidator {
  static encode(message: SimpleValidator, writer: Writer): void {
    const pub_key = message.pub_key;
    if (pub_key !== null) {
      writer.uint32(10);
      writer.fork();
      crypto.PublicKey.encode(pub_key, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.int64(message.voting_power);
  }

  static decode(reader: Reader, length: i32): SimpleValidator {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SimpleValidator();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = crypto.PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.voting_power = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pub_key: crypto.PublicKey | null;
  voting_power: i64;

  constructor(pub_key: crypto.PublicKey | null = null, voting_power: i64 = 0) {
    this.pub_key = pub_key;
    this.voting_power = voting_power;
  }
}

export function decodeSimpleValidator(a: Uint8Array): SimpleValidator {
  return Protobuf.decode<SimpleValidator>(a, SimpleValidator.decode);
}
