import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Định nghĩa cấu trúc của 1 bài Post từ API trả về
export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Đường dẫn gốc của API
  private apiUrl = 'https://gorest.co.in/public/v2/users';
  
  // Chìa khóa (Token) để được phép lấy dữ liệu từ server
  private apiKey = 'c89f48aaaf1fa9874a9166e1d7779a082c17cba5f9fe0372e86122812b1e34bf';

  // Đóng gói chìa khóa vào Header
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.apiKey}`,
    'Content-Type': 'application/json'
  });

  // Bơm HttpClient vào để sử dụng
  constructor(private http: HttpClient) {}

  // HÀM LAB 7: Lấy toàn bộ bài viết của 1 User cụ thể
  getUserPosts(userId: string): Observable<Post[]> {
    const url = `${this.apiUrl}/${userId}/posts`;
    return this.http.get<Post[]>(url, { headers: this.headers });
  }
}