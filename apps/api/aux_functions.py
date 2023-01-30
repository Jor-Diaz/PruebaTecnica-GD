import requests
from .models import CacheCallsGD

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