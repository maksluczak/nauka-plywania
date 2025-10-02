from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, StudentSerializer, ClassSerializier, EnrolmentSerializer, AbsenceSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Student, Class, Enrolment, Absence

# Create your views here.
class StudentsListCreate(generics.ListCreateAPIView):
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Student.objects.filter(user_obj=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user_obj=self.request.user)
        else:
            print(serializer.errors)

class StudentDelete(generics.DestroyAPIView):
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Student.objects.filter(user_obj=user)

    
    
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    permission_classes = [AllowAny]


