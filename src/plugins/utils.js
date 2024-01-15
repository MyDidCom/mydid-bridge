import bs58 from 'bs58';

export default {
  install(app) {
    const utils = {
      ipfs: {
        async getJsonDataFromCID(cid) {
          return new Promise((resolve, reject) => {
            fetch('https://myntfsid.mypinata.cloud/ipfs/' + cid)
              .then(function (response) {
                return response.arrayBuffer();
              })
              .then(function (buffer) {
                const decoder = new TextDecoder('utf-8');
                const text = decoder.decode(buffer);
                resolve(JSON.parse(text));
              })
              .catch((err) => reject(err));
          });
        },
        async getJsonDataFromUrl(url) {
          if (
            !url.startsWith('https://myntfsid.mypinata.cloud/') &&
            !url.startsWith('https://resolver.mydid.eu/')
          )
            throw 'Bad URL input for method : getJsonDataFromUrl';
          return new Promise((resolve, reject) => {
            fetch(url)
              .then(function (response) {
                return response.arrayBuffer();
              })
              .then(function (buffer) {
                const decoder = new TextDecoder('utf-8');
                const text = decoder.decode(buffer);
                resolve(JSON.parse(text));
              })
              .catch((err) => reject(err));
          });
        },
        hashToCID(hash) {
          const cleanHash = (hash + '').replace('0x', '');
          const bytes = Buffer.from('1220' + cleanHash, 'hex');
          const cid = bs58.encode(bytes);
          return cid;
        },
        getUrlFromCID(cid) {
          return 'https://myntfsid.mypinata.cloud/ipfs/' + cid;
        },
      },
    };
    app.provide('utils', utils);
  },
};
