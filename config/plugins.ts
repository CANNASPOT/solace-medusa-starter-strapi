export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("DO_SPACE_ACCESS_KEY"),
          secretAccessKey: env("DO_SPACE_SECRET_KEY"),
          endpoint: env("DO_SPACE_ENDPOINT"),
          region: env("DO_SPACE_REGION"),
        },
        s3:{
          bucket: env("DO_SPACE_BUCKET"),
          path: env("DO_SPACE_PATH"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});