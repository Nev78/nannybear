<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use App\Events\UserRegistered;
use App\Listeners\SendWelcomeEmail;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::listen(
            UserRegistered::class,
            SendWelcomeEmail::class
        );
        $this->app['router']->aliasMiddleware('role', \App\Http\Middleware\RoleMiddleware::class);
    }
}
