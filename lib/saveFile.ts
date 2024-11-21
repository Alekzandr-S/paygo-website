import fs from 'fs';
import path from 'path';

// Define a type for the input file parameter if necessary
// This can be as simple or as complex as your application requires
interface UploadableFile {
  name: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
}

/**
 * Saves a file to the specified folder within the 'public' directory.
 * @param file The file to save.
 * @param folder The folder within 'public' where the file will be saved.
 * @returns The path to the saved file.
 */
export const saveFile = async (file: UploadableFile, folder: string): Promise<string> => {
  const uploadsDir = path.resolve('./public', folder);
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const filePath = path.join(uploadsDir, file.name);

  const data = await file.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(new Uint8Array(data)));

  return filePath;
};
