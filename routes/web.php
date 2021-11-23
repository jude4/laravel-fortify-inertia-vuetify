<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;


Route::get('/', [WelcomeController::class, 'index'])->name('welcome');


//Route::middleware('auth:sanctum')->group(function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
//});