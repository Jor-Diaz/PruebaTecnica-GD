from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from .models import CacheCallsGD
from .serializers import *
from .aux_functions import *

import ast

@api_view(['POST',])
@csrf_exempt 
def LogCacheList(request):
    items = CacheCallsGD.objects.all()
    items_serializer = LogCacheSerializer(items, many=True)
    return JsonResponse(items_serializer.data, safe=False)

@api_view(['POST'])
@csrf_exempt 
def index(request):
    data_post={ 
        "resource_id": "3d54e961-d81b-4507-aeee-7a433e00a9bf",
        "q": "",
        "filters": {},
        "limit": 50,
        "offset": 0
    }
    if request.method == 'POST':
        page_aux = 0
        code_aux = ""
        cm_aux = ""
        if "data" in request.data.keys() and "p" in request.data['data'] and request.data["data"]["p"] != None:                        
            page_aux = int(request.data["data"]["p"])
            offset_aux = 50*int(request.data["data"]["p"])
            data_post["offset"] = offset_aux
        if "data" in request.data.keys() and "code" in request.data['data'] and  request.data['data']["code"]!="" and request.data["data"]["code"] != None :            
            code_aux = request.data["data"]["code"].upper()    
            data_post["filters"]["CODIGO"] = code_aux
        if "data" in request.data.keys() and "cm" in request.data['data'] and  request.data['data']["cm"]!="" and request.data["data"]["cm"] != None :            
            cm_aux = request.data["data"]["cm"].upper()    
            data_post["filters"]["COMUNA"] = cm_aux    
        
        value,result= search_in_cache(page_aux,code_aux,cm_aux)
        if value == True:            
            result = ast.literal_eval(result)
            return Response(result)
        result=generate_request(data_post)
        create_cache_register(page_aux,code_aux,cm_aux,result)
        return Response(result)
    