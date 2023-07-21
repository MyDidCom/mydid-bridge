export default {
  install(app) {
    const envVar = process.env.VUE_APP_ENV_VAR;

    const utils = {
      async getEnvVar() {
        return envVar;
      },
    };
    app.provide('utils', utils);
  },
};
