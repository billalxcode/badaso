<?php

namespace Uasoft\Badaso\Middleware;

use Closure;
use Uasoft\Badaso\Facades\Badaso;
use Uasoft\Badaso\Helpers\ApiResponse;
use Uasoft\Badaso\Helpers\AuthenticatedUser;

class BadasoCheckPermissionsForBread
{
    public function handle($request, Closure $next, $slug, $action)
    {
        $data_type = Badaso::model('DataType')::where('slug', $slug)->first();

        if ($data_type) {
            if ($data_type->generate_permissions == false) {
                return $next($request);
            } else {
                $continue = AuthenticatedUser::isAllowedTo($action.'_'.$data_type->name);

                if ($continue) {
                    return $next($request);
                } else {
                    return ApiResponse::forbidden();
                }
            }
        }

        return ApiResponse::forbidden();
    }
}