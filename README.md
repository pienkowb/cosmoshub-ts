# cosmoshub-ts

An AssemblyScript library for decoding Cosmos Hub messages.

## Usage

```typescript
import { Any } from "@graphprotocol/cosmoshub-ts/assembly/google/protobuf/Any";
import { decodeMsgDelegate } from "@graphprotocol/cosmoshub-ts/assembly/cosmos/staking/v1beta1/MsgDelegate";

function logDelegator(any: Any): void {
  if (any.typeUrl == '/cosmos.staking.v1beta1.MsgDelegate') {
    const message = decodeMsgDelegate(any.value);
    console.log(message.delegatorAddress);
  }
}
```

## Development

Install [Protocol Buffer Compiler](https://github.com/protocolbuffers/protobuf/releases) (`protoc`) and [Lerna](https://lerna.js.org/).

### Fetch dependencies

```bash
git submodule update --init --force
```

### Build and test

```bash
yarn
yarn build
yarn test
```

## Update dependencies

In order to update a dependency, change the value of the `branch` option in the corresponding section of the `.gitmodules` file.

> **Note**<br>
> A submodule should always point to a tag.

```bash
git -C <submodule_dir> checkout <new_tag>
yarn build
yarn test
git commit -m <submodule_dir>
```
