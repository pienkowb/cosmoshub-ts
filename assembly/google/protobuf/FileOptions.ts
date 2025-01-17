// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { UninterpretedOption } from "./UninterpretedOption";
import { OptimizeMode } from "./FileOptions/OptimizeMode";

export class FileOptions {
  static encode(message: FileOptions, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.javaPackage);

    writer.uint32(66);
    writer.string(message.javaOuterClassname);

    writer.uint32(80);
    writer.bool(message.javaMultipleFiles);

    writer.uint32(160);
    writer.bool(message.javaGenerateEqualsAndHash);

    writer.uint32(216);
    writer.bool(message.javaStringCheckUtf8);

    writer.uint32(72);
    writer.int32(message.optimizeFor);

    writer.uint32(90);
    writer.string(message.goPackage);

    writer.uint32(128);
    writer.bool(message.ccGenericServices);

    writer.uint32(136);
    writer.bool(message.javaGenericServices);

    writer.uint32(144);
    writer.bool(message.pyGenericServices);

    writer.uint32(336);
    writer.bool(message.phpGenericServices);

    writer.uint32(184);
    writer.bool(message.deprecated);

    writer.uint32(248);
    writer.bool(message.ccEnableArenas);

    writer.uint32(290);
    writer.string(message.objcClassPrefix);

    writer.uint32(298);
    writer.string(message.csharpNamespace);

    writer.uint32(314);
    writer.string(message.swiftPrefix);

    writer.uint32(322);
    writer.string(message.phpClassPrefix);

    writer.uint32(330);
    writer.string(message.phpNamespace);

    writer.uint32(354);
    writer.string(message.phpMetadataNamespace);

    writer.uint32(362);
    writer.string(message.rubyPackage);

    const uninterpretedOption = message.uninterpretedOption;
    for (let i: i32 = 0; i < uninterpretedOption.length; ++i) {
      writer.uint32(7994);
      writer.fork();
      UninterpretedOption.encode(uninterpretedOption[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): FileOptions {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new FileOptions();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.javaPackage = reader.string();
          break;

        case 8:
          message.javaOuterClassname = reader.string();
          break;

        case 10:
          message.javaMultipleFiles = reader.bool();
          break;

        case 20:
          message.javaGenerateEqualsAndHash = reader.bool();
          break;

        case 27:
          message.javaStringCheckUtf8 = reader.bool();
          break;

        case 9:
          message.optimizeFor = reader.int32();
          break;

        case 11:
          message.goPackage = reader.string();
          break;

        case 16:
          message.ccGenericServices = reader.bool();
          break;

        case 17:
          message.javaGenericServices = reader.bool();
          break;

        case 18:
          message.pyGenericServices = reader.bool();
          break;

        case 42:
          message.phpGenericServices = reader.bool();
          break;

        case 23:
          message.deprecated = reader.bool();
          break;

        case 31:
          message.ccEnableArenas = reader.bool();
          break;

        case 36:
          message.objcClassPrefix = reader.string();
          break;

        case 37:
          message.csharpNamespace = reader.string();
          break;

        case 39:
          message.swiftPrefix = reader.string();
          break;

        case 40:
          message.phpClassPrefix = reader.string();
          break;

        case 41:
          message.phpNamespace = reader.string();
          break;

        case 44:
          message.phpMetadataNamespace = reader.string();
          break;

        case 45:
          message.rubyPackage = reader.string();
          break;

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

  javaPackage: string;
  javaOuterClassname: string;
  javaMultipleFiles: bool;
  javaGenerateEqualsAndHash: bool;
  javaStringCheckUtf8: bool;
  optimizeFor: OptimizeMode;
  goPackage: string;
  ccGenericServices: bool;
  javaGenericServices: bool;
  pyGenericServices: bool;
  phpGenericServices: bool;
  deprecated: bool;
  ccEnableArenas: bool;
  objcClassPrefix: string;
  csharpNamespace: string;
  swiftPrefix: string;
  phpClassPrefix: string;
  phpNamespace: string;
  phpMetadataNamespace: string;
  rubyPackage: string;
  uninterpretedOption: Array<UninterpretedOption>;

  constructor(
    javaPackage: string = "",
    javaOuterClassname: string = "",
    javaMultipleFiles: bool = false,
    javaGenerateEqualsAndHash: bool = false,
    javaStringCheckUtf8: bool = false,
    optimizeFor: OptimizeMode = OptimizeMode.SPEED,
    goPackage: string = "",
    ccGenericServices: bool = false,
    javaGenericServices: bool = false,
    pyGenericServices: bool = false,
    phpGenericServices: bool = false,
    deprecated: bool = false,
    ccEnableArenas: bool = true,
    objcClassPrefix: string = "",
    csharpNamespace: string = "",
    swiftPrefix: string = "",
    phpClassPrefix: string = "",
    phpNamespace: string = "",
    phpMetadataNamespace: string = "",
    rubyPackage: string = "",
    uninterpretedOption: Array<UninterpretedOption> = []
  ) {
    this.javaPackage = javaPackage;
    this.javaOuterClassname = javaOuterClassname;
    this.javaMultipleFiles = javaMultipleFiles;
    this.javaGenerateEqualsAndHash = javaGenerateEqualsAndHash;
    this.javaStringCheckUtf8 = javaStringCheckUtf8;
    this.optimizeFor = optimizeFor;
    this.goPackage = goPackage;
    this.ccGenericServices = ccGenericServices;
    this.javaGenericServices = javaGenericServices;
    this.pyGenericServices = pyGenericServices;
    this.phpGenericServices = phpGenericServices;
    this.deprecated = deprecated;
    this.ccEnableArenas = ccEnableArenas;
    this.objcClassPrefix = objcClassPrefix;
    this.csharpNamespace = csharpNamespace;
    this.swiftPrefix = swiftPrefix;
    this.phpClassPrefix = phpClassPrefix;
    this.phpNamespace = phpNamespace;
    this.phpMetadataNamespace = phpMetadataNamespace;
    this.rubyPackage = rubyPackage;
    this.uninterpretedOption = uninterpretedOption;
  }
}

export function encodeFileOptions(message: FileOptions): Uint8Array {
  return Protobuf.encode(message, FileOptions.encode);
}

export function decodeFileOptions(buffer: Uint8Array): FileOptions {
  return Protobuf.decode<FileOptions>(buffer, FileOptions.decode);
}
