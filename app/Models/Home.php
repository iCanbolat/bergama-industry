<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;


class Home extends Model
{
    use Translatable;
    protected $translatable = ['about_content','product_content'];
}
