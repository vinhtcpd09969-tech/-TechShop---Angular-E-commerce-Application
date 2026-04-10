import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

// Hàm tự viết: Check Username (Bắt đầu bằng chữ, chỉ chứa chữ và số)
function usernameValidator(control: AbstractControl) {
  if (!control.value) return null;
  const regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
  return regex.test(control.value) ? null : { invalidUsername: true };
}

// Hàm tự viết: Check Họ tên (Không số/ký tự đặc biệt, >= 2 từ)
function fullNameValidator(control: AbstractControl) {
  if (!control.value) return null;
  const regex = /^[a-zA-ZÀ-ỹ]+(\s+[a-zA-ZÀ-ỹ]+)+$/;
  return regex.test(control.value.trim()) ? null : { invalidFullName: true };
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  standalone: false
})
export class UserForm implements OnInit {

  userForm!: FormGroup; // Dùng FormGroup chuẩn thay vì any
  avatarPreview: string | ArrayBuffer | null = 'https://placehold.co/150';
  imageError: string = ''; // Chứa thông báo lỗi ảnh

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, usernameValidator]],
      fullName: ['', [Validators.required, Validators.minLength(3), fullNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      age: [18, [Validators.required, Validators.min(18), Validators.max(60)]],
      gender: ['Male'],
      avatar: [null, Validators.required]
    });
  }

  // Getter hỗ trợ viết gọn bên HTML (f['username'])
  get f() {
    return this.userForm.controls;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.imageError = '';

    if (!file) return;

    // 1. Check dung lượng (< 8MB)
    if (file.size > 8 * 1024 * 1024) {
      this.imageError = 'File quá lớn (> 8MB).';
      this.userForm.get('avatar')?.setErrors({ invalidImage: true });
      this.avatarPreview = 'https://placehold.co/150?text=Error';
      return;
    }

    // 2. Check độ phân giải (> 400x400)
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width <= 400 || img.height <= 400) {
        this.imageError = 'Độ phân giải phải lớn hơn 400x400.';
        this.userForm.get('avatar')?.setErrors({ invalidImage: true });
        this.avatarPreview = 'https://placehold.co/150?text=Error';
      } else {
        // Ảnh hợp lệ
        this.userForm.get('avatar')?.setErrors(null);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatarPreview = e.target?.result || null;
        };
        reader.readAsDataURL(file);
      }
    };
  }

  onSubmit() {
    if (this.userForm.invalid) {
      alert('Vui lòng kiểm tra lại thông tin form!');
      return;
    }

    console.log('Dữ liệu hợp lệ:', this.userForm.value);
    alert('Thêm User thành công!');
  }
}