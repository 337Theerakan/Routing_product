<?php

namespace App\Http\Controllers;

use App\Models\Production;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductionController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            $productions = Production::all();
            return Inertia::render('Products/Index', ['productions' => $productions]);
        } else {
            return redirect()->route('welcome');
        }
    }

    public function show($id)
    {
        if (Auth::check()) {
            $production = Production::findOrFail($id);
            return Inertia::render('Products/Show', ['production' => $production]);
        } else {
            return redirect()->route('welcome');
        }
    }
}

/*
ProductionController ทำหน้าที่ตรวจสอบการล็อกอินของผู้ใช้ก่อนที่จะอนุญาตให้ดูข้อมูลสินค้า
ถ้าผู้ใช้ล็อกอินแล้ว, ข้อมูลสินค้าจะถูกดึงจากฐานข้อมูลและส่งไปยัง Inertia View (ในกรณีนี้คือ Vue.js หรือ React Component) เพื่อแสดงผล
ถ้าผู้ใช้ไม่ได้ล็อกอิน, เขาจะถูกเปลี่ยนเส้นทางไปที่หน้า welcome (หน้าแรกของแอปพลิเคชัน) */
