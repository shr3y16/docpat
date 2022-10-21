from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AppointmentSerializer
from .models import Appointment


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'list':'list',
        'addapt':'addapt',
    }
    return Response(api_urls)
# Create your views here.

@api_view(['GET']) 
def aptList(request):
    apts = Appointment.objects.all()
    serializer = AppointmentSerializer(apts, many = True)
    return Response(serializer.data)

@api_view(['GET']) 
def aptDetail(request, pk):
    apts = Appointment.objects.get(id=pk)
    serializer = AppointmentSerializer(apts, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def aptCreate(request):
    serializer = AppointmentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def aptUpdate(request, pk):
    apt = Appointment.objects.get(id=pk)
    serializer = AppointmentSerializer(instance=apt, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def aptDelete(request, pk):
    apt = Appointment.objects.get(id=pk)
    apt.delete()

    return Response("Item Deleted")


