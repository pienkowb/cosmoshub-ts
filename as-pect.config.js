export default {
  entries: ["test/**/*.spec.ts"],

  async instantiate(memory, createImports, instantiate, binary) {
    let instance;
    const myImports = {
      env: { memory }
    };
    instance = instantiate(binary, createImports(myImports));
    return instance;
  }
};
