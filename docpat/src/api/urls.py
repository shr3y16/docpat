from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name = 'api-overview'),
    path('apt-list/', views.aptList, name="apt-list"),
    path('apt-detail/<str:pk>', views.aptDetail, name="apt-detail"),
    path('apt-create/', views.aptCreate, name="apt-create"),
    path('apt-update/<str:pk>', views.aptUpdate, name="apt-update"),
    path('apt-delete/<str:pk>', views.aptDelete, name="apt-delete"),
]
