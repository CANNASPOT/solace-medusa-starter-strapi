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
          // Add this line to explicitly disable ACLs
          params: {
            Bucket: env("DO_SPACE_BUCKET"),
            ACL: null, // Or you might try 'private' if null doesn't work
          },
        },
        s3: {
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