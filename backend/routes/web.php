<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Models\User;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;

// Підтвердження email через посилання
Route::get('/email/verify/{id}/{hash}', function (Request $request, $id, $hash) {
    $user = User::findOrFail($id);

    if (!hash_equals($hash, sha1($user->getEmailForVerification()))) {
        abort(403, 'Недійсне посилання для підтвердження email');
    }

    if (!$user->hasVerifiedEmail()) {
        $user->markEmailAsVerified();
        event(new \Illuminate\Auth\Events\Verified($user));
    }

    // Перенаправлення на frontend сторінку для логіну
    // return Redirect::to(env('FRONTEND_URL') . '/email-verified');
    return redirect()->to(env('FRONTEND_URL') . '/email-verified')->withoutCookie('XSRF-TOKEN');
})->middleware('signed')->name('verification.verify');

// Повторна відправка листа
Route::post('/email/resend', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return response()->json(['message' => 'Лист для підтвердження надіслано!']);
})->name('verification.resend');

// відновлення паролю
Route::get('/reset-password/{token}', function () {
    return File::get(public_path('index.html'));
})->where('token', '.*');


// Route::middleware(['auth', 'profile.complete'])->group(function () {
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
// });

// Адмін-панель (лише для адмінів)
// Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
//     Route::get('/users', [AdminController::class, 'index'])->name('admin.users'); // Отримати список користувачів
//     Route::get('/users/{id}', [UserController::class, 'show']); // Отримати конкретного користувача
//     Route::put('/users/{id}', [UserController::class, 'update']); // Оновити користувача
//     Route::delete('/users/{id}', [AdminController::class, 'destroy']); // Видалити користувача
//     Route::patch('/users/{id}/role', [AdminController::class, 'updateRole'])->name('admin.users.role'); // Змінити роль
// });


// Передача всіх маршрутів фронтенду React
Route::get('/run-migrations/{key}', function ($key) {
    if ($key !== env('DEPLOY_KEY')) {
        abort(403, 'Недоступно');
    }
    Artisan::call('migrate', ['--force' => true]);
    return response('✅ Міграції виконано: ' . Artisan::output(), 200);
});

Route::get('/run-seeder/{key}', function ($key) {
    if ($key !== env('DEPLOY_KEY')) {
        abort(403, 'Недоступно');
    }
    Artisan::call('db:seed', [
        '--class' => 'RoleSeeder',
        '--force' => true
    ]);
    return response('✅ Сідер виконано: ' . Artisan::output(), 200);
});

Route::get('/run-session-migration/{key}', function($key) {
    if ($key !== env('DEPLOY_KEY')) {
        abort(403, 'Недоступно');
    }

    Artisan::call('session:table');
    $output = Artisan::call('migrate', ['--force' => true]);

    return response("Session table migration run successfully. Output code: $output", 200);
});



Route::get('/{any}', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '.*');
