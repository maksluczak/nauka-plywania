from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Student(models.Model):
    firstname = models.CharField(max_lenght = 50)
    lastname = models.CharField(max_length = 50)
    date_of_birth = models.DateField()
    user_obj = models.ForeignKey(User, on_delete=models.CASCADE, related_name='students')

    def __str__(self):
        return f'{self.firstname} {self.lastname}'

class Class(models.Model):
    weekday = models.SmallIntegerField()
    hour = models.PositiveIntegerField()

    def __str__(self):
        return f'Day {self.weekday}, Hour{self.hour}'

class Enrolment(models.Model):
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='enrolment')
    student_obj = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrolment')
    active = models.BooleanField(default=True)

    def __str__(self):
        return f'Student {self.student_obj} -> Class {self.class_obj}'

class Absence(models.Model):
    class_obj = models.ForeignKey(Class, on_delete=models.CASCADE, related_name="absences")
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="absences")
    absence_date = models.DateField()

    def __str__(self):
        return f"{self.student} absent {self.absence_date} (class {self.class_obj})"