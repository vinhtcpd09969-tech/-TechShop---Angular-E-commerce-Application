import '@angular/compiler'; // Dòng quan trọng để fix lỗi JIT compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app-module'; 

// Chú ý: Nếu trong file src/app/app-module.ts bạn đặt tên class là AppModule2 
// thì bạn sửa chữ AppModule ở dòng trên và dòng dưới thành AppModule2 nhé!

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));