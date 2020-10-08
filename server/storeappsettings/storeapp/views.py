from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
# Create your views here.


class GetItems(View):

    def get(self, request):
        return HttpResponse('dupa')