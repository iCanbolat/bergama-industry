<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContentController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['web', 'activity']], function () {
    Route::get('news', [ContentController::class, 'news'])->middleware('language');
    Route::get('products', [ContentController::class, 'products']);
    Route::get('/test/{slug}', [ContentController::class, 'test'])->middleware('language');
    Route::post('/contact', [ContentController::class, 'contact']);
    Route::get('/home', [ContentController::class, 'home']);
    Route::get('/haber/{slug}', [ContentController::class, 'news_details'])->middleware('language');
    Route::get('/products/{slug}', [ContentController::class, 'product_details']);
    Route::get('/quality', [ContentController::class, 'quality']);
});



