export interface Note {
  author: string;
  branch: string
  downloadUrl: string;
  semester: number;
  subject: string;
  title: string;
  views: number;
  date: string;
  size: number;
  type: string; // 'notes', 'pfs', 'ebooks'
}