from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.StudentsListCreate.as_view(), name='student-create'),
    path('students/delete/<int:pk>/', views.StudentDelete.as_view(), name='delete-student')
]