<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use App\Models\Product;
use App\Models\Home;
use App\Models\Banner;
use App\Models\About;
use App\Models\Contact;
use App\Models\Quality;
use App\Models\Certificate;
use TCG\Voyager\Models\Page;
use Illuminate\Support\Str;

class ContentController extends Controller
{
    public function news(Request $request) {
        $news = News::all();
        $news = $news->translate($request->api_pref_lang);
        return response()->json($news);
    }

    public function news_details(String $slug) {
        $details = News::where('slug', $slug)->first();
        $details->image = url(sprintf("storage/%s", str_replace('\\','/',$details->image)));

        return response()->json($details);
    }

    public function product_details(String $slug) {
        $details = Product::where('slug', $slug)->first();
        $details->image = json_decode($details->image);
        $details->image = array_map(function($i){
            return $i = url(sprintf("storage/%s", str_replace('\\','/',$i)));
        },$details->image);

        return response()->json($details);
    }

    //Get Home Page Data
    public function home(Request $request) {
        $home_page = Home::all();
        //Images
        $home_page->map(function($item){
            $item->banner = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->banner)
                )
            );

            $item->about_images = json_decode($item->about_images);
            $item->about_images = array_map(function ($image) {
                return url( sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $image)
                ));
            }, $item->about_images);


            $item->service_images = json_decode($item->service_images);
            $item->service_images = array_map(function ($image) {
                return url( sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $image)
                ));
            }, $item->service_images);


            $item->product_images = json_decode($item->product_images);
            $item->product_images = array_map(function($image){
                return url(
                    sprintf(
                        "storage/%s",
                        str_replace('\\','/',$image)
                    )
                    );
            }, $item->product_images);


            $item->certificates= Quality::all();
            $item->certificates->map(function($item){
                $item->image = url(
                    sprintf("storage/%s",str_replace('\\','/',$item->image))
                );
            });
        });

        return response()->json($home_page);
    }

    //Get Banner with Data per page
    public function test($slug){

        switch ($slug) {
            case 'hakkimizda':
                # code...
                $data = Banner::where('slug', $slug)->first();
                $data->banner = url(sprintf("storage/%s", str_replace('\\', '/',$data->banner)));
                $data->page = About::all();

                break;
            case 'urunler':
                $data = Banner::where('slug', $slug)->first();
                $data->banner = url(sprintf("storage/%s", str_replace('\\', '/',$data->banner)));
                $data->page = Product::all();

                $data->page->map(function($i){
                   $i->image = json_decode($i->image);
                   $i->image = array_map(function($i){
                    return url(
                        sprintf(
                            "storage/%s",
                            str_replace('\\','/',$i)
                        )
                        );
                   },$i->image);
                });
                break;
            case 'haberler':
                $data = Banner::where('slug', $slug)->first();
                $data->banner = url(sprintf("storage/%s", str_replace('\\', '/',$data->banner)));
                $data->page = News::all();

                $data->page->map(function($i){
                    $i->mini_content = Str::words(strip_tags($i->content), 40, '...');
                    $i->image = url(sprintf("storage/%s", str_replace('\\', '/',$i->image)));
                });

                break;
            case 'kalite-sistemleri':
                $data = Banner::where('slug', $slug)->first();
                $data->banner = url(sprintf("storage/%s", str_replace('\\', '/',$data->banner)));
                $data->page = Certificate::all();

                $data->page->map(function($i){
                    //ISO
                    $i->certificate_iso = json_decode($i->certificate_iso);
                    $i->certificate_iso = array_map(function($i){
                        return url(
                            sprintf(
                                "storage/%s",
                                str_replace('\\','/',$i)
                            )
                            );
                    },$i->certificate_iso);
                    //ASME
                    $i->certificate_asme = json_decode($i->certificate_asme);
                    $i->certificate_asme = array_map(function($i){
                        return url(
                            sprintf(
                                "storage/%s",
                                str_replace('\\','/',$i)
                            )
                            );
                    },$i->certificate_asme);
                    //EN
                    $i->certificate_en = json_decode($i->certificate_en);
                    $i->certificate_en = array_map(function($i){
                        return url(
                            sprintf(
                                "storage/%s",
                                str_replace('\\','/',$i)
                            )
                            );
                    },$i->certificate_en);
                    //SIDE Images
                    $i->certificate_side = json_decode($i->certificate_side);
                    $i->certificate_side = array_map(function($i){
                        return url(
                            sprintf(
                                "storage/%s",
                                str_replace('\\','/',$i)
                            )
                            );
                    },$i->certificate_side);
                });

                break;
            default:
                'Not found';
                break;
        }

        return response()->json($data);
    }
    public function contact(Request $req){
        try {
            $data = $req->validate([
                'name' => 'required|max:255',
                'email' => 'required|max:255|email',
                'subject' => 'required|max:255|',
                'message' => 'required|max:1000',
            ]);
            $contact = Contact::create($data);
            return response()->json($contact->makeHidden(['id','created_at','updated_at']), 201);
        } catch(\Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }
}
