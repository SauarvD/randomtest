export const environment = {
  production: true,
  configFile: 'config/config.oss.json',
  baseurl: "https://mqqo4wbphh.execute-api.us-east-1.amazonaws.com/prod",
  api_doc_name: "https://{api_doc_name}.s3.amazonaws.comhttps://gitlab181212-jazz-s3-api-doc-20181212072919588400000002.s3.amazonaws.com/",
  envName: "oss",
  multi_env: true,
  slack_support: false,
  serviceTabs: ["overview", "{access control}", "metrics", "logs", "{cost}"],
  environmentTabs: ["overview", "deployments", "{code quality}", "metrics", "assets", "logs"],
  charachterLimits:{
    eventMaxLength:{
      "stream_name":128,
      "table_name":255,
      "queue_name":80,
      "bucket_name":63
    },
    serviceName:20,
    domainName:20
  },
  servicePatterns:{
    "serviceName":"^[A-Za-z0-9\-]+$",
    "domainName":"^[A-Za-z0-9\-]+$",
    "slackChannel":"^[A-Za-z0-9\-_]+$",
    "streamName":"[a-zA-Z0-9_.-]+",
    "tableName":"^[A-Za-z0-9\-._]+$",
    "queueName":"[A-Za-z0-9_-]+",
    "bucketName":"[a-z0-9-]+"
  },
  urls: {
    docs_link: "https://github.com/tmobile/jazz/wiki",
    swagger_editor: "http://editor.swagger.io/?url=",
    content_base: "https://github.com/tmobile/jazz-content/blob/master"
  },
  userJourney: {
    registrationMessage: 'Please contact your Jazz Admin(s) to get a registration code.'
  },
  aws: {
    account_number:'102707241671',
    region:"us-east-1",
  }
};
