/**
 * @type {import('vite').UserConfig}
 */
const config = {
  build: {
    emptyOutDir: false,
    outDir: "build",
    target: "es2015",
    lib: {
      entry: "src/{{cookiecutter.component_name}}.ts",
  
      name: "{{cookiecutter.component_name}}"
    },
  },
};

export default config;
