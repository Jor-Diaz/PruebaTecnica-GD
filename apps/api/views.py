from django.shortcuts import render
#from django.http import JsonResponse
import requests
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

def generate_request(payload):
    response = requests.post('https://datos.gob.cl/api/3/action/datastore_search',json=payload)
    if response.status_code == 200:
        return response.json()
    else:
        return {'error':'error'}

    
@api_view(['POST'])
@csrf_exempt 
def hola(request):
    print(request.POST.keys())
    data_post={ 
        "resource_id": "3d54e961-d81b-4507-aeee-7a433e00a9bf",
        "q": "",
        "filters": {},
        "limit": 50,
        "offset": 0
    }
    if request.method == 'POST':
        if "data" in request.data.keys() and "p" in request.data['data']:
            offset_aux = 50*int(request.data["data"]["p"])
            data_post["offset"] = offset_aux
    result=generate_request(data_post)
    return Response(result)
    