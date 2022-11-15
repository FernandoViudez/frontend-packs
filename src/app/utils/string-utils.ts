import { environment } from '../../environments/environment';

export class StringUtils {
  static buildBucketPath(fileName: string, ext: string, ...folders: string[]): string {
    let path = environment.srcUrl;
    for (const folderName of folders) {
      path += '/' + folderName;
    }
    path += `/${fileName}.${ext}`;
    return path;
  }
}
