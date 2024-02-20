import axios from 'axios';

// Tạo một instance axios mới với các cài đặt CORS
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Thay thế URL bằng URL của tài nguyên bạn đang cố gắng truy cập
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
