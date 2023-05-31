const StorageConfig = {
  projectId: process.env.PROJECT_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  mediaBucket: process.env.STORAGE_MEDIA_BUCKET,
};

class StorageFile {
  buffer: Buffer;
  metadata: Map<string, string>;
  contentType: string;
}

export { StorageConfig, StorageFile };
