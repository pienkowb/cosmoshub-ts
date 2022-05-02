import { Writer, Reader, Protobuf } from "as-proto";
import { commitment } from "../../commitment";

export class ConnectionEnd {
  static encode(message: ConnectionEnd, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    const versions = message.versions;
    for (let i = 0; i < versions.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Version.encode(versions[i], writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int32(message.state);

    const counterparty = message.counterparty;
    if (counterparty !== null) {
      writer.uint32(34);
      writer.fork();
      Counterparty.encode(counterparty, writer);
      writer.ldelim();
    }

    writer.uint32(40);
    writer.uint64(message.delay_period);
  }

  static decode(reader: Reader, length: i32): ConnectionEnd {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConnectionEnd();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;

        case 3:
          message.state = reader.int32();
          break;

        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delay_period = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  client_id: string;
  versions: Array<Version>;
  state: State;
  counterparty: Counterparty | null;
  delay_period: u64;

  constructor(
    client_id: string = "",
    versions: Array<Version> = [],
    state: State = 0,
    counterparty: Counterparty | null = null,
    delay_period: u64 = 0
  ) {
    this.client_id = client_id;
    this.versions = versions;
    this.state = state;
    this.counterparty = counterparty;
    this.delay_period = delay_period;
  }
}

export function decodeConnectionEnd(a: Uint8Array): ConnectionEnd {
  return Protobuf.decode<ConnectionEnd>(a, ConnectionEnd.decode);
}

export class IdentifiedConnection {
  static encode(message: IdentifiedConnection, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.id);

    writer.uint32(18);
    writer.string(message.client_id);

    const versions = message.versions;
    for (let i = 0; i < versions.length; ++i) {
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
    writer.uint64(message.delay_period);
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
          message.client_id = reader.string();
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
          message.delay_period = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id: string;
  client_id: string;
  versions: Array<Version>;
  state: State;
  counterparty: Counterparty | null;
  delay_period: u64;

  constructor(
    id: string = "",
    client_id: string = "",
    versions: Array<Version> = [],
    state: State = 0,
    counterparty: Counterparty | null = null,
    delay_period: u64 = 0
  ) {
    this.id = id;
    this.client_id = client_id;
    this.versions = versions;
    this.state = state;
    this.counterparty = counterparty;
    this.delay_period = delay_period;
  }
}

export function decodeIdentifiedConnection(a: Uint8Array): IdentifiedConnection {
  return Protobuf.decode<IdentifiedConnection>(a, IdentifiedConnection.decode);
}

export class Counterparty {
  static encode(message: Counterparty, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    writer.uint32(18);
    writer.string(message.connection_id);

    const prefix = message.prefix;
    if (prefix !== null) {
      writer.uint32(26);
      writer.fork();
      commitment.v1.MerklePrefix.encode(prefix, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Counterparty {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Counterparty();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.connection_id = reader.string();
          break;

        case 3:
          message.prefix = commitment.v1.MerklePrefix.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  client_id: string;
  connection_id: string;
  prefix: commitment.v1.MerklePrefix | null;

  constructor(client_id: string = "", connection_id: string = "", prefix: commitment.v1.MerklePrefix | null = null) {
    this.client_id = client_id;
    this.connection_id = connection_id;
    this.prefix = prefix;
  }
}

export function decodeCounterparty(a: Uint8Array): Counterparty {
  return Protobuf.decode<Counterparty>(a, Counterparty.decode);
}

export class ClientPaths {
  static encode(message: ClientPaths, writer: Writer): void {
    const paths = message.paths;
    if (paths.length !== 0) {
      for (let i = 0; i < paths.length; ++i) {
        writer.uint32(10);
        writer.string(paths[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): ClientPaths {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ClientPaths();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  paths: Array<string>;

  constructor(paths: Array<string> = []) {
    this.paths = paths;
  }
}

export function decodeClientPaths(a: Uint8Array): ClientPaths {
  return Protobuf.decode<ClientPaths>(a, ClientPaths.decode);
}

export class ConnectionPaths {
  static encode(message: ConnectionPaths, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    const paths = message.paths;
    if (paths.length !== 0) {
      for (let i = 0; i < paths.length; ++i) {
        writer.uint32(18);
        writer.string(paths[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): ConnectionPaths {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConnectionPaths();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.paths.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  client_id: string;
  paths: Array<string>;

  constructor(client_id: string = "", paths: Array<string> = []) {
    this.client_id = client_id;
    this.paths = paths;
  }
}

export function decodeConnectionPaths(a: Uint8Array): ConnectionPaths {
  return Protobuf.decode<ConnectionPaths>(a, ConnectionPaths.decode);
}

export class Version {
  static encode(message: Version, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.identifier);

    const features = message.features;
    if (features.length !== 0) {
      for (let i = 0; i < features.length; ++i) {
        writer.uint32(18);
        writer.string(features[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): Version {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Version();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;

        case 2:
          message.features.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  identifier: string;
  features: Array<string>;

  constructor(identifier: string = "", features: Array<string> = []) {
    this.identifier = identifier;
    this.features = features;
  }
}

export function decodeVersion(a: Uint8Array): Version {
  return Protobuf.decode<Version>(a, Version.decode);
}

export enum State {
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  STATE_INIT = 1,
  STATE_TRYOPEN = 2,
  STATE_OPEN = 3,
}
