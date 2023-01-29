from .views import *
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [			
	path('',index),
	path('cache',LogCacheList.as_view())
]	