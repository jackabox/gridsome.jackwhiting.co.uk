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