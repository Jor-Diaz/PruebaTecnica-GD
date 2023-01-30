import requests
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from .models import CacheCallsGD
import ast
from rest_framework.generics import ListAPIView
from .serializers import *
from rest_framework.renderers import JSONRenderer

@api_view(['POST'])
@csrf_exempt 
def LogCacheList(request):		
    aux = CacheCallsGD.objects.all()
    serializador = LogCacheSerializer(aux)
    return JSONRenderer(serializador.data)

def generate_request(payload):
    response = requests.post('https://datos.gob.cl/api/3/action/datastore_search',json=payload)
    if response.status_code == 200:
        return response.json()
    else:
        return {'error':'error'}

def create_cache_register(page_aux,code_aux,cm_aux,result):
    aux_cache_register = CacheCallsGD()
    aux_cache_register.code_filter = code_aux
    aux_cache_register.comuna_filter = cm_aux
    aux_cache_register.page_filter = page_aux
    aux_cache_register.result = result
    aux_cache_register.save()


def search_in_cache(page_aux,code_aux,cm_aux):
    aux = CacheCallsGD.objects.filter(code_filter=code_aux,comuna_filter = cm_aux, page_filter = page_aux).order_by("date_call")
    if len(aux)>0:
        return True, aux[0].result
    else:
        return False,[]
    
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
    