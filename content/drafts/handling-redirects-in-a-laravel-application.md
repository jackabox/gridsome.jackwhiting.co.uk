---
title: Handling redirects in a Laravel Application
slug: handling-redirects-in-a-laravel-application
date: 2019-05-07 23:00:00 +0000
description: Got to handle those redirects
tags:
- laravel

---
Install and utilise Spatie's missing page redirector package, this will allow for us to cut down our dev time rapidly. Follow the setup instructions to install everything as default.

[https://github.com/spatie/laravel-missing-page-redirector](https://github.com/spatie/laravel-missing-page-redirector "https://github.com/spatie/laravel-missing-page-redirector")

Set up a new migration and model to handle the redirectors.

    <?php
    
    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;
    
    class CreateRedirectTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            Schema::create('redirects', function (Blueprint $table) {
                $table->increments('id');
                $table->string('old_url');
                $table->string('new_url');
            });
        }
    
        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
        {
            Schema::dropIfExists('redirects');
        }
    }

Set up a new service in App/Services/DatabaseRedirector.php that pulls all data from the database as such:

    <?php
    namespace App\Services;
    
    use App\Models\Redirect;
    use Spatie\MissingPageRedirector\Redirector\Redirector;
    use Symfony\Component\HttpFoundation\Request;
    
    class DatabaseRedirector implements Redirector
    {
        public function getRedirectsFor(Request $request): array
        {
            return Redirect::all()->flatMap(function($redirect) {
                return [$redirect->old_url => $redirect->new_url];
            })->toArray();
        }
    }

Change the redirect service provider to point to your new redirector class and then everything will be read from the database hunky dory.

If you are using Nova, you can create a new resource to manage these in the admin in a breeze.