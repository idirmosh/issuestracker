import S3 from "aws-sdk/clients/s3";
import { v4 as uuid } from "uuid";

const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME } =
  process.env;

const fileId = uuid();
const signedUrlExpireSeconds = 5 * 60; // expires in 5 min

const s3 = new S3({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  signatureVersion: "v4",
});

export async function generateSignedS3URL(name: string, type: string) {
  const fileParams = {
    Bucket: AWS_BUCKET_NAME,
    Key: `${fileId}.jpg`,
    Expires: signedUrlExpireSeconds,
    ContentType: type,
  };

  return new Promise(async (resolve, reject) => {
    try {
      await s3.getSignedUrl("putObject", fileParams, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    } catch (error) {
      return reject(error);
    }
  });
}
