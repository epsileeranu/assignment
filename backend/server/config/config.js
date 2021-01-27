const devConfig = {
  config: true,
  port: process.env.port || 6001,
  dbURI: 'mongodb://127.0.0.1/krishak'
};

const prodConfig = {
  config: false,
  port: process.env.port || 6001,
  dbURI: 'https://anotherURI'
};

let config = {};

if(devConfig.config){
  config = {...prodConfig, ...devConfig};
}else{
  config = {...devConfig, ...prodConfig};
}

// set seedDatabase true or false
config.isSeedDatabase = true;

module.exports = config;
