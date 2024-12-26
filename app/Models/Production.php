<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Production extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'price', 'image'];
}
/*โมเดล Production.php นี้ทำหน้าที่หลักในการ:

เชื่อมต่อกับตาราง productions ในฐานข้อมูล
จัดการข้อมูลในตารางนี้โดยใช้ Eloquent ORM เช่น การดึงข้อมูล, สร้างข้อมูลใหม่, อัปเดต, หรือลบข้อมูล
กำหนดฟิลด์ที่สามารถกรอกข้อมูลได้อย่างปลอดภัยด้วย Mass Assignment Protection (โดยใช้ $fillable)
*/


