from django.db import models

class Appointment(models.Model):
    patient_name = models.CharField(max_length=100)
    doctor_name = models.CharField(max_length=100)
    apt_description = models.CharField(max_length=100)
    apt_date = models.CharField(max_length=50)
    existing_illness = models.CharField(max_length=100)


# Create your models here.

#def __str__(self):
   # return self.user_name
