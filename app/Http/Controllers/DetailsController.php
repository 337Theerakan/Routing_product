<?php

namespace App\Http\Controllers;

use App\Models\Production;
use Illuminate\Http\Request;

class DetailsController extends Controller
{
    public function getProducts()
    {
        return Production::all();
    }

    public function getProductById($id)
    {
        return Production::findOrFail($id);
    }
}
//ในการสร้าง API หรือ Route สำหรับดึงข้อมูลผลิตภัณฑ์ต่าง ๆ เเละเช็คผูกหรือผิดหาก ผิดส่งหน้า 404
