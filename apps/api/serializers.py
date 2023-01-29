from rest_framework import serializers
from .models import *

class LogCacheSerializer(serializers.ModelSerializer):
	class Meta:
		model=CacheCallsGD
		fields=('__all__')
