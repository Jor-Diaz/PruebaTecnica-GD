from django.db import models

class CacheCallsGD(models.Model):
    id_cache = models.AutoField(primary_key = True)
    code_filter = models.CharField(max_length=255)
    comuna_filter = models.CharField(max_length=255)
    page_filter = models.IntegerField(default=1)
    result = models.TextField(blank=True)
    date_call = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.code_filter +" - " + self.comuna_filter + " - "+ str(self.date_call)