<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App;

class LanguageManager
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

    if(!in_array($request->server('HTTP_ACCEPT_LANGUAGE'), config('voyager.multilingual.locales'))){
	    throw new  \App\Exceptions\LanguageNotFoundException();
        }
        $request->api_pref_lang = $request->server('HTTP_ACCEPT_LANGUAGE');
        return $next($request);
    }
}
